import { Personaje } from "../personaje.js";
import { Rey } from "./rey.js";

export class Consejero extends Personaje{
    #especialidad;

    constructor(nombre = "", age = 0, vivo = true, casa = "", especialidad = ""){
        super(nombre, age, vivo, casa);

        this.#especialidad = especialidad;
    }

    atacar(){
        console.log(`${this.nombre} no lucha con armas, si no con palabras e inteligencia`);
    }

    aconsejar(rey){
        if(rey instanceof Rey){
            console.log(`${this.nombre} aconseja a ${rey.nombre} sobre diplomacia y consejos de guerra`);
        } 
    }

}