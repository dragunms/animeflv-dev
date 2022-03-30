import {PUSH_METADATA} from 'src/constants/actionTypes';

const INIT_STATE = {
    metadata_disable: undefined,
    metadata_title: '',
    metadata_description: '',
    metadata_title_og: '',
    metadata_description_og: '',
    metadata_keywords: '',
    metadata_image_url: '',
    metadata_url: '',
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case PUSH_METADATA:
            return {
                ...state,
                ...action.payload.data,
            };
        default:
            return state;
    }
};
