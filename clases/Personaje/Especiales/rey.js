import { Personaje } from "../personaje";

export class Rey extends Personaje{

    #añosReinado;

    constructor(nombre = "", age = 0, vivo = true, casa = "", añosReinado = 0){
        super(nombre, age, vivo, casa);
        
        this.#añosReinado = añosReinado;
    }

    set añosReinado(valor){
        if(valor > 0){
            this.#añosReinado = valor;
        }else{
            console.log("Debes de añadir un numero positivo");
        }
    }

    get añosReinado(){ // Añadir getter
        return this.#añosReinado;
    }

    atacar(){
        console.log(`${this.nombre} lidera la batalla y anima a sus guerreros.`);
    }

    gobernar(){
        console.log(`${this.nombre} gobierna con sabiduria desde hace ${this.añosReinado}`);
    }
}