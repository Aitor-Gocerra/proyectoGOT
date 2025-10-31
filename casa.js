import { Personaje } from "./personaje.js";

export class Casa {
    #nombre;
    #lema;
    #miembros;

    constructor (nombre = "", lema = "", miembros = []){
        this.#nombre = nombre;
        this.#lema = lema;
        this.#miembros = miembros;
    }

    set nombre(valor){
        this.#nombre = valor;
    }

    set lema(valor){
        this.#lema = valor;
    }

    get nombre(){
        return this.#nombre;
    }

    get lema(){
        return this.#lema;
    }
    get arrayMiembros(){
        return this.#miembros;
    }

    agregarMiembro(personaje){
        if(personaje instanceof Personaje){
            const existePersonaje = this.#miembros.some(miembro => miembro.nombre === personaje.nombre);
            if (!existePersonaje){
                this.#miembros.push(personaje);
                console.log("Miembro registrado");
            } else {
                console.log("El miembro ya existe en el array"); 
            }
        };
    }

    visualizarMiembros(){
        console.log("Casa: " + this.#nombre + ", Lema: " + this.#lema);
        this.#miembros.forEach(elemento => {
            console.log(elemento);
        });
    }

}