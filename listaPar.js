let numeroAlunos = 5
let listaAlunos = ["Carlos","Luiz","Analice","Juliana","Ana"]


for (let contador = 0; contador < listaAlunos.length; contador++) {
   //onsole.log(contador)
   
   if (contador == 0 ){
      console.log(`${contador} Zero: ${listaAlunos[contador]}`);
   } else if (contador % 2 == 1) {
      console.log(`${contador} Impar: ${listaAlunos[contador]}`)
   } else{
console.log(`${contador} Par: ${listaAlunos[contador]}`)
   }

}
