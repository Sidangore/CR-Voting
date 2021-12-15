const Web3 = require('web3');
const reader = require('xlsx');
const fs = require('fs');

const web3 = new Web3('HTTP://127.0.0.1:7545');
const file = reader.readFile('./uploads/data.xlsx');
// const newFile = reader.readFile('./uploads/')

let data = [];
const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);

web3.eth.getAccounts(function(err, accountList) {
    if (!err) {
        let i = 1;

        const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);
        temp.forEach((result) => {
            result['address'] = accountList[i];
            data.push(result);
            i++;
        });

        const ws = reader.utils.json_to_sheet(data);
        reader.utils.book_append_sheet(file, ws, 'Sheet 2');
        reader.writeFile(file, './uploads/data.xlsx');
    }
});
let dataToWrite = {
    "length": temp.length
}

// destination will be created or overwritten by default.
fs.writeFile('./src/excelData.json', JSON.stringify(dataToWrite), (err) => {
    if (err) throw err;
    console.log('Excel data stored to SRC');
});