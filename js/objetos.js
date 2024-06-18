"use strict";

// Definición del objeto Equipo
function Equipo(nombre, grupo, posicion = 1, puntos = 0, goles_favor = 0, goles_contra = 0) {
    this.nombre = nombre;
    this.grupo = grupo;
    this.posicion = posicion;
    this.partidosGanados = 0;
    this.partidosPerdidos = 0;
    this.partidosEmpatados = 0;
    this.puntos = puntos;
    this.goles_favor = goles_favor;
    this.goles_contra = goles_contra;
    this.diferencia = this.goles_favor - this.goles_contra;
}

// Definición del objeto Partido
function Partido(fecha, fase, equipo_A, equipo_B, marcador_A = null, marcador_B = null, penales_A = null, penales_B = null) {
    this.fecha = fecha;
    this.fase = fase;
    this.equipo_A = equipo_A;
    this.equipo_B = equipo_B;
    this.marcador_A = marcador_A;
    this.marcador_B = marcador_B;
    this.penales_A = penales_A;
    this.penales_B = penales_B;
    this.ganador = null;
    this.perdedor = null;
}

// Método para simular el resultado de un partido
Partido.prototype.jugar = function(marcador_A, marcador_B, penales_A = null, penales_B = null) {
    if (this.fase === "llaves") {
        if (marcador_A > marcador_B) {
            this.ganador = this.equipo_A;
            this.perdedor = this.equipo_B;
        } else if (marcador_A < marcador_B) {
            this.ganador = this.equipo_B;
            this.perdedor = this.equipo_A;
        } else {
            if (penales_A > penales_B) {
                this.ganador = this.equipo_A;
                this.perdedor = this.equipo_B;
            } else if (penales_A < penales_B) {
                this.ganador = this.equipo_B;
                this.perdedor = this.equipo_A;
            } else {
                this.ganador = null;
                this.perdedor = null;
            }
        }
    }

    if (this.fase === "grupos") {
        if (marcador_A > marcador_B) {
            this.equipo_A.puntos += 3;
            this.equipo_A.partidosGanados += 1;
            this.equipo_B.partidosPerdidos += 1;
            this.ganador = this.equipo_A;
            this.perdedor = this.equipo_B;
        } else if (marcador_A < marcador_B) {
            this.equipo_B.puntos += 3;
            this.equipo_B.partidosGanados += 1;
            this.equipo_A.partidosPerdidos += 1;
            this.ganador = this.equipo_B;
            this.perdedor = this.equipo_A;
        } else {
            this.equipo_A.puntos += 1;
            this.equipo_B.puntos += 1;
            this.equipo_A.partidosEmpatados += 1;
            this.equipo_B.partidosEmpatados += 1;
            this.ganador = "Empate";
            this.perdedor = "Empate";
        }

        this.equipo_A.goles_favor += marcador_A;
        this.equipo_B.goles_favor += marcador_B;
        this.equipo_A.goles_contra += marcador_B;
        this.equipo_B.goles_contra += marcador_A;

        this.equipo_A.diferencia = this.equipo_A.goles_favor - this.equipo_A.goles_contra;
        this.equipo_B.diferencia = this.equipo_B.goles_favor - this.equipo_B.goles_contra;
    }
};

// Definición del objeto Grupo
function Grupo(nombre, equipo1, equipo2, equipo3, equipo4) {
    this.nombre = nombre;
    this.equipo1 = equipo1;
    this.equipo2 = equipo2;
    this.equipo3 = equipo3;
    this.equipo4 = equipo4;
}

// Método para ordenar los equipos en el grupo según criterios de clasificación
Grupo.prototype.ordenar = function() {
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
};

// Creación de los equipos
const argentina = new Equipo("Argentina", "A");
const canada = new Equipo("Canadá", "A");
const peru = new Equipo("Perú", "A");
const chile = new Equipo("Chile", "A");

const ecuador = new Equipo("Ecuador", "B");
const jamaica = new Equipo("Jamaica", "B");
const mexico = new Equipo("México", "B");
const venezuela = new Equipo("Venezuela", "B");

const bolivia = new Equipo("Bolivia", "C");
const eeuu = new Equipo("Estados Unidos", "C");
const panama = new Equipo("Panamá", "C");
const uruguay = new Equipo("Uruguay", "C");

const brasil = new Equipo("Brasil", "D");
const colombia = new Equipo("Colombia", "D");
const costaRica = new Equipo("Costa Rica", "D");
const paraguay = new Equipo("Paraguay", "D");

// Creación de los grupos
const grupo_A = new Grupo("Grupo A", argentina, canada, peru, chile);
const grupo_B = new Grupo("Grupo B", ecuador, jamaica, mexico, venezuela);
const grupo_C = new Grupo("Grupo C", bolivia, eeuu, panama, uruguay);
const grupo_D = new Grupo("Grupo D", brasil, colombia, costaRica, paraguay);

// Creación de los partidos de la fase de grupos
const partido_1 = new Partido("20-06", "grupos", argentina, canada);
const partido_2 = new Partido("21-06", "grupos", peru, chile);
const partido_3 = new Partido("22-06", "grupos", mexico, jamaica);
const partido_4 = new Partido("22-06", "grupos", ecuador, venezuela);
const partido_5 = new Partido("23-06", "grupos", eeuu, bolivia);
const partido_6 = new Partido("23-06", "grupos", uruguay, panama);
const partido_7 = new Partido("24-06", "grupos", brasil, costaRica);
const partido_8 = new Partido("24-06", "grupos", colombia, paraguay);
const partido_9 = new Partido("25-06", "grupos", chile, argentina);
const partido_10 = new Partido("25-06", "grupos", canada, peru);
const partido_11 = new Partido("26-06", "grupos", venezuela, mexico);
const partido_12 = new Partido("26-06", "grupos", jamaica, ecuador);
const partido_13 = new Partido("27-06", "grupos", panama, eeuu);
const partido_14 = new Partido("27-06", "grupos", bolivia, uruguay);
const partido_15 = new Partido("28-06", "grupos", paraguay, brasil);
const partido_16 = new Partido("28-06", "grupos", costaRica, colombia);
const partido_17 = new Partido("29-06", "grupos", argentina, peru);
const partido_18 = new Partido("29-06", "grupos", chile, canada);
const partido_19 = new Partido("30-06", "grupos", mexico, ecuador);
const partido_20 = new Partido("30-06", "grupos", venezuela, jamaica);
const partido_21 = new Partido("01-07", "grupos", uruguay, eeuu);
const partido_22 = new Partido("01-07", "grupos", panama, bolivia);
const partido_23 = new Partido("02-07", "grupos", brasil, colombia);
const partido_24 = new Partido("02-07", "grupos", paraguay, costaRica);

// Función para renderizar las tablas de grupos en el HTML
function renderizarTablasGrupos() {
    const grupos = [grupo_A, grupo_B, grupo_C, grupo_D];

    grupos.forEach(grupo => {
        const tabla = document.getElementById(`tabla${grupo.nombre}`);

        if (tabla) {
            const tbody = tabla.querySelector('tbody');

            tbody.innerHTML = '';

            const equiposOrdenados = grupo.ordenar();

            equiposOrdenados.forEach((equipo, index) => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${equipo.nombre}</td>
                    <td>${equipo.puntos}</td>
                    <td>${equipo.partidosGanados}</td>
                    <td>${equipo.partidosEmpatados}</td>
                    <td>${equipo.partidosPerdidos}</td>
                    <td>${equipo.goles_favor}</td>
                    <td>${equipo.goles_contra}</td>
                    <td>${equipo.diferencia}</td>
                `;
                tbody.appendChild(fila);
            });
        } else {
            console.error(`No se encontró la tabla para el grupo ${grupo.nombre}`);
        }
    });
}

// Event listener para renderizar las tablas al cargar el DOM
document.addEventListener('DOMContentLoaded', renderizarTablasGrupos);

// Simulación de los resultados de los partidos
partido_1.jugar(3, 1);
partido_2.jugar(2, 2);
partido_3.jugar(1, 0);
partido_4.jugar(2, 2);
partido_5.jugar(2, 2);
partido_6.jugar(0, 3);
partido_7.jugar(2, 1);
partido_8.jugar(1, 2);
partido_9.jugar(2, 0);
partido_10.jugar(1, 1);
partido_11.jugar(0, 2);
partido_12.jugar(2, 2);
partido_13.jugar(1, 1);
partido_14.jugar(0, 3);
partido_15.jugar(3, 0);
partido_16.jugar(1, 1);
partido_17.jugar(1, 1);
partido_18.jugar(2, 3);
partido_19.jugar(1, 0);
partido_20.jugar(0, 2);
partido_21.jugar(1, 1);
partido_22.jugar(1, 0);
partido_23.jugar(2, 0);
partido_24.jugar(0, 1);

// Actualizar las tablas después de simular los resultados
renderizarTablasGrupos();
