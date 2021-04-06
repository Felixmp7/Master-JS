// Decoradores
// Agregan nuevos metodos a clases que no los poseen.
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function estampar(logo) {
    return function (target) {
        target.prototype.estampado = function () { return console.log("Camisa estampada con " + logo); };
    };
}
var Camisa2 = /** @class */ (function () {
    function Camisa2(_a) {
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
    Camisa2 = __decorate([
        estampar('Gucci praga')
    ], Camisa2);
    return Camisa2;
}());
// Clase Hija (Herencia)
var Sudadera2 = /** @class */ (function (_super) {
    __extends(Sudadera2, _super);
    function Sudadera2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isCapucha = true;
        _this.setIsCapucha = function (isCapucha) { return _this.isCapucha = isCapucha; };
        _this.getCapucha = function () { return _this.isCapucha; };
        return _this;
    }
    return Sudadera2;
}(Camisa2));
var sudadera_nike2 = new Camisa2({
    color: "Blue",
    modelo: 'Nike',
    talla: 'Xl',
    precio: 13
});
sudadera_nike2.estampar();
