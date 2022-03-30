import './styles.scss';

import _ from 'lodash';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import Joi from 'joi';

const AvForm = ({joiValidate, defaultValues = {}, children, onSubmit, onRealtime = null, className = ''}) => {
    const {register, handleSubmit, errors, clearErrors, setValue, getValues, control} = useForm({
        mode: 'all',
        defaultValues,
        resolver: joiResolver(Joi.object(joiValidate)),
    });
    const [values, setValues] = useState(defaultValues);

    const debounced = useRef(
        _.debounce(() => {
            if (!_.isEqual(values, getValues())) {
                setValues(getValues());
            }
        }, 500)
    );
    useEffect(() => {
        if (onRealtime) {
            onRealtime(values);
        }
    }, [values]);

    useEffect(() => {
        return () => {
            debounced.current.cancel();
        };
    }, []);

    return useMemo(() => {
        return (
            <form className={`av-form ${className}`} onSubmit={handleSubmit(onSubmit)} onChange={debounced.current}>
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child) && child?.type?.displayName?.startsWith('Av')) {
                        let error;
                        if (child.props.name) {
                            error = _.get(errors, `${child.props.name}.message`);
                        }

                        const newProps = {
                            defaultValue: defaultValues[child.props.name],
                            control,
                            register,
                            setValue,
                            error,
                        };

                        if (['AvSelect', 'AvUpload'].includes(child.type.displayName)) {
                            newProps.onChange = (...params) => {
                                clearErrors(child.props.name);
                                if (child.props.onChange) {
                                    child.props.onChange(...params);
                                }
                                debounced.current();
                            };
                        }

                        return React.cloneElement(child, newProps);
                    }
                    return child;
                })}
            </form>
        );
    }, [children, errors]);
};

export default AvForm;
