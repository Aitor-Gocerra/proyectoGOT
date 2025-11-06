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
            
            if(existePersonaje){
                console.log("El personaje ya esta registrado");
            }else if(personaje.casa != this.#nombre){
                console.log("La casa del personaje no coincide con las casa registrada");
            } else {
                this.#miembros.push(personaje);
                console.log("Personaje registrado");
            }
            
        };
    }

    visualizarMiembros(){
        console.log("Casa: " + this.#nombre + ", Lema: " + this.#lema);
        if(this.#miembros.length === 0){
            console.log("Casa sin miembros");  
        } else {
            const arrayMiembros = Array.from(this.#miembros);
            arrayMiembros.forEach(elemento => {
                console.log(`${elemento.nombre} (${elemento.age} años, ${elemento.vivo ? 'Vivo' : 'Muerto'}) - ${elemento.casa}`);
            });
        }
        
    }
}