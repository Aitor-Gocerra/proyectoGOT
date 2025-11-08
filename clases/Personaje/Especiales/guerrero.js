import { Personaje } from "../personaje.js";
import { Arma } from "../../arma.js";

export class Guerrero extends Personaje{
    #arma;
    #vida = 100;
    #experiencia = 0;
    #nivel = 0;

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
    get vida(){
        return this.#vida;
    }

    get nivel(){
        return this.#nivel;
    }

    get experiencia(){
        return this.#experiencia;
    }

    entrenar(){
        console.log(`${this.nombre} se entrena sin descanso para la proxima batalla.`);   
    }

    morir(){
        console.log(`${this.nombre} ha muerto.`);
        
    }
    recibirDaño(puntos){
        this.#vida -= puntos;
        if(this.#vida <= 0){
            this.#vida = 0;
            this.morir();
        }
    }

    ataca(objetivo){
        const daño = Math.floor(this.#arma.daño * (0.7 + Math.random() * 0.6));
        console.log(`${this.nombre} ataca a ${objetivo.nombre} causando ${daño} puntos de vida.`);
        objetivo.recibirDaño(daño);
    }

    experiencia(){
        const experiencia = Math.floor(Math.random() * 101);
        const nivelAnterior = this.#nivel;  
        this.#experiencia += experiencia;
        this.#nivel = Math.floor(this.#experiencia / 100);
        
        if(this.#nivel > nivelAnterior){
            console.log(`${this.nombre} ha subido de nivel`);
        }
    }
}