import {IN_PROCESS, PROCESS_COMPLETE} from 'src/constants/actionTypes';

const INIT_STATE = {
    loading: false,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case IN_PROCESS:
            return {
                ...state,
                loading: true,
            };
        case PROCESS_COMPLETE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
