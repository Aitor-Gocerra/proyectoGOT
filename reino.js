import { Personaje } from "./personaje.js";

export class Reino {
    #nombre;
    #rey;
    #reinos = [
        "El Reino del Norte",
        "El Valle de Arryn",
        "Las Tierras del Oeste",
        "El Dominio",
        "Las Tierras de los Ríos",
        "Dorne",
        "Las Islas del Hierro",
        "Las Tierras de la Tormenta",
        "Las Tierras de la Corona"
        ];

    constructor(nombre = "", personaje){
        if(!this.validarNombreReino(nombre)){
            console.log("Reino no valido");
        } else {
            this.#nombre = nombre;
        } 
        if(personaje instanceof Personaje) {
            this.#rey = personaje;
        }
        
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
            this.#rey = personaje;
        }
    }

    get nombre(){
        return this.#nombre;
    }

    get rey(){
        return this.#rey;
    }

    visualizarRey(){
        console.log("Reino de " + this.#nombre);
        console.log("Regente: ", this.#rey);     
    }
}