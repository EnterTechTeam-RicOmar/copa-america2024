"use strict"

function Equipo(nombre, grupo, posicion=1, puntos=0, goles_favor=0, goles_contra=0){
    this.nombre = nombre
    this.grupo = grupo
    this.posicion = posicion
    this.puntos = puntos
    this.goles_favor = goles_favor
    this.goles_contra = goles_contra
    this.diferencia = this.goles_favor-this.goles_contra
}

function Partido(fecha, fase, equipo_A, equipo_B, marcador_A=null, marcador_B=null, penales_A=null, penales_B=null){
    this.fecha = fecha
    this.fase = fase
    this.equipo_A = equipo_A
    this.equipo_B = equipo_B
    this.marcador_A = marcador_A
    this.marcador_B = marcador_B
    this.penales_A = penales_A
    this.penales_B = penales_B
    this.resultado = "Por Definirse";
}

function Grupo(nombre, equipo1, equipo2, equipo3, equipo4){
    this.nombre = nombre
    this.equipo1 = equipo1
    this.equipo2 = equipo2
    this.equipo3 = equipo3
    this.equipo4 = equipo4
}

Grupo.prototype.ordenar = function(){
    const equipos = [this.equipo1, this.equipo2, this.equipo3, this.equipo4]
    equipos.sort((a, b) => {
        if (b.puntos !== a.puntos) {
            return b.puntos - a.puntos; // Ordenar por puntos de mayor a menor
        } else {
            return b.diferencia - a.diferencia; // En caso de empate por puntos, ordenar por diferencia de goles de mayor a menor
        }
    });
    equipos.forEach((equipo, index)=>{
        equipo.posicion = index + 1
    })
    return equipos;
}

Partido.prototype.jugar = function(marcador_A, marcador_B, penales_A = null, penales_B = null){
    
    if (this.fase == "llaves") {
        if (marcador_A>marcador_B){
            this.resultado = `Ganador ${this.equipo_A.nombre}`; 
        }
        if (marcador_A<marcador_B){
            this.resultado = `Ganador ${this.equipo_B.nombre}`; 
        }
        if (penales_A > penales_B) {
            this.resultado = `Ganador ${this.equipo_A.nombre}`;
        }
        if (penales_A < penales_B) {
            this.resultado = `Ganador ${this.equipo_B.nombre}`;
        }
    }
    if (this.fase == "grupos") {
        if (marcador_A>marcador_B){
            this.equipo_A.puntos+=3
            this.resultado = `Ganador ${this.equipo_A.nombre}`; 
        }
        if (marcador_A<marcador_B){
            this.equipo_B.puntos+=3
            this.resultado = `Ganador ${this.equipo_B.nombre}`; 
        }
        if (marcador_A==marcador_B){
            this.equipo_A.puntos+=1
            this.equipo_B.puntos+=1
            this.resultado = `Empate`;
        }
        this.equipo_A.goles_favor+=marcador_A
        this.equipo_B.goles_favor+=marcador_B
        this.equipo_A.goles_contra+=marcador_B
        this.equipo_B.goles_contra+=marcador_A
    
        this.equipo_A.diferencia = this.equipo_A.goles_favor-this.equipo_A.goles_contra
        this.equipo_B.diferencia = this.equipo_B.goles_favor-this.equipo_B.goles_contra
    }
    
}

// EQUIPOS Y GRUPOS

const argentina = new Equipo("Argentina", "A");
const canada = new Equipo("Canada", "A");
const peru = new Equipo("Perú", "A");
const chile = new Equipo("Chile", "A");
const grupo_A = new Grupo("A", argentina, canada, peru, chile);

const ecuador = new Equipo("Ecuador", "B");
const jamaica = new Equipo("Jamaica", "B");
const mexico = new Equipo("Mexico", "B");
const venezuela = new Equipo("Venezuela", "B");
const grupo_B = new Grupo("B", ecuador, jamaica, mexico, venezuela)

const bolivia = new Equipo("Bolivia", "C");
const eeuu = new Equipo("Estados Unidos", "C");
const panama = new Equipo("Panama", "C");
const uruguay = new Equipo("Uruguay", "C");
const grupo_C = new Grupo("C", bolivia, eeuu, panama, uruguay)

const brasil = new Equipo("Brasil", "D");
const colombia = new Equipo("Colombia", "D");
const costaRica = new Equipo("Costa Rica", "D");
const paraguay = new Equipo("Paraguay", "D");
const grupo_D = new Grupo("D", ecuador, jamaica, mexico, venezuela)

// Partidos en fase de grupos

const partido_1 = new Partido("20-06", "grupos", argentina, canada);
const partido_2 = new Partido("21-06", "grupos", peru, chile);
const partido_3 = new Partido("22-06", "grupos", mexico, jamaica);
const partido_4 = new Partido("22-06", "grupos", ecuador, venezuela);
const partido_5 = new Partido("23-06", "grupos", eeuu, bolivia);
const partido_6 = new Partido("23-06", "grupos", uruguay, panama);
const partido_7 = new Partido("24-06", "grupos", brasil, costaRica);
const partido_8 = new Partido("24-06", "grupos", colombia, paraguay);
const partido_9 = new Partido("25-06", "grupos", chile, argentina);
const partido_10 = new Partido("25-06", "grupos", peru, canada);
const partido_11 = new Partido("26-06", "grupos", venezuela, mexico);
const partido_12 = new Partido("26-06", "grupos", ecuador, jamaica);
const partido_13 = new Partido("27-06", "grupos", panama, eeuu);
const partido_14 = new Partido("27-06", "grupos", uruguay, bolivia);
const partido_15 = new Partido("28-06", "grupos", paraguay, brasil);
const partido_16 = new Partido("28-06", "grupos", colombia, costaRica);
const partido_17 = new Partido("28-06", "grupos", colombia, costaRica);
const partido_18 = new Partido("29-06", "grupos", argentina, peru);
const partido_19 = new Partido("29-06", "grupos", canada, chile);
const partido_20 = new Partido("30-06", "grupos", mexico, ecuador);
const partido_21 = new Partido("30-06", "grupos", jamaica, venezuela);
const partido_22 = new Partido("01-07", "grupos", eeuu, uruguay);
const partido_23 = new Partido("01-07", "grupos", bolivia, panama);
const partido_24 = new Partido("02-07", "grupos", brasil, colombia);
const partido_25 = new Partido("02-07", "grupos", costaRica, paraguay);

