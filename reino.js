import { Personaje } from "./personaje";

export class Reino {
    #nombre;
    #rey;
    #casa;

    constructor(nombre = "", rey = {}, casa = []){
        this.#nombre = nombre;
        this.#rey = rey;
        this.#casa = casa;
    }

    set nombre(valor){
        this.#nombre = valor;
    }

    agregarRey(personaje){
        if(personaje instanceof Personaje){

        }
    }
}