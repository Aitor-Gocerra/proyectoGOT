
import { Rey } from "./Personaje/Especiales/rey.js";

export class Reino {
    #nombre;
    #rey;
    #casas;

    constructor(nombre = "", rey = null, casas = []){
        this.#nombre = nombre;
        if(rey instanceof Rey) {
            this.#rey = rey;
        }   
        this.#casas = casas;
    }

    set nombre(valor){
        this.#nombre = valor;
    }

    set rey(rey){
        if(rey instanceof Rey){
            this.#rey = rey;
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