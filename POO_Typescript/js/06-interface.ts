// Interfaces
// Son contratos o bases que especifican los metodos que debe tener una clase

interface Ropa {
    setColor(color:string):void;
    getColor():string;
}

class Camisa implements Ropa {
    private color: string = 'Azul';
    private modelo: string = 'Nike';
    private talla: string = 'M';
    private precio: number = 12;

    constructor({ color, modelo, talla, precio }) {
        this.color = color;
        this.modelo = modelo;
        this.talla = talla;
        this.precio = precio;
    };

    public setColor = (color: string) => this.color = color; // Si este metodo no existe dará error.
    public getColor = (): string => this.color;
}

const nike = new Camisa({
    color: "Blue",
    modelo: 'Nike',
    talla: 'Xl',
    precio: 13
});

// Clase Hija (Herencia)

class Sudadera extends Camisa {
    public isCapucha: boolean = true;

    public setIsCapucha = (isCapucha: boolean) => this.isCapucha = isCapucha;
    public getCapucha = (): boolean => this.isCapucha;
}

const sudadera_nike = new Sudadera({
    color: "Blue",
    modelo: 'Nike',
    talla: 'Xl',
    precio: 13
});

console.log(sudadera_nike);
sudadera_nike.setIsCapucha(false);
console.log(sudadera_nike);