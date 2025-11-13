export class Arma {
    #nombre;
    #daño;
    #tipo;
    #material;

    constructor(nombre = "", daño = 0, tipo = "", material = ""){
        this.#nombre = nombre;
        this.#daño = daño;
        this.#tipo = tipo;
        this.#material = material;
    }

    set nombre(valor){
        this.#nombre = valor;
    }

    set daño(valor){
        if(valor < 0){
            console.log("El daño no puede ser negativo");
        }else{
            this.#daño = valor;
        }   
        
    }

    set tipo(valor){
        this.#tipo = valor;
    }

    set material(valor){
        this.#material = valor;
    }

    get nombre(){
        return this.#nombre;
    }

    get daño(){
        return this.#daño;
    }

    get tipo(){
        return this.#tipo;
    }

    get material(){
        return this.#material;
    }
    
}