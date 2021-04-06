class Camiseta {
    private color:string = 'Azul';
    private modelo:string = 'Nike';
    private talla:string = 'M';
    private precio:number = 12;

    constructor({ color, modelo, talla, precio }) {
        this.color = color;
        this.modelo = modelo;
        this.talla = talla;
        this.precio = precio;
    };

    public setColor = (color:string) => this.color = color;
    public getColor = ():string => this.color;
}

const adidas = new Camiseta({
    color: "Blue",
    modelo: 'Nike',
    talla: 'Xl',
    precio: 13
});
console.log(adidas);