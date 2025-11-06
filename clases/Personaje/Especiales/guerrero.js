import { Personaje } from "../personaje";
import { Arma } from "../../arma";

export class Guerrero extends Personaje{
    #arma;

    constructor(nombre = "", age = 0, vivo = true, casa = "", arma = null){
        super(nombre, age, vivo, casa);

        if(arma instanceof Arma) {
            this.#arma = arma;
        } 
        
    }

    set arma(weapon){
        if(weapon instanceof Arma){
            this.#arma = weapon;
            console.log(`${this.nombre} se ha equipado ${weapon.nombre}`);
        }else{
            console.log("ERROR FATAL");
        }
        
    }

    get arma(){
        return this.#arma;
    }

    atacar(){
        if(this.#arma){
            console.log(`${this.nombre} ataca con ${this.#arma.nombre} causando ${this.#arma.daño} de daño`);
        } else {
            console.log(`${this.nombre} no tiene arma equipada`);
        }
    }

    entrenar(){
        console.log(`${this.nombre} se entrena sin descanso para la proxima batalla.`);   
    }
}