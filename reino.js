import { Personaje } from "./personaje.js";
import { Casa } from "./casa.js";

export class Reino {
    #nombre;
    #rey;
    #casas;
    #reinos = [
        "El Reino del Norte",
        "El Valle de Arryn",
        "Las Tierras del Oeste",
        "El Dominio",
        "Las Tierras de los Ríos",
        "Dorne",
        "Las Islas del Hierro",
        "Las Tierras de la Tormenta",
        "Las Tierras de la Corona",
        "El reino de Poniente"
        ];

    constructor(nombre = "", personaje = {}, casas = []){
        if(nombre && !this.validarNombreReino(nombre)){ //Cuando el nombre no este vacio Y El nombre sea incorrecto entra en el if
            console.log("Reino no valido");
        } else {
            this.#nombre = nombre;
        } 
        if(personaje instanceof Personaje) {
            this.#rey = personaje.nombre;
        }   
        this.#casas = casas;
    }
    validarNombreReino(nombreReino){
        return this.#reinos.includes(nombreReino);
    }

    set nombre(valor){
        if(this.validarNombreReino(valor)){
            this.#nombre = valor;
        }else{
            console.log("Nombre de reino no valido");
        }
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

    agregarCasa(casa){
        const existeCasa = this.#casas.some(familia => familia.nombre === casa)

        if(!Casa.validaNombreCasa(casa)){
            console.log(`La casa ${casa} no existe en el universo GOT`);
        }else if(existeCasa){
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