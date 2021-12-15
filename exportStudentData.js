const xlsxFile = require('read-excel-file/node');
const fs = require('fs');
// let data = [];
xlsxFile('./uploads/data.xlsx', { sheet: 'Sheet 2' }).then((rows) => {
    let arrayOfData = rows.slice(1);
    let dataToWrite = {
        "data": arrayOfData
    }

    fs.writeFile('./src/excelStudentData.json', JSON.stringify(dataToWrite), (err) => {
        if (err) throw err;
        console.log('student excel data stored to SRC');
    });
});