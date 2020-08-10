
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

    // tslint:disable-next-line: typedef-whitespace
    // tslint:disable-next-line: whitespace
    private heroes: Heroe[] =[
      {
        nombre: "Capitan America",
        bio: "Steven Rogers es producto de una mutacion genetica para crear a un super soldado, debido a que la prueba fue un exito, este adquirio habilidades fisicas impresionantes y sobrehumanas, tales como resistencia, fuerza, habilidad para pelear, es un ser humano mejorado en todos los sentidos, ademas de que es considerado como el primer vengador, y tambien es el lider de los vengadores. ",
        img: "assets/img/capitanamerica.png",
        aparicion: "1941-03-01",
        casa:"Marvel"
      },
      
        {
          nombre: "Aquaman",
          bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias. Es el gobernante telepático de la Atlántida y de los océanos de la Tierra, un Atlante con increíble fuerza y ​​velocidad, así como la capacidad de ordenar toda la vida marina. Su fisiología única le permite sobrevivir en tierra y en las grandes profundidades del océano de presión y temperatura. ",
          img: "assets/img/aquaman.png",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "Batman",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/batman.png",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Daredevil",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          img: "assets/img/daredevil.png",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        
        {
          nombre: "Hulk",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
          img: "assets/img/hulk.png",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Linterna Verde",
          bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
          img: "assets/img/linterna-verde.png",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        
        {
          nombre: "Wolverine",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
          img: "assets/img/wolverine.png",
          aparicion: "1974-11-01",
          casa: "Marvel"
        },
        
        {
          nombre: "Robin",
          bio: "Robin, también conocido como Richard Grayson, es fundador y líder de los Teen Titans. Durante los años anteriores a la fundación de los Titans, fue entrenado por Batman para ser su ayudante. Todas las versiones de Robin han sido las de un chico joven con traje colorido, bastante positivo y alegre, lo cual contrasta perfectamente con la apariencia oscura y personalidad seria de Batman.",
          img: "assets/img/robin.png",
          aparicion: "1940-04-01",
          casa: "DC"
        },
        {
          nombre: "Spider-Man",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          img: "assets/img/spiderman.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Iron Man",
          bio: "El genio, multimillonario inventor, industrial y CEO de Stark Industries, Tony Stark fue herido de muerte en una zona de guerra en Afganistán poco antes de ser secuestrado por terroristas. Stark construyó un traje blindado para escapar del cautiverio, que tuvo una doble función como un dispositivo para mantener el latido de su corazón manteniéndolo vivo. Una vez que regresó a Estados Unidos, Stark se reinventó a sí mismo como el superhéroe revestido con armadura Iron Man.",
          img: "assets/img/ironman.png",
          aparicion: "1963-03-01",
          casa: "Marvel"
        },
        {
          nombre: "Sr. Fantástico",
          bio: "Su nombre es Reed Richards pero al adquirir sus poderes tras ser irradiado por radiación cósmica en el espacio pasó a ser conocido como Mr. Fantástico.",
          img: "assets/img/reedrichards.png",
          aparicion: "1961-11-01",
          casa: "Marvel"
        },
        {
          nombre: "Ciclope",
          bio: "Scott Summers, también conocido como Cíclope,es un mutante cuyos ojos emiten constantemente rayos de fuerza concusiva. Scott fue uno de los primeros estudiantes del Profesor X y el líder de los X-Men.",
          img: "assets/img/ciclope.png",
          aparicion: "1963-09-01",
          casa: "Marvel"
        }
        
      ];

    constructor() { 
        console.log("Servicio listo");
    }
    
    getHeroes(): Heroe[] {
        return this.heroes;
    }

    getHeroe(idx:string){
      return this.heroes[idx];
    }

    buscarHeroes(termino:string) : Heroe[]{

      let heroesArr:Heroe[] = [];
      termino = termino.toLowerCase();

      for(let i=0; i< this.heroes.length; i++ ) {
        let heroe = this.heroes[i];

        let nombre = heroe.nombre.toLocaleLowerCase();
        if (nombre.indexOf( termino) >=0){
          heroe.idx = i;
          heroesArr.push( heroe )
        }

      }
      return heroesArr;
    }
}

export interface Heroe{
 nombre: string;
 bio: string;
 img: string;
 aparicion: string;
 casa: string;
 idx?: number;
}
