//Pedir 2 datos por pantalla y almacenarlo en dos variables 
//diferentes:
//Variable 1(8)  Variable 2 (20)
//Realizar todas las Operacion compracion vistas en la clase
//Mostra en la consola todos los posibles resultados
//y explicar con sus propias palabras porque se dio es resultado 'true , false'

let num1 = parseInt(prompt("Ingrese un numero entre 1 y 10"));
let num2 = parseInt(prompt("Ingrese un numero entre 11 y 20"));


//Mostramos los valores almacenados en  la variable 1(num1) y la variable 2 (num2)
console.log(`Variable numero 1 es ${num1}, variable numero 2 es ${num2}`);

//Operador Igual 
console.log(`Numero 1 == Numero 2: ${num1 == num2} \nDa true cuando los dos numero son iguales, de lo contrario da false`);

//Operador Diferente 
console.log(`Numero 1 != Numero 2: ${num1 != num2} \n Da true cuando los dos numero son diferentes, de lo contrario da false`);

//Operador Identico
console.log(`Numero 1 === Numero 2: ${num1 === num2} \nSolo da true cuando los dos numero son identicos tanto en el numero como en el tipo de dato es igual`);

//No Identicos
console.log(`Numero 1 !== Numero 2: ${num1 !== num2} \nDa true cuando los dos numeros no coincide el numero y el tipo de dato`);

//Operador Mayor que
console.log(`Numero 1 > Numero 2: ${num1 > num2} \nDa como resultado cuando el numero 1 es mayor al numero 2`);

//Operador Mayor o igual que
console.log(`Numero 1 >= Numero 2: ${num1 >= num2} \nDa como resultado true cuando el numero 1 es mayor o igual al numero 2`);

//Operador Menor que
console.log(`Numero 1 < Numero 2: ${num1 < num2} \nDa como resultado true cuando el numero 1 es Menor al numero 2`);

//Operador Menor o igual que
console.log(`Numero 1 <= Numero 2: ${num1 <= num2} \nNos dara true cuando el numero 1 sea Menor o igual al numero 2`);


//Extra: Por medio de una venta emergente(alert) Dar la maxima
//informacion del desarrallodar del aplicativo en cuestion
alert(`Desarrollado por:\nJulio Cesar Alarcon estudiante UNC`);