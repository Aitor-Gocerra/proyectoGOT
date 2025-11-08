import { Casa } from "./casa.js";
import { Guerrero } from "./Personaje/Especiales/guerrero.js";

export class Batalla {
    #guerrerosMuertos = [];

    iniciarBatalla (casaA, casaB){

        if(casaA.esAliada(casaB)){
            console.log("Ambas casas son aliadas, no pueden luchar entre ellas");
        }else{

            if(casaA instanceof Casa && casaB instanceof Casa){
                let guerrerosCasaA = casaA.guerrerosDisponibles();
                let guerrerosCasaB = casaB.guerrerosDisponibles();
            }

            while(guerrerosCasaA.length > 0 && guerrerosCasaB.length > 0){
            
                const guerreroA = guerrerosCasaA[0];
                const guerreroB = guerrerosCasaB[0];

                guerreroA.ataca(guerreroB);

                if (guerreroB.vida <= 0) {
                    this.#guerrerosMuertos.push(guerreroB);
                    guerrerosCasaB.shift(); 
                }else{
                    guerreroB.ataca(guerreroA);
                }

                if (guerreroA.vida <= 0) {
                    this.#guerrerosMuertos.push(guerreroA);
                    guerrerosCasaA.shift(); 
                }

                
            }

            if (guerrerosCasaA.length > 0) {
                console.log(`La casa ${casaA.nombre} gana la batalla.`);
            } else if (guerrerosCasaB.length > 0) {
                console.log(`La casa ${casaB.nombre} gana la batalla.`);
            } else {
                console.log("¡Ambas casas han caído en combate!");
            }
        }
        
    }

    mostrarGuerrerosMuertosEnCombate(){
        console.log("Guerreros que han muerto en combate:");
        this.#guerrerosMuertos.forEach(guerrero => console.log(`- ${guerrero.nombre}`));
    }
}