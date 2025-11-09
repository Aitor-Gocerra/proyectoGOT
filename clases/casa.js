import { Personaje } from "./Personaje/personaje.js";
import { Guerrero } from "./Personaje/Especiales/guerrero.js";

export class Casa {
    #nombre;
    #lema;
    #miembros;
    #alianzas;
    #oro;
    #provisiones;

    constructor (nombre = "", lema = "", oro = 0, provisiones = 0){  
        this.#nombre = nombre;
        this.#lema = lema;
        this.#miembros = [];
        this.#alianzas = [];
        this.#oro = oro;
        this.#provisiones = provisiones
    }

    set nombre(valor){
        this.#nombre = valor;
    }

    set lema(valor){
        this.#lema = valor;
    }

    set provisiones(valor){
        this.#provisiones = valor;
    }

    set oro(valor){
        this.#oro = valor;
    }

    get nombre(){
        return this.#nombre;
    }

    get lema(){
        return this.#lema;
    }
    get miembros(){
        return this.#miembros;
    }
    
    get alianzas(){
        return this.#alianzas;
    }

    get provisiones(){
        return this.#provisiones;
    }

    get oro(){
        return this.#oro;
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

    formarAlianza(otraCasa){

        if(otraCasa instanceof Casa){
            if(this.#nombre === otraCasa.nombre){
                console.log(`La casa ${this.#nombre} no puede formar una alianza consigo misma`);
            }
            if(this.esAliada(otraCasa)){
                console.log(`La casa ${this.#nombre} ya es aliada`);
            }
            this.#alianzas.push(otraCasa);
            otraCasa.#alianzas.push(this);
        }
    }

    romperAlianza(otraCasa){
        if(!this.esAliada(otraCasa)){
            console.log(`No existe alianza entre casas`);
        }

        this.#alianzas = this.#alianzas.filter(casa => casa != otraCasa);
        otraCasa.#alianzas = otraCasa.#alianzas.filter(casa => casa != this);
    }

    esAliada(otraCasa) {
        return this.#alianzas.includes(otraCasa);
    }

    mostrarAlianzas(){
        console.log(`Alianzas de la Casa ${this.nombre}`);

        this.alianzas.forEach(casa => {
            console.log(` - Casa ${casa.nombre}: "${casa.lema}"`);            
        })
        
    }

    guerrerosDisponibles(){
        let guerreros = this.#miembros.filter(miembro => miembro instanceof Guerrero && miembro.vivo);
        while(guerreros.length * 100 > this.#oro){
            guerreros.pop();
        }

        this.#alianzas.forEach(casaAliada =>{
            const guerrerosAliados = casaAliada.#miembros.filter(miembro => miembro instanceof Guerrero && miembro.vivo);
            while(guerrerosAliados.length * 100 > this.#oro){
                guerrerosAliados.pop();
            }
            guerreros = guerreros.concat(guerrerosAliados);
        })

        return guerreros;
    }
}