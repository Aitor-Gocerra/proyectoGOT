import { Personaje } from "../personaje.js";

export class Dragon extends Personaje{
    #vida;
    #fuego;
    
    constructor(nombre = "", age = 0, vivo = true, casa = "Targaryen", vida = 1000, fuego = 500){
        super(nombre, age, vivo, casa);
        this.#vida = vida;
        this.#fuego = fuego;
    }

    atacar(objetivo) {

        if (this.#fuego <= 0) {
            console.log(`${this.nombre} ya no tiene fuego para atacar.`);

        }else{
            const daño = Math.floor(Math.random() * 100) + 50;
            this.#fuego -= 50;
            console.log(`🔥 ${this.nombre} lanza fuego sobre ${objetivo} causando ${daño} puntos de daño.`);
        }
        if (this.#fuego <= 0) {
            console.log(`${this.nombre} ha agotado su fuego y necesita descansar.`);
        }
    }

    visualizarDatos() {
        console.log(`Información del dragón:
            Nombre: ${this.nombre}
            Edad: ${this.age} años
            Casa: ${this.casa}
            Estado: ${this.vivo ? "Vivo" : "Muerto"}
            Vida: ${this.#vida}
            Poder de fuego: ${this.#fuego}
        `);
    }

    descansar() {
        this.#vida = Math.min(this.#vida + 100, 1000);
        this.#fuego = Math.min(this.#fuego + 200, 500);
        console.log(`${this.nombre} descansa y recupera energía y fuego.`);
    }
}