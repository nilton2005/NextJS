const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

//const rl = readline.createInterface({ input, output });
const rl = readline.createInterface({input, output})

console.log("+++++++++++++++ Convierte de Dorales a Euros ++++++++++++++");
console.log(
  "Hola usario 🖖🖖, bienvendo al sistemade de conversion de Dolares a Euros"
)

rl.question("Ingrese en Dolares $ ", (dolares) =>{
  const fijoEuro = 0.85;
  var multiplo = Math.pow(10, 2)
  const inEuros = fijoEuro * dolares;
  const inEuros_final = Math.round(inEuros * multiplo) / multiplo;
  console.log(`Ingresaste en dolares: ${dolares}
               En euros es          : ${inEuros_final}
    `);
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
  rl.close();
})



