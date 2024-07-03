"use strict";

function Equipo(grupo_nombre, nombre, posicion = 1, partidos_jugados = 0, partidos_ganados = 0, partidos_empatados = 0, partidos_perdidos = 0, goles_favor = 0, goles_contra = 0, puntos = 0) {
  this.grupo_nombre = grupo_nombre;
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

function Partido(id, fecha, equipo_A, equipo_B, grupo_nombre = null, marcador_A = null, marcador_B = null, jugado = false) {
  this.id = id;
  this.fecha = fecha;
  this.equipo_A = equipo_A;
  this.equipo_B = equipo_B;
  this.grupo_nombre = grupo_nombre;
  this.marcador_A = marcador_A;
  this.marcador_B = marcador_B;
  this.jugado = jugado;
}

Partido.prototype.renderTableRow = function (getGrupoByName) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
                <td>${this.fecha}</td>
                <td>Grupos</td>
                <td>${this.equipo_A.grupo_nombre}</td>
                <td>${this.equipo_A.nombre}</td>
                <td>${this.equipo_B.nombre}</td>
                <td><input type="number" min="0" role="A" value="${this.marcador_A !== null ? this.marcador_A : ''}"/></td>
                <td><input type="number" min="0" role="B" value="${this.marcador_B !== null ? this.marcador_B : ''}"/></td>
                <td>${this.jugado ? (this.ganador() ? this.ganador().nombre : 'Empate') : 'Por definirse'}</td>
            `;
  const inputA = tr.querySelector("input[role=A]");
  const inputB = tr.querySelector("input[role=B]");
  
  const grupo = getGrupoByName(this.grupo_nombre);
  console.log(grupo);
  
  const thisPartido = this;
  inputA.addEventListener("change", function (e) {
    let marcador_A = this.value || 0;
    let marcador_B = inputB.value || 0;

    marcador_A = Number.parseInt(marcador_A);
    marcador_B = Number.parseInt(marcador_B);

    thisPartido.jugar(grupo, marcador_A, marcador_B);
    thisPartido.updateLocalStorage(thisPartido);
  });

  inputB.addEventListener("change", function (e) {
    let marcador_A = inputA.value || 0;
    let marcador_B = this.value || 0;

    marcador_A = Number.parseInt(marcador_A);
    marcador_B = Number.parseInt(marcador_B);

    thisPartido.jugar(grupo, marcador_A, marcador_B);
    thisPartido.updateLocalStorage(thisPartido);
  });

  return tr;
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

function Grupo(nombre, equipo1, equipo2, equipo3, equipo4, partidos = []) {
  this.nombre = nombre;
  this.equipo1 = equipo1;
  this.equipo2 = equipo2;
  this.equipo3 = equipo3;
  this.equipo4 = equipo4;
  this.partidos = partidos;
}

Grupo.prototype.puntuar = function () {
  this.equipo1.reiniciar();
  this.equipo2.reiniciar();
  this.equipo3.reiniciar();
  this.equipo4.reiniciar();

  this.partidos.forEach((partido) => {
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

Partido.prototype.jugar = function (grupo, marcador_A, marcador_B) {
  
  this.marcador_A = marcador_A;
  this.marcador_B = marcador_B;

  if (!this.jugado) {
    grupo.partidos.push(this);
  } else {
    const thisPartido = this;
    grupo.partidos.map((partido) => {
      if (partido.id === thisPartido.id) {
        Object.assign(partido, thisPartido);
      }
    });
  }
  grupo.puntuar();
  grupo.ordenar();
  this.jugado = true;
};

Grupo.prototype.reiniciarPartidos = function () {
  this.partidos = [];
  return this;
}
