var getNumber = function (number) {
    if (number === void 0) { number = 0; }
    return "El n\u00FAmero es " + number;
};
// En las funciones puedo:
// 1. Determinar el tipo de dato del parámetro recibido
// 2. Determinar el tipo de dato de lo que retorna la función
console.log(getNumber(2));
