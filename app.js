// let nombre = 'Vero';
// console.log(nombre);

// nombre = 'Juan';

// console.log(nombre);

const fs = require('fs');

let salida ='';
const base =3;
for(let i =1 ; i <= 10; i ++){
    //console.log( `${base} x ${i} = ${base * i}`);
    salida += `${base} x ${i} = ${base * i} \n`;
}

// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     if(err) throw err;

//     console.log(`tabla del ${base}` );
// });



fs.writeFileSync(`tabla-${base}.txt`, salida);

console.log(`tabla del ${base}` );

console.log(process.argv);

// module.exports = {
//     function: ddd
// }