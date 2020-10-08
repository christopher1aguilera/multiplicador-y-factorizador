let resultado = 1;
function app() {
    let num = parseInt(prompt("ingrese numero", 0));
        if ((1 > num ) || (num > 20) || isNaN(num)) {
            console.log("numero no valido")
            return 0
        }
        else
        //factorizar
        for (let i = 1; i <= num; i++) {
//            resultado = resultado * i;
            console.log(`Factorial de ${i} = ${resultado = resultado * i}`);
        }
        //multiplicar
        for (let i = 1; i <= num; i++) {
//            resultado = num * i;
//            resultado *= i;
            console.log(`${i} x ${num} = ${i * num}`);        
        }
return resultado
}
app()