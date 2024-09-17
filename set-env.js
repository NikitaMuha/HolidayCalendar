const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const path = './src/environment/environment.ts';
const envConfigFile = `

    export const environment = {
    apiUrl: 'https://date.nager.at/api'
    };
`;

fs.writeFile(path, envConfigFile, function (err) {
    console.log(`env created at ${path}`);
    if (err) {
        console.log(err)
    }
});