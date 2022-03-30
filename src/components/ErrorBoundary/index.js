import './styles.scss';

import {ReactComponent as ErrorIcon} from 'assets/images/icons/ic_error.svg';

import React from 'react';
import * as Sentry from '@sentry/react';

import history from 'src/history';

class ErrorBoundary extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {errorInfo: null};
    }

    componentDidCatch(error) {
        const exception = error.originalError || error.error || error;

        if (
            exception.toString().includes('Loading chunk') ||
            exception.toString().includes('Loading CSS chunk') ||
            exception.toString().includes('ChunkLoadError')
        ) {
            if (window) {
                window.location.href = window.location.href;
            }
        }

        process.env.NODE_ENV === 'production' && Sentry.captureException(exception);

        this.setState({
            errorInfo: exception,
        });
    }

    handleBackOnClick = () => {
        this.setState(
            {
                errorInfo: null,
            },
            () => {
                history.goBack();
            }
        );
    };

    handleReloadOnClick = () => {
        this.setState(
            {
                errorInfo: null,
            },
            () => {
                if (window) {
                    window.location.reload();
                }
            }
        );
    };

    render() {
        const {errorInfo} = this.state;
        const {children} = this.props;

        if (errorInfo) {
            return (
                <div className='error-boundary-page'>
                    <ErrorIcon className='error-icon' />
                    <p className='error-title'>Something went wrong!</p>
                    <p className='error-subtitle'>Sorry, something went wrong there. Try again.</p>
                    <div className='button-wrapper'>
                        <button type='button' onClick={this.handleBackOnClick} className='button'>
                            Back
                        </button>
                        <button type='button' onClick={this.handleReloadOnClick} className='button reload'>
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }
        return children;
    }
}

export default ErrorBoundary;
