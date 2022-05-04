import {getTemperature} from './weather.js';
async function main() {
    const temp = await getTemperature(64134);
    
    console.log(temp);
}

main();