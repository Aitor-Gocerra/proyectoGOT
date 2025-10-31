export class Arma {
    #nombre;
    #daño;
    #tipo;

    constructor(nombre = "", daño = 0, tipo = ""){
        this.#nombre = nombre;
        this.#daño = daño;
        this.#tipo = tipo;
    }

    set nombre(valor){
        this.#nombre = valor;
    }

    set daño(valor){
        this.#daño = valor;
    }

    set tipo(valor){
        this.#tipo = valor;
    }

    get nombre(){
        return this.#nombre;
    }

    
}