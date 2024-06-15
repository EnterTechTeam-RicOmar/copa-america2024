document.addEventListener('DOMContentLoaded', () => {
    renderGrupos();
    renderLlaves();
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
                <th>Posición</th>
                <th>Equipo</th>
                <th>Puntos</th>
                <th>GF</th>
                <th>GC</th>
                <th>Diferencia</th>
            </tr>
        `;
        
        const tbody = document.createElement('tbody');
        const equipos = grupo.ordenar();

        equipos.forEach(equipo => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${equipo.posicion}</td>
                <td>${equipo.nombre}</td>
                <td>${equipo.puntos}</td>
                <td>${equipo.goles_favor}</td>
                <td>${equipo.goles_contra}</td>
                <td>${equipo.diferencia}</td>
            `;
            tbody.appendChild(row);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        tablaGruposDiv.appendChild(table);
    });
}

function renderLlaves() {
    const llavesDiv = document.getElementById('tablaLlaves');

    const cuartos = [
        { partido: cuartos1, label: "Cuartos 1" },
        { partido: cuartos2, label: "Cuartos 2" },
        { partido: cuartos3, label: "Cuartos 3" },
        { partido: cuartos4, label: "Cuartos 4" }
    ];
    const semis = [
        { partido: semis1, label: "Semis 1" },
        { partido: semis2, label: "Semis 2" }
    ];
    const finalPartido = { partido: final, label: "Final" };
    const tercerPuestoPartido = { partido: tercerPuesto, label: "Tercer Puesto" };

    const fases = [
        { label: 'Cuartos de Final', partidos: cuartos },
        { label: 'Semifinales', partidos: semis },
        { label: 'Tercer Puesto', partidos: [tercerPuestoPartido] },
        { label: 'Final', partidos: [finalPartido] }
    ];

    fases.forEach(fase => {
        const section = document.createElement('section');
        section.innerHTML = `<h3>${fase.label}</h3>`;
        
        fase.partidos.forEach(({ partido, label }) => {
            const table = document.createElement('table');
            table.classList.add('tabla-llaves');
            
            const thead = document.createElement('thead');
            thead.innerHTML = `
                <tr>
                    <th>Partido</th>
                    <th>Equipo A</th>
                    <th>Equipo B</th>
                    <th>Resultado</th>
                </tr>
            `;
            
            const tbody = document.createElement('tbody');
            const row = document.createElement('tr');
            const resultado = partido.marcador_A !== null && partido.marcador_B !== null
                ? `${partido.marcador_A} - ${partido.marcador_B}`
                : "Por jugar";

            row.innerHTML = `
                <td>${label}</td>
                <td>${partido.equipo_A.nombre}</td>
                <td>${partido.equipo_B.nombre}</td>
                <td>${resultado}</td>
            `;
            tbody.appendChild(row);

            table.appendChild(thead);
            table.appendChild(tbody);
            section.appendChild(table);
        });

        llavesDiv.appendChild(section);
    });
}