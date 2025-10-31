import { Casa } from "./casa.js";
export class Personaje {
    #nombre;
    #age;
    #vivo;
    #casa;

    constructor(nombre = "", age = 0, vivo = true, casa = "") {
        this.#nombre = nombre;
        this.#age = age;
        this.#vivo = vivo;

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
        console.log(`Hola, soy ${this.#nombre} de la casa ${this.#casa}`);
    }
}
