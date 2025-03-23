const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

//const rl = readline.createInterface({ input, output });
const rl = readline.createInterface({input, output})
//console.log(rl);
console.log("+++++++++++++++ Convierte de Dorales a Euros ++++++++++++++");
console.log(
  "Hola usario 🖖🖖, bienvendo al sistemade de conversion de Dolares a Euros"
)


// rl.question("Ingrese en Dolares $ ", (dolares) =>{
//   const fijoEuro = 0.92;
//   var multiplo = Math.pow(10, 2)
//   const inEuros = fijoEuro * dolares;
//   const inEuros_final = Math.round(inEuros * multiplo) / multiplo;
//   console.log(`Ingresaste en dolares: ${dolares}
//                En euros es          : ${inEuros_final}
//     `);
//   console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
//   rl.close();
// })
rl.setPrompt("Ingrese en $");
rl.prompt();
rl.on('line', (dolares)=>{ 

  if(dolares === "salir"){
    console.log("vuelva pronto");
    rl.close();
    return
  }
  const fijoEuro = 0.92;
  var multiplo = Math.pow(10, 2)
  const inEuros = fijoEuro * dolares;
  const inEuros_final = Math.round(inEuros * multiplo) / multiplo;
  console.log(`Ingresaste en dolares: ${dolares}
               En euros es          : ${inEuros_final}
    `);
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
  rl.prompt()

})
  rl.on('close', ()=>{
    console.log("Programa terminado");
    process.exit(0);
  })




