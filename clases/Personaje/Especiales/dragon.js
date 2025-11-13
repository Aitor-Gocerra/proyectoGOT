
export class Dragon {
    #nombre;
    #vida;
    #vivo;
    #poder;
    #tipoAtaque;

    constructor(nombre = "", vida = 1000, vivo = true, poder = 0, tipoAtaque = ""){

        this.#nombre = nombre;
        this.#vida = vida;
        this.#vivo = vivo;
        this.#poder = poder;
        this.#tipoAtaque = tipoAtaque;

    }

    set nombre(valor){
        this.#nombre = valor;
    }
    
    set vida(valor){
        this.#vida = valor;
    }

    set poder(valor){
        this.#poder = valor;
    }

    set tipoAtaque(valor){
        this.#tipoAtaque = valor;
    }

    get nombre(){
        return this.#nombre;
    }

    get vida(){
        return this.#vida;
    }

    get poder(){
        return this.#poder;
    }

    ataca(objetivo){
        const daño = Math.floor(this.#poder * (0.7 + Math.random() * 0.6)); // Se multiplica el daño base del arma por un factor aleatorio entre 0.7 y 1.3
        console.log(`${this.nombre} ataca a ${objetivo.nombre} causando ${daño} puntos de vida.`);
        objetivo.recibirDaño(daño);
    }

    recibirDaño(puntos){
        this.#vida -= puntos;
        if(this.#vida <= 0){
            this.#vida = 0;
            this.morir();
        }
    }

    morir(){
        console.log(`${this.#nombre} ha muerto.`);
    }
}