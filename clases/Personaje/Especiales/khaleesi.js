import { Personaje } from "../personaje.js";
import { Consejero } from "./consejero.js";
import { Dragon } from "./dragon.js";

export class Khaleesi extends Personaje{
    #consejero;
    #dragones;

    constructor(nombre = "", age = 0, vivo = true, casa = "", dragones = [], consejero = null){
        super(nombre, age, vivo, casa);
        this.#dragones = [];

        if (Array.isArray(dragones)) {
            dragones.forEach(dragon => {
                if (dragon instanceof Dragon) this.#dragones.push(dragon);
            });
        }

        if (consejero instanceof Consejero) {
            this.#consejero = consejero;
        }
    }

    get dragones(){
        return this.#dragones;
    }

    get consejero(){
        return this.#consejero;
    }

}