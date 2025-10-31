import { Casa } from "./casa.js";
export class Personaje {
    #nombre;
    #age;
    #vivo;
    #casa;

    constructor(nombre = "", age = 0, vivo = true, casa = new Casa()) {
        this.#nombre = nombre;
        this.#age = age;
        this.#vivo = vivo;
        this.#casa = casa;
    }

    set nombre(valor) {
        this.#nombre = valor;
    }

    set age(valor) {
        this.#age = valor;
    }

    set vivo(valor) {
        this.#vivo = valor;
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
        console.log(`Hola, soy ${this.#nombre} de la casa ${this.#casa}`);
    }
}
