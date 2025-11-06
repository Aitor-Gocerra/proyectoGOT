import { Personaje } from "./personaje.js";

export class Reino {
    #nombre;
    #rey;
    #casas;

    constructor(nombre = "", personaje = {}, casas = []){
        this.#nombre = nombre;
        if(personaje instanceof Personaje) {
            this.#rey = personaje.nombre;
        }   
        this.#casas = casas;
    }

    set nombre(valor){
        this.#nombre = valor;
    }

    set rey(personaje){
        if(personaje instanceof Personaje){
            this.#rey = personaje.nombre;
        }
    }

    get nombre(){
        return this.#nombre;
    }

    get rey(){
        return this.#rey;
    }

    get casas(){
        return this.#casas;
    }

    agregarCasa(casa){
        const existeCasa = this.#casas.some(apellido => apellido.nombre === casa)

        if(existeCasa){
            console.log("La casa ya esta añadida");
        }else{
            this.#casas.push(casa);
            console.log(`La ${casa} ha sido añadida a ${this.#nombre}`);
        }
    }
    visualizarRey(){
        console.log(`${this.#rey} ha sido proclamado rey de ${this.#nombre}`);    
    }

    visualizarCasas(){
        console.table(this.#casas);
    }
}