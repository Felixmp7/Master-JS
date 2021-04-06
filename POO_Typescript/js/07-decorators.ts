// Decoradores
// Agregan nuevos metodos a clases que no los poseen.

interface Ropa {
    setColor(color: string): void;
    getColor(): string;
}

function estampar(logo:string){
    return (target: Function) => {
        target.prototype.estampado = ():void => console.log(`Camisa estampada con ${logo}`);
    }
}

@estampar('Gucci praga')
class Camisa2 implements Ropa {
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

// Clase Hija (Herencia)

class Sudadera2 extends Camisa2 {
    public isCapucha: boolean = true;

    public setIsCapucha = (isCapucha: boolean) => this.isCapucha = isCapucha;
    public getCapucha = (): boolean => this.isCapucha;
}

const sudadera_nike2 = new Camisa2({
    color: "Blue",
    modelo: 'Nike',
    talla: 'Xl',
    precio: 13
});

sudadera_nike2.estampar();