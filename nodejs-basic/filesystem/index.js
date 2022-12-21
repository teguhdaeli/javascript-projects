const fs = require('fs');
const data = fs.readFileSync('notes.txt', 'UTF-8');
console.log("Cara Pertama 1: ")
console.log(data)
console.log("-------------------")

const fs = require('fs');
const CekError = (error,data) => {
    if(error){
        console.log('Gagal Membaca Berkas');
        return;
    }
    console.log("Cara Kedua 2:");
    console.log(data);
};
fs.readFile('nsotes.txt','UTF-8',CekError);



