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

const argentina = new Equipo("Argentina", "A");
const canada = new Equipo("Canada", "A");
const peru = new Equipo("Perú", "A");
const chile = new Equipo("Chile", "A");
const grupo_A = new Grupo("A", argentina, canada, peru, chile);

const partido1 = new Partido("2024-06-21", "Grupos", argentina, canada);
const partido2 = new Partido("2024-06-21", "Grupos", peru, chile);
const partido3 = new Partido("2024-06-21", "Grupos", peru, canada);
const partido4 = new Partido("2024-06-21", "Grupos", argentina, chile);

partido1.jugar(2, 2);
partido2.jugar(3, 0);
partido3.jugar(3, 2);
partido4.jugar(0, 5);

/*console.log(argentina);
console.log(canada);
console.log(partido1.resultado);

partido1.jugar(partido1.marcador_A, partido1.marcador_B);*/

console.log(grupo_A.ordenar());