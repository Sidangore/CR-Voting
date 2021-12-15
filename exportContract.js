//copyfile.js
const fs = require('fs');
// import { copyFile } from 'fs';

// destination will be created or overwritten by default.
fs.copyFile('./build/contracts/CRVoting.json', './src/contractData.json', (err) => {
    if (err) throw err;
    console.log('contract data transfered to SRC');
});