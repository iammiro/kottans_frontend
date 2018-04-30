import {appSettings, units} from './settings.js';

const darkSky = (latitude, longitude) => {
    let url = `${appSettings.proxy}${appSettings.apiUrl}${appSettings.apiKey}/${latitude},${longitude}?units=${units.get('units')}`;
    fetch(url, appSettings.init)
        .then(response => response.json())
        .then(myBlob => myBlob.daily.data)
        .then(res => console.log(res))
        .catch(error => console.log(error));
};

export default darkSky;
