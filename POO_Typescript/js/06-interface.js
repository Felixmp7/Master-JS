// Interfaces
// Son contratos o bases que especifican los metodos que debe tener una clase
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Camisa = /** @class */ (function () {
    function Camisa(_a) {
        var _this = this;
        var color = _a.color, modelo = _a.modelo, talla = _a.talla, precio = _a.precio;
        this.color = 'Azul';
        this.modelo = 'Nike';
        this.talla = 'M';
        this.precio = 12;
        this.setColor = function (color) { return _this.color = color; }; // Si este metodo no existe dará error.
        this.getColor = function () { return _this.color; };
        this.color = color;
        this.modelo = modelo;
        this.talla = talla;
        this.precio = precio;
    }
    ;
    return Camisa;
}());
var nike = new Camisa({
    color: "Blue",
    modelo: 'Nike',
    talla: 'Xl',
    precio: 13
});
// Clase Hija (Herencia)
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isCapucha = true;
        _this.setIsCapucha = function (isCapucha) { return _this.isCapucha = isCapucha; };
        _this.getCapucha = function () { return _this.isCapucha; };
        return _this;
    }
    return Sudadera;
}(Camisa));
var sudadera_nike = new Sudadera({
    color: "Blue",
    modelo: 'Nike',
    talla: 'Xl',
    precio: 13
});
console.log(sudadera_nike);
sudadera_nike.setIsCapucha(false);
console.log(sudadera_nike);
