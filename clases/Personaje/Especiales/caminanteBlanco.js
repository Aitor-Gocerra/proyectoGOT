import { Personaje } from "../personaje.js";
import { Arma } from "../../arma.js";

export class Caminante_Blanco extends Personaje {
    #vida = 100;
    #poderHelado;

    constructor(nombre = "", poderHelado = 0, vivo = true){
        super(nombre, vivo);
        this.#poderHelado = poderHelado;
    }

    ataca(objetivo){
        const daño = Math.floor(this.#poderHelado * (0.7 + Math.random() * 0.6)); // Se multiplica el daño base del arma por un factor aleatorio entre 0.7 y 1.3
        console.log(`${this.nombre} ataca a ${objetivo.nombre} causando ${daño} puntos de vida.`);
        objetivo.recibirDaño(daño);
    }

    recibirDaño(puntos, arma) {

        if (arma === "fuego") {
            this.#vida = 0;
            this.morir();
            return;
        }

        if (arma instanceof Arma && arma.material === "acero valyrio") {
            this.#vida -= puntos;
            if (this.#vida <= 0) {
                this.#vida = 0;
                this.morir();
            }
        } else {
            console.log(`${this.nombre} no recibió daño.`);
        }
    }

    morir(){
        console.log(`${this.nombre} ha muerto.`);
    }

    get vida(){
        return this.#vida;
    }
}