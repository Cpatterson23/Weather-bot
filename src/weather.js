import * as OpenWeather from '@cicciosgamino/openweather-apis';

const apiKey = "";
const client = await new OpenWeather.AsyncWeather();
client.setApiKey(apiKey);
client.setUnits('imperial');

export async function getTemperature(zipcode) {

    client.setZipCodeAndCountryCode(zipcode, 'US');
    return client.getTemperature();
}