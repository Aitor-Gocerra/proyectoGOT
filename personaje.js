import { Casa } from "./casa.js";
import { Arma } from "./arma.js";

export class Personaje {
    #nombre;
    #age;
    #vivo;
    #casa;
    #arma;

    constructor(nombre = "", age = 0, vivo = true, casa = "", arma="") {
        this.#nombre = nombre;
        this.#age = age;
        this.#vivo = vivo;
        this.#arma = arma;

        if (!Casa.validaNombreCasa(casa)){
            console.log(`${casa} no es una casa valida en juego de tronos`);
        }else{
            this.#casa = casa;
        }
    }

    set nombre(valor) {
        this.#nombre = valor;
    }

    set age(valor) {
        if(valor > 0){
            this.#age = valor;
        } else {
            console.log("La edad no puede ser un valor negativo");
        }
    }

    set vivo(valor) {
        this.#vivo = Boolean(valor);
    }

    set casa(valor){
        if(Casa.validaNombreCasa(valor)){
            this.#casa = valor;
        } else {
            console.log("La casa no es valida");
        }
    }

    set arma(weapon){
        if(weapon instanceof Arma){
            this.#arma = weapon;
            console.log(`${this.#nombre} se ha equipado ${weapon.nombre}`);
        }else{
            console.log("ERROR FATAL");
        }
        
        
    }

    get nombre(){
        return this.#nombre;
    }
    get age(){
        return this.#age;
    }

    get vivo(){
        return this.#vivo;
    }
    get casa(){
        return this.#casa;
    }

    saludo() {
        console.log(`Soy ${this.#nombre} de la casa ${this.#casa}`);
    }
}
