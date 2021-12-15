const contract = require('./contractData.json');
const excelData = require('./excelData.json');
const excelStudentData = require('./excelStudentData.json');

export const Contract_Address = contract['networks']['5777']['address'];
export const Contract_Abi = contract['abi'];
export const Student_Length = excelData['length'];
export const Student_Data_Array = excelStudentData['data'];