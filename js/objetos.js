"use strict";

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

Equipo.prototype.reiniciar = function () {
  this.puntos = 0;
  this.goles_favor = 0;
  this.goles_contra = 0;
  this.partidos_jugados = 0;
  this.partidos_ganados = 0;
  this.partidos_empatados = 0;
  this.partidos_perdidos = 0;
};

function Partido(id, fecha, fase, equipo_A, equipo_B, grupo = null, marcador_A = null, marcador_B = null, penales_A = null, penales_B = null) {
  this.id = id;
  this.fecha = fecha;
  this.fase = fase;
  this.equipo_A = equipo_A;
  this.equipo_B = equipo_B;
  this.grupo = grupo;
  this.marcador_A = marcador_A;
  this.marcador_B = marcador_B;
  this.penales_A = penales_A;
  this.penales_B = penales_B;
  this.jugado = false;
}

Partido.prototype.ganador = function () {
  if (this.marcador_A > this.marcador_B) return this.equipo_A;
  if (this.marcador_A < this.marcador_B) return this.equipo_B;
  if (this.marcador_A === this.marcador_B) {
    if (this.penales_A === null || this.penales_B === null) return null;
    if (this.penales_A > this.penales_B) return this.equipo_A;
    if (this.penales_A < this.penales_B) return this.equipo_B;
  }
  return null;
};

Partido.prototype.perdedor = function () {
  const equipo_ganador = this.ganador();
  if (equipo_ganador === this.equipo_A) return this.equipo_B;
  if (equipo_ganador === this.equipo_B) return this.equipo_A;
  return null;
};

function Grupo(nombre, equipo1, equipo2, equipo3, equipo4) {
  this.nombre = nombre;
  this.equipo1 = equipo1;
  this.equipo2 = equipo2;
  this.equipo3 = equipo3;
  this.equipo4 = equipo4;
  this.partidos = [];
}

Grupo.prototype.puntuar = function () {
  this.equipo1.reiniciar();
  this.equipo2.reiniciar();
  this.equipo3.reiniciar();
  this.equipo4.reiniciar();

  this.partidos.forEach((partido) => {
    console.log(partido);
    const equipo_ganador = partido.ganador();
    const equipo_perdedor = partido.perdedor();
    const empataron = equipo_ganador === null || equipo_perdedor === null;
    if (empataron) {
      partido.equipo_A.puntos += 1;
      partido.equipo_B.puntos += 1;
      partido.equipo_A.partidos_empatados += 1;
      partido.equipo_B.partidos_empatados += 1;
    } else {
      equipo_ganador.puntos += 3;
      equipo_ganador.partidos_ganados += 1;
      equipo_perdedor.partidos_perdidos += 1;
    }
    partido.equipo_A.partidos_jugados++;
    partido.equipo_B.partidos_jugados++;
    // Goles:
    partido.equipo_A.goles_favor += partido.marcador_A;
    partido.equipo_A.goles_contra += partido.marcador_B;
    partido.equipo_B.goles_favor += partido.marcador_B;
    partido.equipo_B.goles_contra += partido.marcador_A;
    // Diferencia:
    partido.equipo_A.diferencia =
      partido.equipo_A.goles_favor - partido.equipo_A.goles_contra;
    partido.equipo_B.diferencia =
      partido.equipo_B.goles_favor - partido.equipo_B.goles_contra;
  });
};

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
};

Partido.prototype.jugar = function (marcador_A, marcador_B) {
    this.marcador_A = marcador_A;
    this.marcador_B = marcador_B;
  
    if (this.fase === "grupos") {
      if (!this.jugado) {
        this.grupo.partidos.push(this);
        this.jugado = true;
      } else {
        const thisPartido = this;
        this.grupo.partidos.map((partido) => {
          if (partido.id === thisPartido.id) {
            Object.assign(partido, thisPartido);
          }
        });
      }
      this.grupo.puntuar();
      this.grupo.ordenar();
    } else {
      this.jugado = true;
    }
  };

Partido.prototype.jugarllaves = function ( marcador_A, marcador_B, penales_A = null, penales_B = null) {
    this.marcador_A = marcador_A;
    this.marcador_B = marcador_B;
    this.penales_A = penales_A;
    this.penales_B = penales_B;
    if (this.fase === "grupos") {
      if (!this.jugado) {
        this.grupo.partidos.push(this);
        this.jugado = true;
      } else {
        const thisPartido = this;
        this.grupo.partidos.map((partido) => {
          if (partido.id === thisPartido.id) {
            Object.assign(partido, thisPartido);
          }
        });
      }
      this.grupo.puntuar();
      this.grupo.ordenar();
    } else {
      this.jugado = true;
    }
  };

  