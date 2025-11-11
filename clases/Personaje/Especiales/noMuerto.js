import { Personaje } from "../personaje.js";
import { Arma } from "../../arma.js";

export class NoMuerto extends Personaje {
    #arma;

    constructor(nombre = "", age = 0, casa = "Caminantes Blancos", arma = null){
        super(nombre, age, false, casa);
        this.casa = "Caminantes Blancos";
        if(arma instanceof Arma) {
            this.#arma = arma;
        }
        
    }

    get arma() {
        return this.#arma;
    }

    set arma(nuevaArma) {
        if (nuevaArma instanceof Arma) {
            this.#arma = nuevaArma;
        } else {
            console.log("El objeto asignado no es un arma válida.");
        }
    }

    saludo() {
        console.log(`${this.nombre} de los Caminantes Blancos... El invierno ha llegado`);
    }

}