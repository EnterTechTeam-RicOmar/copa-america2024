"use strict";

function App() {
  this.equipos = [];
  this.grupos = [];
  this.partidosGrupos = [];
  this.partidosCuartos = [];
}

App.prototype.instanciarEquipos = function () {
  this.equipos = [
    new Equipo("A", "Argentina"),
    new Equipo("A", "Canada"),
    new Equipo("A", "Perú"),
    new Equipo("A", "Chile"),
    new Equipo("B", "Ecuador"),
    new Equipo("B", "Jamaica"),
    new Equipo("B", "Mexico"),
    new Equipo("B", "Venezuela"),
    new Equipo("C", "Bolivia"),
    new Equipo("C", "Estados Unidos"),
    new Equipo("C", "Panama"),
    new Equipo("C", "Uruguay"),
    new Equipo("D", "Brasil"),
    new Equipo("D", "Colombia"),
    new Equipo("D", "Costa Rica"),
    new Equipo("D", "Paraguay"),
  ];
};

App.prototype.instanciarGrupos = function () {
  this.grupos = [
    new Grupo(
      "A",
      this.equipos[0],
      this.equipos[1],
      this.equipos[2],
      this.equipos[3]
    ),
    new Grupo(
      "B",
      this.equipos[4],
      this.equipos[5],
      this.equipos[6],
      this.equipos[7]
    ),
    new Grupo(
      "C",
      this.equipos[8],
      this.equipos[9],
      this.equipos[10],
      this.equipos[11]
    ),
    new Grupo(
      "D",
      this.equipos[12],
      this.equipos[13],
      this.equipos[14],
      this.equipos[15]
    ),
  ];
};

App.prototype.instanciarPartidosGrupos = function () {
    let idPartido = 1;
    const thisApp = this;
    const fechasPorGrupo = [
        ["20-06", "21-06", "25-06", "25-06", "29-06", "29-06"], // Fechas para el primer grupo (Grupo A)
        ["22-06", "22-06", "26-06", "26-06", "30-06", "30-06"], // Fechas para el segundo grupo (Grupo B)
        ["23-06", "23-06", "27-06", "27-06", "01-07", "01-07"], // Fechas para el tercer grupo (Grupo C)
        ["24-06", "24-06", "28-06", "28-06", "02-07", "02-07"]  // Fechas para el cuarto grupo (Grupo D)
    ];

    this.grupos.forEach((grupo, grupoIndex) => {
        const fechas = fechasPorGrupo[grupoIndex];
        thisApp.partidosGrupos.push(
            new Partido(
                idPartido,
                fechas[0],
                "grupos",
                grupo.equipo1,
                grupo.equipo2,
                grupo
            )
        );
        thisApp.partidosGrupos.push(
            new Partido(
                idPartido + 1,
                fechas[1],
                "grupos",
                grupo.equipo3,
                grupo.equipo4,
                grupo
            )
        );
        thisApp.partidosGrupos.push(
            new Partido(
                idPartido + 2,
                fechas[2],
                "grupos",
                grupo.equipo3,
                grupo.equipo2,
                grupo
            )
        );
        thisApp.partidosGrupos.push(
            new Partido(
                idPartido + 3,
                fechas[3],
                "grupos",
                grupo.equipo4,
                grupo.equipo1,
                grupo
            )
        );
        thisApp.partidosGrupos.push(
            new Partido(
                idPartido + 4,
                fechas[4],
                "grupos",
                grupo.equipo1,
                grupo.equipo3,
                grupo
            )
        );
        thisApp.partidosGrupos.push(
            new Partido(
                idPartido + 5,
                fechas[5],
                "grupos",
                grupo.equipo2,
                grupo.equipo4,
                grupo
            )
        );
        idPartido = idPartido + 6; // Incremento de 6 en 6 para asignar IDs únicos a cada grupo de partidos
    });
};

App.prototype.instanciarPartidosCuartos = function () {
    let idPartido = 1;
    const thisApp = this;

    // Actualizar las posiciones de los equipos en cada grupo
    this.grupos.forEach(grupo => {
        const equiposOrdenados = grupo.ordenar();
        grupo.equipo1 = equiposOrdenados[0];
        grupo.equipo2 = equiposOrdenados[1];
        grupo.equipo3 = equiposOrdenados[2];
        grupo.equipo4 = equiposOrdenados[3];
      });
    

    // Obtener los dos primeros equipos de cada grupo ordenados por posición
    const equiposCuartos = [];
    this.grupos.forEach((grupo) => {
        const equiposOrdenados = grupo.ordenar();
        equiposCuartos.push(equiposOrdenados[0]); // Primer lugar
        equiposCuartos.push(equiposOrdenados[1]); // Segundo lugar
    });

    // Definir los enfrentamientos de cuartos de final según el orden especificado
    const enfrentamientosCuartos = [
        [equiposCuartos[0], equiposCuartos[3]], // Grupo A 1° vs Grupo B 2°
        [equiposCuartos[2], equiposCuartos[1]], // Grupo B 1° vs Grupo A 2°
        [equiposCuartos[4], equiposCuartos[7]], // Grupo C 1° vs Grupo D 2°
        [equiposCuartos[6], equiposCuartos[5]]  // Grupo D 1° vs Grupo C 2°
    ];

    // Definir las fechas para los partidos de cuartos de final
    const fechasCuartos = ["05-07", "06-07", "07-07", "08-07"];

    // Crear los partidos de cuartos de final
    enfrentamientosCuartos.forEach((enfrentamiento, index) => {
        const equipo1 = enfrentamiento[0];
        const equipo2 = enfrentamiento[1];
        thisApp.partidosCuartos.push(
            new Partido(
                idPartido,
                fechasCuartos[index],
                "cuartos",
                equipo1,
                equipo2
            )
        );
        idPartido++;
    });
};

const app = new App();
app.instanciarEquipos();
app.instanciarGrupos();
app.instanciarPartidosGrupos();
app.instanciarPartidosCuartos();

function mostrarGrupos() {
    const tablaInfo = document.getElementById("tablaInfo");
    let gruposHTML = `
      <table>
        <tr>
          <th>Grupo</th>
          <th>Equipos</th>
        </tr>
    `;
  
    app.grupos.forEach((grupo) => {
      gruposHTML += `
        <tr>
          <td>Grupo ${grupo.nombre}</td>
          <td>${grupo.equipo1.nombre}, ${grupo.equipo2.nombre}, ${grupo.equipo3.nombre}, ${grupo.equipo4.nombre}</td>
        </tr>
      `;
    });
  
    gruposHTML += `</table>`;
    tablaInfo.innerHTML = gruposHTML;
  }
  
  function mostrarEncuentros() {
    const tablaEncuentros = document.getElementById("tablaEncuentros");
    let encuentrosHTML = `
      <table>
        <caption>Encuentros</caption>
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
  
    app.partidosGrupos.forEach((partido, index) => {
      encuentrosHTML += `
        <tr>
          <td>${partido.fecha}</td>
          <td>${partido.fase}</td>
          <td>${partido.equipo_A.grupo}</td>
          <td>${partido.equipo_A.nombre}</td>
          <td>${partido.equipo_B.nombre}</td>
          <td><input type="number" min="0" id="marcador_A_${index}" onchange="actualizarResultado(${index})" value="${partido.marcador_A !== null ? partido.marcador_A : ''}"/></td>
          <td><input type="number" min="0" id="marcador_B_${index}" onchange="actualizarResultado(${index})" value="${partido.marcador_B !== null ? partido.marcador_B : ''}"/></td>
          <td id="resultado_${index}">${partido.jugado ? (partido.ganador() ? partido.ganador().nombre  : 'Empate') : 'Por definirse'}</td>
        </tr>
      `;
    });
  
    encuentrosHTML += `</table>`;
    tablaEncuentros.innerHTML = encuentrosHTML;
  }
  
  function mostrarPosiciones() {
    const tablaPosiciones = document.getElementById("tablaPosiciones");
    let posicionesHTML = '';
  
    app.grupos.forEach((grupo) => {
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
  
      equiposOrdenados.forEach((equipo) => {
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
  
  function actualizarResultado(index) {
    const marcador_A = parseInt(document.getElementById(`marcador_A_${index}`).value, 10);
    const marcador_B = parseInt(document.getElementById(`marcador_B_${index}`).value, 10);
  
    const partido = app.partidosGrupos[index];
    partido.jugar(marcador_A, marcador_B);
  
    mostrarEncuentros();
    mostrarPosiciones();
  }

  function mostrarLlaves() {
    const tablaLlaves = document.getElementById("tablaLlaves");
    let llavesHTML = `
      <table>
        <caption>Partidos de Cuartos de Final</caption>
        <tr>
          <th>Fecha</th>
          <th>Fase</th>
          <th>Equipo 1</th>
          <th>Equipo 2</th>
          <th>Marcador 1</th>
          <th>Marcador 2</th>
          <th>Penales 1</th>
            <th>Penales 2</th>
          <th>Resultado</th>
        </tr>
    `;
  
    app.partidosCuartos.forEach((partido, index) => {
      llavesHTML += `
        <tr>
          <td>${partido.fecha}</td>
          <td>${partido.fase}</td>
          <td>${partido.equipo_A.nombre}</td>
          <td>${partido.equipo_B.nombre}</td>
          <td><input type="number" min="0" id="marcador_A_${index}" onchange="actualizarResultadoCuartos(${index})" value="${partido.marcador_A !== null ? partido.marcador_A : ''}"/></td>
          <td><input type="number" min="0" id="marcador_B_${index}" onchange="actualizarResultadoCuartos(${index})" value="${partido.marcador_B !== null ? partido.marcador_B : ''}"/></td>
            <td>${partido.fase === 'cuartos' ? `<input type="number" min="0" id="penales_A_${index}" onchange="actualizarResultado(${index})" value="${partido.penales_A !== null ? partido.penales_A : ''}"/>` : ''}</td>
            <td>${partido.fase === 'cuartos' ? `<input type="number" min="0" id="penales_B_${index}" onchange="actualizarResultado(${index})" value="${partido.penales_B !== null ? partido.penales_B : ''}"/>` : ''}</td>
          <td id="resultado_cuartos_${index}">${partido.jugado ? (partido.ganador() ? partido.ganador().nombre : 'Empate') : 'No jugado'}</td>
        </tr>
      `;
    });
  
    llavesHTML += `</table>`;
    tablaLlaves.innerHTML = llavesHTML;
  }

  function actualizarResultadoCuartos(index) {
    const marcador_A = parseInt(document.getElementById(`marcador_A_${index}`).value, 10);
    const marcador_B = parseInt(document.getElementById(`marcador_B_${index}`).value, 10);
  
    const partido = app.partidosCuartos[index];
    partido.jugar(marcador_A, marcador_B);
  
    mostrarLlaves();
  }
  
  // Renderizar las tablas al cargar la página
  document.addEventListener("DOMContentLoaded", () => {
    mostrarGrupos();
    mostrarEncuentros();
    mostrarPosiciones();
    mostrarLlaves();
  });