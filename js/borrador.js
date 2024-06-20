/*"use strict";

function Equipo(grupo, nombre, posicion = 1, partidos_jugados = 0, partidos_ganados = 0, partidos_empatados = 0, partidos_perdidos = 0, goles_favor = 0, goles_contra = 0, puntos = 0) {
    this.grupo = grupo;
    this.posicion = posicion;
    this.nombre = nombre;
    this.partidos_jugados = partidos_jugados;
    this.partidos_ganados = partidos_ganados;
    this.partidos_empatados = partidos_empatados;
    this.partidos_perdidos = partidos_perdidos;
    this.goles_favor = goles_favor;
    this.goles_contra = goles_contra;
    this.diferencia = this.goles_favor - this.goles_contra;
    this.puntos = puntos;
}

function Partido(id, fecha, fase, equipo_A, equipo_B, marcador_A = null, marcador_B = null, penales_A = null, penales_B = null, grupo=null) {
    this.id = id;
    this.fecha = fecha;
    this.fase = fase;
    this.equipo_A = equipo_A;
    this.equipo_B = equipo_B;
    this.marcador_A = marcador_A;
    this.marcador_B = marcador_B;
    this.penales_A = penales_A;
    this.penales_B = penales_B;
    this.jugado = false;
    this.ganador = null;
    this.perdedor = null;
    this.grupo = grupo;
}

function Grupo(nombre, equipo1, equipo2, equipo3, equipo4) {
    this.nombre = nombre;
    this.equipo1 = equipo1;
    this.equipo2 = equipo2;
    this.equipo3 = equipo3;
    this.equipo4 = equipo4;
    this.partidos = [];
}

Grupo.prototype.ordenar = function () {
    const equipos = [this.equipo1, this.equipo2, this.equipo3, this.equipo4];
    equipos.sort((a, b) => {
        if (b.puntos !== a.puntos) {
            return b.puntos - a.puntos; 
        } else {
            return b.diferencia - a.diferencia; 
        }
    });
    equipos.forEach((equipo, index) => {
        equipo.posicion = index + 1;
    });
    return equipos;
}

Partido.prototype.jugar = function (marcador_A, marcador_B, penales_A = null, penales_B = null) {
    this.grupo.partidos.push(this);
    if (!this.jugado){
        this.jugado=true;
    }
    if (this.jugado) {
        this.revertirResultados();
    }

    this.marcador_A = marcador_A;
    this.marcador_B = marcador_B;
    this.penales_A = penales_A;
    this.penales_B = penales_B;

    if (this.fase == "llaves") {
        if (marcador_A > marcador_B || (marcador_A == marcador_B && penales_A > penales_B)) {
            this.ganador = this.equipo_A;
            this.perdedor = this.equipo_B;
        } else if (marcador_B > marcador_A || (marcador_A == marcador_B && penales_B > penales_A)) {
            this.ganador = this.equipo_B;
            this.perdedor = this.equipo_A;
        }
    }

    if (this.fase == "grupos") {
        if (marcador_A > marcador_B) {
            this.equipo_A.puntos += 3;
            this.equipo_A.partidos_ganados += 1;
            this.equipo_B.partidos_perdidos += 1;
            this.ganador = this.equipo_A;
            this.perdedor = this.equipo_B;
        } else if (marcador_A < marcador_B) {
            this.equipo_B.puntos += 3;
            this.equipo_B.partidos_ganados += 1;
            this.equipo_A.partidos_perdidos += 1;
            this.ganador = this.equipo_B;
            this.perdedor = this.equipo_A;
        } else {
            this.equipo_A.puntos += 1;
            this.equipo_B.puntos += 1;
            this.equipo_A.partidos_empatados += 1;
            this.equipo_B.partidos_empatados += 1;
            this.ganador = "Empate";
            this.perdedor = "Empate";
        }

        this.equipo_A.partidos_jugados++;
        this.equipo_B.partidos_jugados++;
        this.equipo_A.goles_favor += marcador_A;
        this.equipo_B.goles_favor += marcador_B;
        this.equipo_A.goles_contra += marcador_B;
        this.equipo_B.goles_contra += marcador_A;

        this.equipo_A.diferencia = this.equipo_A.goles_favor - this.equipo_A.goles_contra;
        this.equipo_B.diferencia = this.equipo_B.goles_favor - this.equipo_B.goles_contra;
    }

    this.jugado = true;
}

Partido.prototype.revertirResultados = function () {
    if (this.fase == "grupos") {
        if (this.marcador_A > this.marcador_B) {
            this.equipo_A.puntos -= 3;
            this.equipo_A.partidos_ganados -= 1;
            this.equipo_B.partidos_perdidos -= 1;
        } else if (this.marcador_A < this.marcador_B) {
            this.equipo_B.puntos -= 3;
            this.equipo_B.partidos_ganados -= 1;
            this.equipo_A.partidos_perdidos -= 1;
        } else {
            this.equipo_A.puntos -= 1;
            this.equipo_B.puntos -= 1;
            this.equipo_A.partidos_empatados -= 1;
            this.equipo_B.partidos_empatados -= 1;
        }

        this.equipo_A.partidos_jugados--;
        this.equipo_B.partidos_jugados--;
        this.equipo_A.goles_favor -= this.marcador_A;
        this.equipo_B.goles_favor -= this.marcador_B;
        this.equipo_A.goles_contra -= this.marcador_B;
        this.equipo_B.goles_contra -= this.marcador_A;

        this.equipo_A.diferencia = this.equipo_A.goles_favor - this.equipo_A.goles_contra;
        this.equipo_B.diferencia = this.equipo_B.goles_favor - this.equipo_B.goles_contra;
    }
}

// EQUIPOS Y GRUPOS

const argentina = new Equipo("A", "Argentina");
const canada = new Equipo("A", "Canada");
const peru = new Equipo("A", "Perú");
const chile = new Equipo("A", "Chile");
const grupo_A = new Grupo("A", argentina, canada, peru, chile);

const ecuador = new Equipo("B", "Ecuador");
const jamaica = new Equipo("B", "Jamaica");
const mexico = new Equipo("B", "Mexico");
const venezuela = new Equipo("B", "Venezuela");
const grupo_B = new Grupo("B", ecuador, jamaica, mexico, venezuela);

const bolivia = new Equipo("C", "Bolivia");
const eeuu = new Equipo("C", "Estados Unidos");
const panama = new Equipo("C", "Panama");
const uruguay = new Equipo("C", "Uruguay");
const grupo_C = new Grupo("C", bolivia, eeuu, panama, uruguay);

const brasil = new Equipo("D", "Brasil");
const colombia = new Equipo("D", "Colombia");
const costaRica = new Equipo("D", "Costa Rica");
const paraguay = new Equipo("D", "Paraguay");
const grupo_D = new Grupo("D", brasil, colombia, costaRica, paraguay);

// Partidos en fase de grupos

const partido_1 = new Partido(1, "20-06", "grupos", argentina, canada, grupo_A);
const partido_2 = new Partido(2, "21-06", "grupos", peru, chile, grupo_A);
const partido_3 = new Partido(3, "22-06", "grupos", mexico, jamaica, grupo_B);
const partido_4 = new Partido(4, "22-06", "grupos", ecuador, venezuela, grupo_B);
const partido_5 = new Partido(5, "23-06", "grupos", eeuu, bolivia, grupo_C);
const partido_6 = new Partido(6, "23-06", "grupos", uruguay, panama, grupo_C);
const partido_7 = new Partido(7, "24-06", "grupos", brasil, costaRica, grupo_D);
const partido_8 = new Partido(8, "24-06", "grupos", colombia, paraguay, grupo_D);
const partido_9 = new Partido(9, "25-06", "grupos", chile, argentina, grupo_A);
const partido_10 = new Partido(10, "25-06", "grupos", canada, peru, grupo_A);
const partido_11 = new Partido(11, "26-06", "grupos", venezuela, mexico, grupo_B);
const partido_12 = new Partido(12, "26-06", "grupos", jamaica, ecuador, grupo_B);
const partido_13 = new Partido(13, "27-06", "grupos", panama, eeuu, grupo_C);
const partido_14 = new Partido(14, "27-06", "grupos", bolivia, uruguay, grupo_C);
const partido_15 = new Partido(15, "28-06", "grupos", paraguay, brasil, grupo_D);
const partido_16 = new Partido(16, "28-06", "grupos", costaRica, colombia, grupo_D);
const partido_17 = new Partido(17, "29-06", "grupos", argentina, peru, grupo_A);
const partido_18 = new Partido(18, "29-06", "grupos", chile, canada, grupo_A);
const partido_19 = new Partido(19, "30-06", "grupos", mexico, ecuador, grupo_B);
const partido_20 = new Partido(20, "30-06", "grupos", venezuela, jamaica, grupo_B);
const partido_21 = new Partido(21, "01-07", "grupos", uruguay, eeuu, grupo_C);
const partido_22 = new Partido(22, "01-07", "grupos", panama, bolivia, grupo_C);
const partido_23 = new Partido(23, "02-07", "grupos", brasil, colombia, grupo_D);
const partido_24 = new Partido(24, "02-07", "grupos", paraguay, costaRica, grupo_D);
const partidos_grupos = [partido_1, partido_2, partido_3, partido_4, partido_5, partido_6, partido_7, partido_8, partido_9, partido_10, partido_11, partido_12, partido_13, partido_14, partido_15, partido_16, partido_17, partido_18, partido_19, partido_20, partido_21, partido_22, partido_23, partido_24];

// Partidos en fase de llaves
const A1 = grupo_A.ordenar()[0];
const A2 = grupo_A.ordenar()[1];
const B1 = grupo_B.ordenar()[0];
const B2 = grupo_B.ordenar()[1];
const C1 = grupo_C.ordenar()[0];
const C2 = grupo_C.ordenar()[1];
const D1 = grupo_D.ordenar()[0];
const D2 = grupo_D.ordenar()[1];

// Partidos en fase de llaves
const partido_cuartos_1 = new Partido("01-07", "llaves", A1, B2);
const partido_cuartos_2 = new Partido("01-07", "llaves", B1, A2);
const partido_cuartos_3 = new Partido("02-07", "llaves", C1, D2);
const partido_cuartos_4 = new Partido("02-07", "llaves", D1, C2);
const semis1 = new Partido("10-07", "llaves", partido_cuartos_1.ganador, partido_cuartos_2.ganador);
const semis2 = new Partido("10-07", "llaves", partido_cuartos_3.ganador, partido_cuartos_4.ganador);
const tercerPuesto = new Partido("13-07", "llaves", semis1.perdedor, semis2.perdedor);
const final = new Partido("14-07", "llaves", semis1.ganador, semis2.ganador);

const partidos_llaves = [partido_cuartos_1, partido_cuartos_2, partido_cuartos_3, partido_cuartos_4, semis1, semis2, tercerPuesto, final];

const partidos = [...partidos_grupos];

const tablaInfo = document.getElementById("tablaInfo");
const tablaEncuentros = document.getElementById("tablaEncuentros");
const tablaPosiciones = document.getElementById("tablaPosiciones");
const tablaLlaves = document.getElementById("tablaLlaves");


function mostrarGrupos() {
    tablaInfo.innerHTML = `
        <table>
            <tr>
                <th>Grupo</th>
                <th>Equipos</th>
            </tr>
            <tr>
                <td>Grupo A</td>
                <td>${grupo_A.equipo1.nombre}, ${grupo_A.equipo2.nombre}, ${grupo_A.equipo3.nombre}, ${grupo_A.equipo4.nombre}</td>
            </tr>
            <tr>
                <td>Grupo B</td>
                <td>${grupo_B.equipo1.nombre}, ${grupo_B.equipo2.nombre}, ${grupo_B.equipo3.nombre}, ${grupo_B.equipo4.nombre}</td>
            </tr>
            <tr>
                <td>Grupo C</td>
                <td>${grupo_C.equipo1.nombre}, ${grupo_C.equipo2.nombre}, ${grupo_C.equipo3.nombre}, ${grupo_C.equipo4.nombre}</td>
            </tr>
            <tr>
                <td>Grupo D</td>
                <td>${grupo_D.equipo1.nombre}, ${grupo_D.equipo2.nombre}, ${grupo_D.equipo3.nombre}, ${grupo_D.equipo4.nombre}</td>
            </tr>
        </table>
    `;
}

// Función para mostrar los partidos de grupos y llaves
function mostrarEncuentros() {
    let encuentrosHTML = `
        <table>
            <tr>
                <th>Fecha</th>
                <th>Fase</th>
                <th>Grupo</th>
                <th>Equipo 1</th>
                <th>Equipo 2</th>
                <th>Marcador 1</th>
                <th>Marcador 2</th>
                <th>Penales 1</th>
                <th>Penales 2</th>
                <th>Resultado</th>
            </tr>
    `;
    partidos.forEach((partido, index) => {
        encuentrosHTML += `
            <tr>
                <td>${partido.fecha}</td>
                <td>${partido.fase}</td>
                <td>${partido.equipo_A.grupo}</td>
                <td>${partido.equipo_A.nombre}</td>
                <td>${partido.equipo_B.nombre}</td>
                <td><input type="number" min="0" id="marcador_A_${index}" onchange="actualizarResultado(${index})" value="${partido.marcador_A !== null ? partido.marcador_A : ''}"/></td>
                <td><input type="number" min="0" id="marcador_B_${index}" onchange="actualizarResultado(${index})" value="${partido.marcador_B !== null ? partido.marcador_B : ''}"/></td>
                <td>${partido.fase === 'llaves' ? `<input type="number" min="0" id="penales_A_${index}" onchange="actualizarResultado(${index})" value="${partido.penales_A !== null ? partido.penales_A : ''}"/>` : ''}</td>
                <td>${partido.fase === 'llaves' ? `<input type="number" min="0" id="penales_B_${index}" onchange="actualizarResultado(${index})" value="${partido.penales_B !== null ? partido.penales_B : ''}"/>` : ''}</td>
                <td id="resultado_${index}">${partido.ganador ? partido.ganador.nombre : 'No jugado'}</td>
            </tr>
        `;
    });
    encuentrosHTML += `</table>`;
    tablaEncuentros.innerHTML = encuentrosHTML;
}

// Función para actualizar resultados y mostrar el ganador
function actualizarResultado(index) {
    const partido = partidos[index];
    const marcador_A = parseInt(document.getElementById(`marcador_A_${index}`).value);
    const marcador_B = parseInt(document.getElementById(`marcador_B_${index}`).value);
    const penales_A = partido.fase === 'llaves' ? parseInt(document.getElementById(`penales_A_${index}`).value) : null;
    const penales_B = partido.fase === 'llaves' ? parseInt(document.getElementById(`penales_B_${index}`).value) : null;

    if (!isNaN(marcador_A) && !isNaN(marcador_B) && (partido.fase !== 'llaves' || (!isNaN(penales_A) && !isNaN(penales_B)))) {
        partido.jugar(marcador_A, marcador_B, penales_A, penales_B);
        let resultado;
        if (partido.ganador === 'Empate') {
            resultado = 'Empate';
        } else {
            resultado = `${partido.ganador.nombre} Gana`;
        }
        document.getElementById(`resultado_${index}`).innerText = resultado;
    }
}

// Función para mostrar la tabla de posiciones
function mostrarPosiciones() {
    let grupos = [grupo_A, grupo_B, grupo_C, grupo_D];
    let posicionesHTML = '';
    grupos.forEach(grupo => {
        const equiposOrdenados = grupo.ordenar();
        posicionesHTML += `
            <table>
                <caption>Grupo ${grupo.nombre}</caption>
                <tr>
                    <th>Posición</th>
                    <th>Equipo</th>
                    <th>PJ</th>
                    <th>PG</th>
                    <th>PE</th>
                    <th>PP</th>
                    <th>GF</th>
                    <th>GC</th>
                    <th>DG</th>
                    <th>Puntos</th>
                </tr>
        `;
        equiposOrdenados.forEach(equipo => {
            posicionesHTML += `
                <tr>
                    <td>${equipo.posicion}</td>
                    <td>${equipo.nombre}</td>
                    <td>${equipo.partidos_jugados}</td>
                    <td>${equipo.partidos_ganados}</td>
                    <td>${equipo.partidos_empatados}</td>
                    <td>${equipo.partidos_perdidos}</td>
                    <td>${equipo.goles_favor}</td>
                    <td>${equipo.goles_contra}</td>
                    <td>${equipo.diferencia}</td>
                    <td>${equipo.puntos}</td>
                </tr>
            `;
        });
        posicionesHTML += `</table>`;
    });
    tablaPosiciones.innerHTML = posicionesHTML;
}

// Función para mostrar los partidos de cuartos de final, semifinales y finales
function mostrarLlaves(partidosLlaves) {
    const llaves = document.getElementById("llaves");
    llaves.innerHTML = "";

    partidosLlaves.forEach((partido) => {
        const h2 = document.createElement("h2");
        h2.textContent = `Partido ${partido.fecha} - ${partido.fase}`;
        llaves.appendChild(h2);

        const tabla = document.createElement("table");
        tabla.innerHTML = `
            <tr>
                <th>Fecha</th>
                <th>Fase</th>
                <th>Grupo</th>
                <th>Equipo 1</th>
                <th>Equipo 2</th>
                <th>Marcador 1</th>
                <th>Marcador 2</th>
                <th>Penales 1</th>
                <th>Penales 2</th>
                <th>Resultado</th>
            </tr>
        `;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${partido.fecha}</td>
            <td>${partido.fase}</td>
            <td>${partido.equipo_A.grupo}</td>
            <td>${partido.equipo_A.nombre}</td>
            <td>${partido.equipo_B.nombre}</td>
            <td>${partido.marcador_A !== null ? partido.marcador_A : ""}</td>
            <td>${partido.marcador_B !== null ? partido.marcador_B : ""}</td>
            <td>${partido.penales_A !== null ? partido.penales_A : ""}</td>
            <td>${partido.penales_B !== null ? partido.penales_B : ""}</td>
            <td>${partido.ganador ? partido.ganador.nombre : "No jugado"}</td>
        `;
        tabla.appendChild(tr);

        llaves.appendChild(tabla);
    });
}


// Inicializar la visualización
mostrarGrupos();
mostrarEncuentros();



document.getElementById('posiciones-button').addEventListener('click', mostrarPosiciones);
document.getElementById('llaves-button').addEventListener('click', () => mostrarLlaves(partidos_llaves));
document.getElementById('reiniciar-button').addEventListener('click', () => {
    location.reload();  // Reinicia la aplicación recargando la página
});



// Partidos en fase de llaves
const partido_cuartos_1 = new Partido("01-07", "llaves", argentina, ecuador);
const partido_cuartos_2 = new Partido("01-07", "llaves", brasil, uruguay);
const partido_cuartos_3 = new Partido("02-07", "llaves", peru, colombia);
const partido_cuartos_4 = new Partido("02-07", "llaves", chile, mexico);

const partidos_llaves = [partido_cuartos_1, partido_cuartos_2, partido_cuartos_3, partido_cuartos_4];


const A1 = grupo_A.ordenar()[0];
const A2 = grupo_A.ordenar()[1];
const B1 = grupo_B.ordenar()[0];
const B2 = grupo_B.ordenar()[1];
const C1 = grupo_C.ordenar()[0];
const C2 = grupo_C.ordenar()[1];
const D1 = grupo_D.ordenar()[0];
const D2 = grupo_D.ordenar()[1];

// Partidos en fase de llaves
const partido_cuartos_1 = new Partido("01-07", "llaves", A1, B2);
const partido_cuartos_2 = new Partido("01-07", "llaves", B1, A2);
const partido_cuartos_3 = new Partido("02-07", "llaves", C1, D2);
const partido_cuartos_4 = new Partido("02-07", "llaves", D1, C2);
const semis1 = new Partido("10-07", "llaves", partido_cuartos_1.ganador, partido_cuartos_2.ganador);
const semis2 = new Partido("10-07", "llaves", partido_cuartos_3.ganador, partido_cuartos_4.ganador);
const tercerPuesto = new Partido("13-07", "llaves", semis1.perdedor, semis2.perdedor);
const final = new Partido("14-07", "llaves", semis1.ganador, semis2.ganador);

const partidos_llaves = [partido_cuartos_1, partido_cuartos_2, partido_cuartos_3, partido_cuartos_4, semis1.perdedor,
semis2.perdedor, semis1.ganador, semis2.ganador];