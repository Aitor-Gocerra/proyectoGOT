import { Casa } from "./casa.js";

export class Batalla {
    #guerrerosMuertos = [];

    iniciarBatalla (casaA, casaB){

        let guerrerosCasaA = [];
        let guerrerosCasaB = [];

        if(casaA.esAliada(casaB)){
            console.log("Ambas casas son aliadas, no pueden luchar entre ellas");
        }else{

            if(casaA instanceof Casa && casaB instanceof Casa){
                guerrerosCasaA = casaA.guerrerosDisponibles();
                guerrerosCasaB = casaB.guerrerosDisponibles();
            }

            while(guerrerosCasaA.length > 0 && guerrerosCasaB.length > 0){
            
                const guerreroA = guerrerosCasaA[0];
                const guerreroB = guerrerosCasaB[0];

                if(guerreroA.nivel >= guerreroB.nivel){

                    guerreroA.ataca(guerreroB);

                    if (guerreroB.vida <= 0) {
                        this.#guerrerosMuertos.push(guerreroB);
                        guerreroA.ganarExperiencia();
                        guerrerosCasaB.shift(); 
                    }else{
                        guerreroB.ataca(guerreroA);

                        if (guerreroA.vida <= 0) {
                            this.#guerrerosMuertos.push(guerreroA);
                            guerrerosCasaA.shift(); 
                        }
                    }
                }else{
                    guerreroB.ataca(guerreroA);

                    if (guerreroA.vida <= 0) {
                        this.#guerrerosMuertos.push(guerreroA);
                        guerreroB.ganarExperiencia();
                        guerrerosCasaA.shift(); 
                    }else{
                        guerreroA.ataca(guerreroB);

                        if (guerreroB.vida <= 0) {
                            this.#guerrerosMuertos.push(guerreroB);
                            guerrerosCasaB.shift(); 
                        }
                    }
                }
            }

            if (guerrerosCasaA.length > 0) {
                /* casaA.oro += casaB.oro; */
                casaA.oro = casaA.oro + casaB.oro;
                casaB.oro = 0;
                console.log(`La casa ${casaA.nombre} gana la batalla y todo el oro de ${casaB.nombre}. Oro de la casa ${casaA.nombre}: ${casaA.oro} monedas de oro.`);
            } else if (guerrerosCasaB.length > 0) {
                casaB.oro += casaA.oro;
                casaA.oro = 0;
                console.log(`La casa ${casaB.nombre} gana la batalla y todo el oro de ${casaA.nombre}. Oro de la casa ${casaB.nombre}: ${casaB.oro} monedas de oro.`);
            } else {
                console.log("¡Ambas casas han caído en combate!");
            }
        }
        
    }

    iniciarBatallaConAliados(casaA, casaB){
        console.log(`\nBatalla entre Casa ${casaA.nombre} y Casa ${casaB.nombre}`);
        
        if(casaA.esAliada(casaB)){
            console.log("Ambas casas son aliadas, no pueden luchar entre ellas");
            return;
        }
        
        // Obtener guerreros con aliados
        let guerrerosCasaA = casaA.guerrerosDisponibles();
        let guerrerosCasaB = casaB.guerrerosDisponibles();
        
        console.log(`Casa ${casaA.nombre} cuenta con ${guerrerosCasaA.length} guerreros (incluyendo aliados)`);
        console.log(`Casa ${casaB.nombre} cuenta con ${guerrerosCasaB.length} guerreros (incluyendo aliados)`);
        
        while(guerrerosCasaA.length > 0 && guerrerosCasaB.length > 0){
            const guerreroA = guerrerosCasaA[0];
            const guerreroB = guerrerosCasaB[0];

            if(guerreroA.nivel >= guerreroB.nivel){

                    guerreroA.ataca(guerreroB);

                    if (guerreroB.vida <= 0) {
                        this.#guerrerosMuertos.push(guerreroB);
                        guerreroA.ganarExperiencia();
                        guerrerosCasaB.shift(); 
                    }else{
                        guerreroB.ataca(guerreroA);

                        if (guerreroA.vida <= 0) {
                            this.#guerrerosMuertos.push(guerreroA);
                            guerrerosCasaA.shift(); 
                        }
                    }
            }else{
                guerreroB.ataca(guerreroA);

                if (guerreroA.vida <= 0) {
                    this.#guerrerosMuertos.push(guerreroA);
                    guerreroB.ganarExperiencia();
                    guerrerosCasaA.shift(); 
                }else{
                    guerreroA.ataca(guerreroB);

                    if (guerreroB.vida <= 0) {
                        this.#guerrerosMuertos.push(guerreroB);
                        guerrerosCasaB.shift(); 
                    }
                }
            }
        }

        if (guerrerosCasaA.length > 0) {
            /* casaA.oro += casaB.oro; */ /* Porque esto no funciona y lo de abajo si */
            casaA.oro = casaA.oro + casaB.oro;
            casaB.oro = 0;
            console.log(`La casa ${casaA.nombre} gana la batalla y todo el oro de ${casaB.nombre}. Oro de la casa ${casaA.nombre}: ${casaA.oro} monedas de oro.`);
        } else if (guerrerosCasaB.length > 0) {
            /* casaB.oro += casaA.oro; */
            casaB.oro = casaB.oro + casaA.oro;
            casaA.oro = 0;
            console.log(`La casa ${casaB.nombre} gana la batalla y todo el oro de ${casaA.nombre}. Oro de la casa ${casaB.nombre}: ${casaB.oro} monedas de oro.`);
        } else {
            console.log("¡Ambas casas han caído en combate!");
        }
    }


    mostrarGuerrerosMuertosEnCombate(){
        console.log("Guerreros que han muerto en combate:");
        this.#guerrerosMuertos.forEach(guerrero => console.log(`- ${guerrero.nombre}`));
    }
}