import { Personaje } from "../personaje.js";
import { Caminante_Blanco } from "./caminanteBlanco.js";
export class Dragon extends Personaje {
    #poder;
    #arma;
    #vida = 1000;

    constructor(nombre, poder = 100, arma = "fuego") {
        super(nombre, 0, true, "Casa Targaryen");
        this.#poder = poder;
        this.#arma = "fuego";
    }

    ataca(objetivo) {
        console.log(`${this.nombre} ataca a ${objetivo.nombre} causando ${this.#poder} puntos de daño.`);
        objetivo.recibirDaño(this.#poder, this.#arma);
    }

    recibirDaño(puntos){
        this.#vida -= puntos;
        if(this.#vida <= 0){
            this.#vida = 0;
            this.morir();
        }
    }

    morir(){
        console.log(`${this.nombre} ha muerto.`);
    }

    get poder() {
        return this.#poder;
    }

    get arma(){
        return this.#arma;
    }
}

