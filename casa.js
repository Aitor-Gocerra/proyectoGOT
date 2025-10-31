import { Personaje } from "./personaje.js";

export class Casa {
    #nombre;
    #lema;
    #miembros;
    static casasValidas = [
        "Casa Stark",
        "Casa Lannister",
        "Casa Targaryen",
        "Casa Baratheon",
        "Casa Greyjoy",
        "Casa Tyrell",
        "Casa Martell",
        "Casa Tully",
        "Casa Arryn",
        "Casa Frey",
        "Casa Bolton",
        "Casa Mormont",
        "Casa Tarly",
        "Casa Clegane",
        "Casa Karstark",
        "Casa Reed",
        "Casa Seaworth",
        "Casa Florent",
        "Casa Hightower",
        "Casa Dayne"
        ];


    constructor (nombre = "", lema = "", miembros = []){
        if(!Casa.validaNombreCasa(nombre)){
            console.log(`${nombre} no es una casa validad en GOT`);
        }else{
            this.#nombre = nombre;
        }
        this.#lema = lema;
        this.#miembros = miembros;
    }

    static validaNombreCasa(nombreCasa){
        return Casa.casasValidas.includes(nombreCasa);
    }

    set nombre(valor){
        if(Casa.validaNombreCasa(valor)){
            this.#nombre = valor;
        }else{
            console.log("Nombre de casa no valido");
        }
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
            
            if (!Casa.validaNombreCasa(personaje.casa)){
                console.log("No es una casa valida");
            }else if(existePersonaje){
                console.log("El personaje ya esta registrado");
            }else if(personaje.casa != this.#nombre){
                console.log("La casa del personaje no coincide con las casas registradas");
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