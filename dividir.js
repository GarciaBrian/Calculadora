/* La función dividir, divide los parametros num1, num2 y retorna el resultado. En caso de que uno de los
parametros sea 0, retorna un "No se puede dividir por cero". */
let dividir = function(numerador, divisor){
    if((numerador === 0)||(divisor === 0)){
       return console.log("No se puede dividir por cero");  
    }else{
       return console.log(numerador / divisor);
    };
};


module.exports = dividir;