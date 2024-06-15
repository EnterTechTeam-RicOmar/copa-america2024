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
    this.ganador = null;
    this.perdedor = null;
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
            this.ganador = this.equipo_A;
            this.perdedor = this.equipo_B;
        }
        if (marcador_A<marcador_B){
            this.ganador = this.equipo_B;
            this.perdedor = this.equipo_A;
        }
        if (penales_A > penales_B) {
            this.ganador = this.equipo_A;
            this.perdedor = this.equipo_B;
        }
        if (penales_A < penales_B) {
            this.ganador = this.equipo_B;
            this.perdedor = this.equipo_A;
        }
    }
    if (this.fase == "grupos") {
        if (marcador_A>marcador_B){
            this.equipo_A.puntos+=3
            this.ganador = this.equipo_A; 
            this.perdedor = this.equipo_B; 
        }
        if (marcador_A<marcador_B){
            this.equipo_B.puntos+=3
            this.ganador = this.equipo_B; 
            this.perdedor = this.equipo_A; 
        }
        if (marcador_A==marcador_B){
            this.equipo_A.puntos+=1
            this.equipo_B.puntos+=1
            this.ganador = `Empate`;
            this.perdedor = `Empate`;
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
const partido_6 = new Partido("23-06", "grupos", eeuu, bolivia);
const partido_5 = new Partido("23-06", "grupos", uruguay, panama);
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
const partido_17 = new Partido("29-06", "grupos", argentina, peru);
const partido_18 = new Partido("29-06", "grupos", canada, chile);
const partido_19 = new Partido("30-06", "grupos", mexico, ecuador);
const partido_20 = new Partido("30-06", "grupos", jamaica, venezuela);
const partido_21 = new Partido("01-07", "grupos", eeuu, uruguay);
const partido_22 = new Partido("01-07", "grupos", bolivia, panama);
const partido_23 = new Partido("02-07", "grupos", brasil, colombia);
const partido_24 = new Partido("02-07", "grupos", costaRica, paraguay);

const A1 = grupo_A.ordenar()[0];
const A2 = grupo_A.ordenar()[1];
const B1 = grupo_B.ordenar()[0];
const B2 = grupo_B.ordenar()[1];
const C1 = grupo_C.ordenar()[0];
const C2 = grupo_C.ordenar()[1];
const D1 = grupo_D.ordenar()[0];
const D2 = grupo_C.ordenar()[1];

// Partidos en fase de llaves

const cuartos1 = new Partido("04-07", "llaves", A1, B2);
const cuartos2 = new Partido("05-07", "llaves", B1, A2);
const cuartos3 = new Partido("06-07", "llaves", C1, D2);
const cuartos4 = new Partido("06-07", "llaves", C1, D2);

const semis1 = new Partido("10-07", "llaves", cuartos1.ganador, cuartos2.ganador);
const semis2 = new Partido("10-07", "llaves", cuartos3.ganador, cuartos4.ganador);

const tercerPuesto = new Partido("13-07", "llaves", semis1.perdedor, semis2.perdedor)

const final = new Partido("14-07", "llaves", semis1.ganador, semis2.ganador);

document.addEventListener('DOMContentLoaded', () => {
    renderGrupos();
    renderEncuentros();
});

function renderGrupos() {
    const grupos = [grupo_A, grupo_B, grupo_C, grupo_D];
    const tablaGruposDiv = document.getElementById('tablaGrupos');

    grupos.forEach(grupo => {
        const table = document.createElement('table');
        table.classList.add('tabla-grupo');
        
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th>Grupo</th>
                <th>Equipo</th>
            </tr>
        `;
        
        const tbody = document.createElement('tbody');
        const equipos = grupo.ordenar();

        equipos.forEach(equipo => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${equipo.grupo}</td>
                <td>${equipo.nombre}</td>
            `;
            tbody.appendChild(row);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        tablaGruposDiv.appendChild(table);
    });
}

function renderEncuentros() {
    const partidos = [partido_1, partido_2, partido_3, partido_2, partido_4, partido_2, partido_5, partido_6, partido_7, 
        partido_8, partido_9, partido_10, partido_11, partido_12, partido_13, partido_14, partido_15, partido_16, 
        partido_17, partido_18, partido_19, partido_20, partido_21, partido_22, partido_23, partido_24];
    const tablaGruposDiv = document.getElementById('tablaGrupos');

    partidos.forEach(partido => {
        const table = document.createElement('table');
        table.classList.add('tabla-grupo');
        
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th>Fecha</th>
                <th>Fase</th>
                <th>Grupo</th>
                <th>Equipo 1</th>
                <th>Equipo 2</th>
                <th>Marcador 1</th>
                <th>Marcador 2</th>
                <th>Resultado</th>
            </tr>
        `;
        
        const tbody = document.createElement('tbody');
        const equipos = partido.ordenar();

        equipos.forEach(equipo => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${equipo.grupo}</td>
                <td>${equipo.nombre}</td>
            `;
            tbody.appendChild(row);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        tablaGruposDiv.appendChild(table);
    });
}