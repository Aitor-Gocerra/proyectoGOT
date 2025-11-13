import { Personaje } from "../personaje";
export class Dragon extends Personaje {
    #fuerza;

    constructor(nombre, fuerza = 100) {
        super(nombre, 0, true, "Casa Targaryen");
        this.#fuerza = fuerza;
    }

    atacar(objetivo) {
        if (objetivo instanceof Caminante_Blanco) {
            console.log(`${this.nombre} lanza fuego sobre ${objetivo.nombre}, que muere al instante.`);
            objetivo.morir();
        } else {
            console.log(`${this.nombre} ataca a ${objetivo.nombre} causando ${this.#fuerza} puntos de daño.`);
            if (typeof objetivo.recibirDaño === "function") {
                objetivo.recibirDaño(this.#fuerza, { tipo: "fuego" });
            }
        }
    }

    get fuerza() {
        return this.#fuerza;
    }
}

