var operation = prompt('Ingrese un tipo de operación: +, -, *, /');
var num1 = prompt('Ingrese su primer número');
var num2 = prompt('Ingrese su segundo número');


do {
    if(operation === '+'){
            var suma = parseInt(num1) + parseInt(num2);
            alert('El resultado es; ' + suma);
        } else if (operation === '-'){
            var resta = parseInt(num1) - parseInt(num2);
            alert('El resultado es ' + resta);
        } else if (operation === '*'){
            var multi = parseInt(num1) * parseInt(num2);
            alert('El resultado es: ' + multi);
        } else if (operation === '/') {
            var div = parseInt(num1) / parseInt(num2);
            alert('El resultado es: ' + div);
        } else {
            alert('Error');
        }
    if (operation === '+' || '-' || '/' || '*') {
        break;
    }
} while (operation === '+' || '-' || '/' || '*');