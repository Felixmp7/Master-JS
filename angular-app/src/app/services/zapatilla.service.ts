import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Nike Air', 'Nike', 'Black', 100, true),
            new Zapatilla('Nike Pegasus', 'Nike', 'White', 120, true),
            new Zapatilla('Nike Mercurial', 'Nike', 'Blue', 80, false),
            new Zapatilla('Nike Hypervenom', 'Nike', 'Orange', 40, true),
        ]
    };

    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }
}