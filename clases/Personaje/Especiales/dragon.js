import { Personaje } from "../personaje.js";
export class Dragon extends Personaje {
    #poder;
    #arma;

    constructor(nombre, poder = 100, arma = "fuego") {
        super(nombre, 0, true, "Casa Targaryen");
        this.#poder = poder;
        this.#arma = "fuego";
    }

    atacar(objetivo) {
        if (objetivo instanceof Caminante_Blanco) {
            console.log(`${this.nombre} lanza fuego sobre ${objetivo.nombre}, que muere al instante.`);
            objetivo.morir();
        } else {
            console.log(`${this.nombre} ataca a ${objetivo.nombre} causando ${this.#poder} puntos de daño.`);
            objetivo.recibirDaño(this.#poder, this.#arma);
        }
    }

    get poder() {
        return this.#poder;
    }

    get arma(){
        return this.#arma;
    }
}

