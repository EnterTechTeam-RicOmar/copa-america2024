"use strict";

function App() {
    this.equipos = [];
    this.grupos = [];
    this.partidosGrupos = [];
    this.partidosFechas = [
        ["20-06", "21-06", "25-06", "25-06", "29-06", "29-06"], // Fechas para el primer grupo (Grupo A)
        ["22-06", "22-06", "26-06", "26-06", "30-06", "30-06"], // Fechas para el segundo grupo (Grupo B)
        ["23-06", "23-06", "27-06", "27-06", "01-07", "01-07"], // Fechas para el tercer grupo (Grupo C)
        ["24-06", "24-06", "28-06", "28-06", "02-07", "02-07"]  // Fechas para el cuarto grupo (Grupo D)
    ];
    this.localStorage = [];
}

App.prototype.getLocalStorage = function () {
    const ls = localStorage.getItem("app") || null;
    if (ls) {
        this.localStorage = JSON.parse(ls);
    }
}


App.prototype.instanciarEquipos = function () {
    if (this.localStorage && this.localStorage.equipos) {
        this.localStorage.equipos.forEach(equipo => {
            const nEquipo = new Equipo(equipo.grupo_nombre, equipo.nombre, equipo.posicion, equipo.partidos_jugados, equipo.partidos_ganados, equipo.partidos_empatados, equipo.partidos_perdidos, equipo.goles_favor, equipo.goles_contra, equipo.puntos);
            this.equipos.push(nEquipo);
        });
        return;
    }
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



App.prototype.renderGrupos = function () {
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

App.prototype.instanciarPartidosGrupos = function () {

    if (this.localStorage && this.localStorage.partidosGrupos) {

        this.localStorage.partidosGrupos.forEach(partido => {
            const nEquipoA = this.equipos.find(equipo => equipo.nombre === partido.equipo_A.nombre);
            const nEquipoB = this.equipos.find(equipo => equipo.nombre === partido.equipo_B.nombre);
            const nPartido = new Partido(partido.id, partido.fecha, nEquipoA, nEquipoB, partido.grupo_nombre, partido.marcador_A, partido.marcador_B, false);
            this.partidosGrupos.push(nPartido);
            const grupo = getGrupoByName(nPartido.grupo_nombre);
            grupo.reiniciarPartidos();
            nPartido.jugar(grupo, nPartido.marcador_A, nPartido.marcador_B);
        });
        return;
    }


    let idPartido = 1;

    this.grupos.forEach((grupo, grupoIndex) => {
        const fechas = this.partidosFechas[grupoIndex];
        this.partidosGrupos.push(
            new Partido(
                idPartido,
                fechas[0],
                grupo.equipo1,
                grupo.equipo2,
                grupo.nombre
            )
        );
        this.partidosGrupos.push(
            new Partido(
                idPartido + 1,
                fechas[1],
                grupo.equipo3,
                grupo.equipo4,
                grupo.nombre
            )
        );
        this.partidosGrupos.push(
            new Partido(
                idPartido + 2,
                fechas[2],
                grupo.equipo3,
                grupo.equipo2,
                grupo.nombre
            )
        );
        this.partidosGrupos.push(
            new Partido(
                idPartido + 3,
                fechas[3],
                grupo.equipo4,
                grupo.equipo1,
                grupo.nombre
            )
        );
        this.partidosGrupos.push(
            new Partido(
                idPartido + 4,
                fechas[4],
                grupo.equipo1,
                grupo.equipo3,
                grupo.nombre
            )
        );
        this.partidosGrupos.push(
            new Partido(
                idPartido + 5,
                fechas[5],
                grupo.equipo2,
                grupo.equipo4,
                grupo.nombre
            )
        );
        idPartido = idPartido + 6;
    });
};

App.prototype.renderPartidos = function () {
    const tablaEncuentros = document.getElementById("tablaEncuentros");
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    thead.innerHTML =
        `<caption>Encuentros</caption>
            <tr>
                <th>Fecha</th>
                <th>Fase</th>
                <th>Grupo</th>
                <th>Equipo 1</th>
                <th>Equipo 2</th>
                <th>Marcador 1</th>
                <th>Marcador 2</th>
                <th>Resultado</th>
            </tr>`;

    table.appendChild(thead);

    app.partidosGrupos.forEach((partido, index) => {
        tbody.appendChild(partido.renderTableRow(getGrupoByName));
    });

    table.appendChild(tbody);
    tablaEncuentros.appendChild(table);
}

const app = new App();
app.getLocalStorage();
app.instanciarEquipos();
app.instanciarGrupos();
app.instanciarPartidosGrupos();
app.renderGrupos();
app.renderPartidos();


function getGrupoByName(name) {
    const grupo = app.grupos.find(grupo => grupo.nombre === name);
    return grupo;
}

Partido.prototype.updateLocalStorage = function () {
    const equipo_A = this.equipo_A;
    const equipo_B = this.equipo_B;
    app.equipos.map(equipo => {
        if (equipo.nombre === equipo_A.nombre) {
            Object.assign(equipo, equipo_A);
        }
        if (equipo.nombre === equipo_B.nombre) {
            Object.assign(equipo, equipo_B);
        }
    });
    delete app.localStorage;
    localStorage.setItem('app', JSON.stringify(app));
}


console.log(app.grupos);

