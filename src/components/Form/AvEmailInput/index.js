import React from 'react';

import AvTextInput from '../AvTextInput';

const AvEmailInput = (props) => {
    return <AvTextInput {...props} type='email' />;
};

AvEmailInput.displayName = 'AvEmailInput';

export default AvEmailInput;
