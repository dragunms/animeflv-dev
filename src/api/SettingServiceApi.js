import {GET_SETTING_ENDPOINT} from 'src/constants/apiEndpoints';

import {getData} from 'src/utilities/requestApi';

const SettingServiceApi = {
    getSettingData: () => {
        return getData(GET_SETTING_ENDPOINT);
    },
};

export default SettingServiceApi;
