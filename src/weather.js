import * as OpenWeather from '@cicciosgamino/openweather-apis';

const apiKey = "3aad45db1823692854e69062c76be1ad";
const client = await new OpenWeather.AsyncWeather();
client.setApiKey(apiKey);
client.setUnits('imperial');

export async function getTemperature(zipcode) {

    client.setZipCodeAndCountryCode(zipcode, 'US');
    return client.getTemperature();
}