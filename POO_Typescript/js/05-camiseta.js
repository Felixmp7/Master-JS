var Camiseta = /** @class */ (function () {
    function Camiseta(_a) {
        var _this = this;
        var color = _a.color, modelo = _a.modelo, talla = _a.talla, precio = _a.precio;
        this.color = 'Azul';
        this.modelo = 'Nike';
        this.talla = 'M';
        this.precio = 12;
        this.setColor = function (color) { return _this.color = color; };
        this.getColor = function () { return _this.color; };
        this.color = color;
        this.modelo = modelo;
        this.talla = talla;
        this.precio = precio;
    }
    ;
    return Camiseta;
}());
var adidas = new Camiseta({
    color: "Blue",
    modelo: 'Nike',
    talla: 'Xl',
    precio: 13
});
console.log(adidas);
