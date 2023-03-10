// function findFirstNonRepeatingChar(str) {
//     const charCount = {};

//     // Count the number of times each character appears in the string
// for (let i = 0; i < str.length; i++) {
//     const char = str.charAt(i);
//     charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
// }

//     // Find the first non-repeating character
//     for (let i = 0; i < str.length; i++) {
//         const char = str.charAt(i);
//         if (charCount[char] === 1) {
//             return char;
//         }
//     }

//     // If no non-repeating character is found, return null
//     return null;
// }

function calcularMCD(a, b) {
    if (b == 0) {
        return a;
    }
    return calcularMCD(b, a % b);
}

console.log(calcularMCD(84, 36));


function HackerSpeak(str) {
    let hackerStr = '';
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        switch (char) {
            case 'a':
                hackerStr += '@';
                break;
                case 'e':
                    hackerStr += '3';
                    break;
                    case 'i':
                        hackerStr += '1';
                        break;
                        case 'o':
                            hackerStr += '0';
                            break;
                            case 's':
                                hackerStr += '$';
                                break;
                                default:
                                    hackerStr += char;
                                }
                            }
                            return hackerStr;
}

console.log(HackerSpeak("Hoy es jueves"));

function Factores(valor) {
    let factores = [];
    for (let i = 1; i <= valor; i++) {
        if (valor % i === 0) {
            factores.push(i);
        }
    }
    return factores;
}

console.log(Factores(12));

function Duplicados(arr) {
    let NoDuplicados = [];
    for (let i = 0; i < arr.length; i++) {
        if (NoDuplicados.indexOf(arr[i]) === -1) {
            NoDuplicados.push(arr[i]);
        }
    }
    return NoDuplicados;
}

let arr = [1, 2, 3, 2, 4, 3, 5, 1];
let NoDuplicados = Duplicados(arr);

console.log(NoDuplicados);

function longitud(lista) {
    let longitud1 = Infinity;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].length < longitud1) {
            longitud1 = lista[i].length;
        }
    }
    return longitud1;
}

let lista = ['Hola', 'Adios', '50', 'Natalia', 'soy', 'jupiter', 'saturno'];
let longitud1 = longitud(lista);

console.log(longitud1);

function Palindromo(cadena) {
    // Elimina espacios y los convierte a minúsculas
    cadena = cadena.toLowerCase().replace(/\s/g, ''); 
    //.toLowerCase: converts a string to lowercase letters
    //.Replace: searches for a specified pattern in a string, and replaces the matched pattern with a specified replacement string.
    // Crear una cadena al revés
    let cadenaAlReves = cadena.split('').reverse().join('');
    // Compara ambas cadenas
    return cadena === cadenaAlReves;
}

let cadena1 = 'Anita lava la tina';
let cadena2 = 'Un perro blanco';

console.log(Palindromo(cadena1)); // true
console.log(Palindromo(cadena2)); // false


