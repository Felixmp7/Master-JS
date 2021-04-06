// Types

// String
let str: string = 'Text';

// Number
let numb: number = 124;
//numb = 'String' // Error

// Boolean
let booleanType: boolean = true;

// Any
let anyType: any = true;
anyType = 'True';

// Arrays
let arrayType: Array<string> = ["HTML", "CSS", "JS"]; // Entre los <> indico el tipo de valores que tendrá el array
// Puedo definir un array de esta segunda forma también.
let arrayType2: number[] = [121, 32, 12];

// Puedo definir mas de un tipo de dato para una variable.
let multiple: string | number = 'String';
multiple = 12; // No da error

// Tambien podemos crear un tipo de dato personalizado con la palabra reservada "type"

type strNumb = string | number;

let multipleCustom: strNumb = 'String';
