import { Personaje } from "../personaje.js";
import { Consejero } from "./consejero.js";
import { Dragon } from "./dragon.js";

export class Khaleesi extends Personaje{
    #consejero;
    #dragones;

    constructor(nombre = "", age = 0, vivo = true, casa = "", dragones = [], consejero = null){
        super(nombre, age, vivo, casa);

        if(dragones instanceof Dragon){
            dragones.forEach(dragon => {
                this.#dragones.push(dragon);
            });
        }
        if(consejero instanceof Consejero){
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