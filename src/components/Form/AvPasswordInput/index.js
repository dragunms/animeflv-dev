import React from 'react';

import AvTextInput from '../AvTextInput';

const AvPasswordInput = (props) => {
    return <AvTextInput {...props} type='password' />;
};

AvPasswordInput.displayName = 'AvPasswordInput';

export default AvPasswordInput;
