document.addEventListener("DOMContentLoaded", () => {
    const grupos = {
        A: ["Argentina", "Canadá", "Perú", "Chile"],
        B: ["Ecuador", "Venezuela", "México", "Jamaica"],
        C: ["Estados Unidos", "Bolivia", "Uruguay", "Panamá"],
        D: ["Colombia", "Paraguay", "Brasil", "Costa Rica"]
    };

    let partidosGrupos = [
        { fecha: "2024-06-20", fase: "Grupos", grupo: "A", equipo1: "Argentina", equipo2: "Canadá", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-21", fase: "Grupos", grupo: "A", equipo1: "Perú", equipo2: "Chile", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-22", fase: "Grupos", grupo: "B", equipo1: "Ecuador", equipo2: "Venezuela", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-22", fase: "Grupos", grupo: "B", equipo1: "México", equipo2: "Jamaica", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-23", fase: "Grupos", grupo: "C", equipo1: "Estados Unidos", equipo2: "Bolivia", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-23", fase: "Grupos", grupo: "C", equipo1: "Uruguay", equipo2: "Panamá", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-24", fase: "Grupos", grupo: "D", equipo1: "Colombia", equipo2: "Paraguay", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-24", fase: "Grupos", grupo: "D", equipo1: "Brasil", equipo2: "Costa Rica", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-25", fase: "Grupos", grupo: "A", equipo1: "Perú", equipo2: "Canadá", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-25", fase: "Grupos", grupo: "A", equipo1: "Chile", equipo2: "Argentina", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-26", fase: "Grupos", grupo: "B", equipo1: "Ecuador", equipo2: "Jamaica", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-26", fase: "Grupos", grupo: "B", equipo1: "Venezuela", equipo2: "México", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-27", fase: "Grupos", grupo: "C", equipo1: "Panamá", equipo2: "Estados Unidos", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-27", fase: "Grupos", grupo: "C", equipo1: "Uruguay", equipo2: "Bolivia", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-28", fase: "Grupos", grupo: "D", equipo1: "Colombia", equipo2: "Costa Rica", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-28", fase: "Grupos", grupo: "D", equipo1: "Paraguay", equipo2: "Brasil", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-29", fase: "Grupos", grupo: "A", equipo1: "Argentina", equipo2: "Perú", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-29", fase: "Grupos", grupo: "A", equipo1: "Canadá", equipo2: "Chile", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-30", fase: "Grupos", grupo: "B", equipo1: "Jamaica", equipo2: "Venezuela", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-06-30", fase: "Grupos", grupo: "B", equipo1: "México", equipo2: "Ecuador", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-07-01", fase: "Grupos", grupo: "C", equipo1: "Bolivia", equipo2: "Panamá", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-07-01", fase: "Grupos", grupo: "C", equipo1: "Estados Unidos", equipo2: "Uruguay", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-07-02", fase: "Grupos", grupo: "D", equipo1: "Costa Rica", equipo2: "Paraguay", marcador1: "", marcador2: "" , resultado: "" },
        { fecha: "2024-07-02", fase: "Grupos", grupo: "D", equipo1: "Brasil", equipo2: "Colombia", marcador1: "", marcador2: "" , resultado: "" }
    ];

    const cargarGrupos = () => {
        const gruposBody = document.getElementById("grupos-body");
        gruposBody.innerHTML = "";

        for (const grupo in grupos) {
            const fila = document.createElement("tr");
            const celdaGrupo = document.createElement("td");
            celdaGrupo.textContent = `Grupo ${grupo}`;
            fila.appendChild(celdaGrupo);

            const celdaEquipos = document.createElement("td");
            celdaEquipos.textContent = grupos[grupo].join(", ");
            fila.appendChild(celdaEquipos);

            gruposBody.appendChild(fila);
        }
    };

    const cargarPartidosGrupos = () => {
        const partidosBody = document.getElementById("partidos-body");
        partidosBody.innerHTML = "";

        partidosGrupos.forEach(partido => {
            const fila = document.createElement("tr");

            const celdaFecha = document.createElement("td");
            celdaFecha.textContent = partido.fecha;
            fila.appendChild(celdaFecha);

            const celdaFase = document.createElement("td");
            celdaFase.textContent = partido.fase;
            fila.appendChild(celdaFase);

            const celdaGrupo = document.createElement("td");
            celdaGrupo.textContent = partido.grupo;
            fila.appendChild(celdaGrupo);

            const celdaEquipo1 = document.createElement("td");
            celdaEquipo1.textContent = partido.equipo1;
            fila.appendChild(celdaEquipo1);

            const celdaEquipo2 = document.createElement("td");
            celdaEquipo2.textContent = partido.equipo2;
            fila.appendChild(celdaEquipo2);

            const celdaMarcador1 = document.createElement("td");
            const inputMarcador1 = document.createElement("input");
            inputMarcador1.type = "number";
            inputMarcador1.value = partido.marcador1;
            celdaMarcador1.appendChild(inputMarcador1);
            fila.appendChild(celdaMarcador1);

            const celdaMarcador2 = document.createElement("td");
            const inputMarcador2 = document.createElement("input");
            inputMarcador2.type = "number";
            inputMarcador2.value = partido.marcador2;
            celdaMarcador2.appendChild(inputMarcador2);
            fila.appendChild(celdaMarcador2);

            const celdaResultado = document.createElement("td");
            const resultadoTexto = document.createElement("span");
            resultadoTexto.textContent = partido.resultado;
            celdaResultado.appendChild(resultadoTexto);
            fila.appendChild(celdaResultado);

            partidosBody.appendChild(fila);
        });
    };

    const actualizarResultados = () => {
        const partidosBody = document.getElementById("partidos-body");
        const filas = partidosBody.getElementsByTagName("tr");
    
        Array.from(filas).forEach((fila, index) => {
            const inputMarcador1 = fila.cells[5].getElementsByTagName("input")[0];
            const inputMarcador2 = fila.cells[6].getElementsByTagName("input")[0];
            const resultadoTexto = fila.cells[7].getElementsByTagName("span")[0];
    
            const marcador1 = parseInt(inputMarcador1.value, 10);
            const marcador2 = parseInt(inputMarcador2.value, 10);
    
            if (isNaN(marcador1) || isNaN(marcador2)) {
                resultadoTexto.textContent = "Por Definirse";
                partidosGrupos[index].resultado = "Por Definirse";
                return;
            }
    
            partidosGrupos[index].marcador1 = marcador1;
            partidosGrupos[index].marcador2 = marcador2;
    
            if (marcador1 > marcador2) {
                resultadoTexto.textContent = `${partidosGrupos[index].equipo1} gana`;
                partidosGrupos[index].resultado = `${partidosGrupos[index].equipo1} gana`;
            } else if (marcador1 < marcador2) {
                resultadoTexto.textContent = `${partidosGrupos[index].equipo2} gana`;
                partidosGrupos[index].resultado = `${partidosGrupos[index].equipo2} gana`;
            } else {
                resultadoTexto.textContent = "Empate";
                partidosGrupos[index].resultado = "Empate";
            }
        });
    };

    const calcularPosiciones = () => {
        const posiciones = {};
    

        for (const grupo in grupos) {
            posiciones[grupo] = {};
            for (const equipo of grupos[grupo]) {
                posiciones[grupo][equipo] = {
                    jugados: 0,
                    ganados: 0,
                    empatados: 0,
                    perdidos: 0,
                    favor: 0,
                    contra: 0,
                    diferencia: 0,
                    puntos: 0,
                };
            }
        }
    
        // Calcular los puntos y los goles
        partidosGrupos.forEach((partido) => {
            const marcador1 = partido.marcador1;
            const marcador2 = partido.marcador2;
    
            if (marcador1 === "" || marcador2 === "") {
                return;
            }
    
            const equipo1 = posiciones[partido.grupo][partido.equipo1];
            const equipo2 = posiciones[partido.grupo][partido.equipo2];
    
            equipo1.jugados++;
            equipo2.jugados++;
            equipo1.favor += marcador1;
            equipo1.contra += marcador2;
            equipo2.favor += marcador2;
            equipo2.contra += marcador1;
    
            if (marcador1 > marcador2) {
                equipo1.puntos += 3;
                equipo1.ganados++;
                equipo2.perdidos++;
            } else if (marcador1 < marcador2) {
                equipo2.puntos += 3;
                equipo2.ganados++;
                equipo1.perdidos++;
            } else {
                equipo1.puntos += 1;
                equipo2.puntos += 1;
                equipo1.empatados++;
                equipo2.empatados++;
            }
    
            equipo1.diferencia = equipo1.favor - equipo1.contra;
            equipo2.diferencia = equipo2.favor - equipo2.contra;
        });
    
        return posiciones;
    };
    
    const mostrarPosiciones = () => {
        const posiciones = calcularPosiciones();
        const posicionesBody = document.getElementById("posiciones-body");
        posicionesBody.innerHTML = "";
    

        for (const grupo in posiciones) {

            let equiposOrdenados = [];
    

            for (const equipo in posiciones[grupo]) {
                const datosEquipo = posiciones[grupo][equipo];
                equiposOrdenados.push({
                    grupo,
                    equipo,
                    puntos: datosEquipo.puntos,
                    jugados: datosEquipo.jugados,
                    ganados: datosEquipo.ganados,
                    empatados: datosEquipo.empatados,
                    perdidos: datosEquipo.perdidos,
                    favor: datosEquipo.favor,
                    contra: datosEquipo.contra,
                    diferencia: datosEquipo.diferencia,
                });
            }
    

            equiposOrdenados.sort((a, b) => {
                if (b.puntos !== a.puntos) {
                    return b.puntos - a.puntos; // Ordenar por puntos de mayor a menor
                } else {
                    return b.diferencia - a.diferencia; // En caso de empate por puntos, ordenar por diferencia de goles de mayor a menor
                }
            });
    
            
            let posicion = 1;
            equiposOrdenados.forEach(equipo => {
                const tr = document.createElement("tr");
    
                const tdGrupo = document.createElement("td");
                tdGrupo.textContent = equipo.grupo;
                tr.appendChild(tdGrupo);
    
                const tdPosicion = document.createElement("td");
                tdPosicion.textContent = posicion++;
                tr.appendChild(tdPosicion);
    
                const tdEquipo = document.createElement("td");
                tdEquipo.textContent = equipo.equipo;
                tr.appendChild(tdEquipo);
    
                const tdJugados = document.createElement("td");
                tdJugados.textContent = equipo.jugados;
                tr.appendChild(tdJugados);
    
                const tdGanados = document.createElement("td");
                tdGanados.textContent = equipo.ganados;
                tr.appendChild(tdGanados);
    
                const tdEmpatados = document.createElement("td");
                tdEmpatados.textContent = equipo.empatados;
                tr.appendChild(tdEmpatados);
    
                const tdPerdidos = document.createElement("td");
                tdPerdidos.textContent = equipo.perdidos;
                tr.appendChild(tdPerdidos);
    
                const tdFavor = document.createElement("td");
                tdFavor.textContent = equipo.favor;
                tr.appendChild(tdFavor);
    
                const tdContra = document.createElement("td");
                tdContra.textContent = equipo.contra;
                tr.appendChild(tdContra);
    
                const tdDiferencia = document.createElement("td");
                tdDiferencia.textContent = equipo.diferencia;
                tr.appendChild(tdDiferencia);
    
                const tdPuntos = document.createElement("td");
                tdPuntos.textContent = equipo.puntos;
                tr.appendChild(tdPuntos);
    
                posicionesBody.appendChild(tr);
            });
        }
    };


    const cargarPartidosCuartos = () => {

        const posiciones = document.getElementById("posiciones-body");
        if (!posiciones) {
            console.error("No se encontró la tabla de posiciones");
            return;
        }
    

        let GrupoA1 = posiciones.rows[0].cells[2].textContent;
        let GrupoA2 = posiciones.rows[1].cells[2].textContent;
        let GrupoB1 = posiciones.rows[4].cells[2].textContent;
        let GrupoB2 = posiciones.rows[5].cells[2].textContent;
        let GrupoC1 = posiciones.rows[8].cells[2].textContent;
        let GrupoC2 = posiciones.rows[9].cells[2].textContent;
        let GrupoD1 = posiciones.rows[12].cells[2].textContent;
        let GrupoD2 = posiciones.rows[13].cells[2].textContent;
    
        const partidosCuartosBody = document.getElementById("partidos-cuartos");
        if (!partidosCuartosBody) {
            console.error("No se encontró el cuerpo de la tabla de partidos de cuartos");
            return;
        }
    
        partidosCuartosBody.innerHTML = "";
    
        const partidosCuartos = [
            { fecha: "2024-07-01", fase: "Cuartos de Final", grupo: "Cuarto1", equipo1: GrupoA1, equipo2: GrupoB2, marcador1: "", marcador2: "" , resultado: "" },
            { fecha: "2024-07-01", fase: "Cuartos de Final", grupo: "Cuarto2", equipo1: GrupoB1, equipo2: GrupoA2, marcador1: "", marcador2: "" , resultado: "" },
            { fecha: "2024-07-02", fase: "Cuartos de Final", grupo: "Cuarto3", equipo1: GrupoC1, equipo2: GrupoD2, marcador1: "", marcador2: "" , resultado: "" },
            { fecha: "2024-07-02", fase: "Cuartos de Final", grupo: "Cuarto4", equipo1: GrupoD1, equipo2: GrupoC2, marcador1: "", marcador2: "" , resultado: "" }
        ];
    
        partidosCuartos.forEach((partido, index) => {
            const fila = document.createElement("tr");
    
            const celdaFecha = document.createElement("td");
            celdaFecha.textContent = partido.fecha;
            fila.appendChild(celdaFecha);
    
            const celdaFase = document.createElement("td");
            celdaFase.textContent = partido.fase;
            fila.appendChild(celdaFase);

            const celdaGrupo = document.createElement("td");
            celdaGrupo.textContent = partido.grupo;
            fila.appendChild(celdaGrupo);
    
            const celdaEquipo1 = document.createElement("td");
            celdaEquipo1.textContent = partido.equipo1;
            fila.appendChild(celdaEquipo1);
    
            const celdaEquipo2 = document.createElement("td");
            celdaEquipo2.textContent = partido.equipo2;
            fila.appendChild(celdaEquipo2);
    
            const celdaMarcador1 = document.createElement("td");
            const inputMarcador1 = document.createElement("input");
            inputMarcador1.type = "number";
            inputMarcador1.value = partido.marcador1;
            celdaMarcador1.appendChild(inputMarcador1);
            fila.appendChild(celdaMarcador1);
    
            const celdaMarcador2 = document.createElement("td");
            const inputMarcador2 = document.createElement("input");
            inputMarcador2.type = "number";
            inputMarcador2.value = partido.marcador2;
            celdaMarcador2.appendChild(inputMarcador2);
            fila.appendChild(celdaMarcador2);
    
            const celdaResultado = document.createElement("td");
            const resultadoTexto = document.createElement("span");
            resultadoTexto.textContent = partido.resultado;
            celdaResultado.appendChild(resultadoTexto);
            fila.appendChild(celdaResultado);

            const celdaPenales1 = document.createElement("td");
            const inputPenales1 = document.createElement("input");
            inputPenales1.type = "number";
            inputPenales1.value = partido.Penales1;
            celdaPenales1.appendChild(inputPenales1);
            fila.appendChild(celdaPenales1);
    
            const celdaPenales2 = document.createElement("td");
            const inputPenales2 = document.createElement("input");
            inputPenales2.type = "number";
            inputPenales2.value = partido.Penales2;
            celdaPenales2.appendChild(inputPenales2);
            fila.appendChild(celdaPenales2);
    
            const celdaGanador = document.createElement("td");
            const ganadorTexto = document.createElement("span");
            ganadorTexto.textContent = partido.resultado;
            celdaGanador.appendChild(ganadorTexto);
            fila.appendChild(celdaGanador);
    
            partidosCuartosBody.appendChild(fila);
    
        });
    };

    const actualizarCuartos = () => {
        const partidosCuartosBody = document.getElementById("partidos-cuartos");
        const filas = partidosCuartosBody.getElementsByTagName("tr");
    
        Array.from(filas).forEach((fila, index) => {
            const inputMarcador1 = fila.cells[5].getElementsByTagName("input")[0];
            const inputMarcador2 = fila.cells[6].getElementsByTagName("input")[0];
            const resultadoTexto = fila.cells[7].getElementsByTagName("span")[0];
            const inputPenales1 = fila.cells[8].getElementsByTagName("input")[0];
            const inputPenales2 = fila.cells[9].getElementsByTagName("input")[0];
            const ganadorTexto = fila.cells[10].getElementsByTagName("span")[0];
    
            const marcador1 = parseInt(inputMarcador1.value, 10);
            const marcador2 = parseInt(inputMarcador2.value, 10);
            const penales1 = parseInt(inputPenales1.value, 10);
            const penales2 = parseInt(inputPenales2.value, 10);
    
            if (isNaN(marcador1) || isNaN(marcador2)) {
                resultadoTexto.textContent = "Por Definirse";
                ganadorTexto.textContent = "Por Definirse";
                return;
            }
    
            if (marcador1 > marcador2) {
                resultadoTexto.textContent = `${fila.cells[3].textContent} gana`;
                ganadorTexto.textContent = `${fila.cells[3].textContent}`;
            } else if (marcador1 < marcador2) {
                resultadoTexto.textContent = `${fila.cells[4].textContent} gana`;
                ganadorTexto.textContent = `${fila.cells[4].textContent}`;
            } else {
                resultadoTexto.textContent = "Empate";
                if (penales1 > penales2) {
                    ganadorTexto.textContent = `${fila.cells[3].textContent}`;
                } else if (penales1 < penales2) {
                    ganadorTexto.textContent = `${fila.cells[4].textContent}`;
                }
            }
        });
    };

    const cargarPartidosSemi = () => {

        const cuartos = document.getElementById("partidos-cuartos");
        if (!cuartos) {
            console.error("No se encontró la tabla de partidos de cuartos");
            return;
        }
    

        let cuarto1 = cuartos.rows[0].cells[10].textContent;
        let cuarto2 = cuartos.rows[1].cells[10].textContent;
        let cuarto3 = cuartos.rows[2].cells[10].textContent;
        let cuarto4 = cuartos.rows[3].cells[10].textContent;
    
        const partidosSemiBody = document.getElementById("partidos-Semi");
        if (!partidosSemiBody) {
            console.error("No se encontró el cuerpo de la tabla de partidos de semifinales");
            return;
        }
    
        partidosSemiBody.innerHTML = "";
    
        const partidosSemi = [
            { fecha: "2024-07-09", fase: "Semifinal", grupo: "Semi1", equipo1: cuarto1, equipo2: cuarto2, marcador1: "", marcador2: "", penales1: "", penales2: "", resultado: "" },
            { fecha: "2024-07-10", fase: "Semifinal", grupo: "Semi2", equipo1: cuarto3, equipo2: cuarto4, marcador1: "", marcador2: "", penales1: "", penales2: "", resultado: "" }
        ];
    
        partidosSemi.forEach((partido, index) => {
            const fila = document.createElement("tr");
    
            const celdaFecha = document.createElement("td");
            celdaFecha.textContent = partido.fecha;
            fila.appendChild(celdaFecha);
    
            const celdaFase = document.createElement("td");
            celdaFase.textContent = partido.fase;
            fila.appendChild(celdaFase);
    
            const celdaGrupo = document.createElement("td");
            celdaGrupo.textContent = partido.grupo;
            fila.appendChild(celdaGrupo);
    
            const celdaEquipo1 = document.createElement("td");
            celdaEquipo1.textContent = partido.equipo1;
            fila.appendChild(celdaEquipo1);
    
            const celdaEquipo2 = document.createElement("td");
            celdaEquipo2.textContent = partido.equipo2;
            fila.appendChild(celdaEquipo2);
    
            const celdaMarcador1 = document.createElement("td");
            const inputMarcador1 = document.createElement("input");
            inputMarcador1.type = "number";
            inputMarcador1.value = partido.marcador1;
            celdaMarcador1.appendChild(inputMarcador1);
            fila.appendChild(celdaMarcador1);
    
            const celdaMarcador2 = document.createElement("td");
            const inputMarcador2 = document.createElement("input");
            inputMarcador2.type = "number";
            inputMarcador2.value = partido.marcador2;
            celdaMarcador2.appendChild(inputMarcador2);
            fila.appendChild(celdaMarcador2);
            
            const celdaResultado = document.createElement("td");
            const resultadoTexto = document.createElement("span");
            resultadoTexto.textContent = partido.resultado;
            celdaResultado.appendChild(resultadoTexto);
            fila.appendChild(celdaResultado);
    
            const celdaPenales1 = document.createElement("td");
            const inputPenales1 = document.createElement("input");
            inputPenales1.type = "number";
            inputPenales1.value = partido.penales1;
            celdaPenales1.appendChild(inputPenales1);
            fila.appendChild(celdaPenales1);
    
            const celdaPenales2 = document.createElement("td");
            const inputPenales2 = document.createElement("input");
            inputPenales2.type = "number";
            inputPenales2.value = partido.penales2;
            celdaPenales2.appendChild(inputPenales2);
            fila.appendChild(celdaPenales2);
    
            const celdaGanador = document.createElement("td");
            const ganadorTexto = document.createElement("span");
            ganadorTexto.textContent = partido.resultado;
            celdaGanador.appendChild(ganadorTexto);
            fila.appendChild(celdaGanador);
    
            partidosSemiBody.appendChild(fila);
        });
    };
    
    const actualizarSemi = () => {
        const partidosSemiBody = document.getElementById("partidos-Semi");
        const filas = partidosSemiBody.getElementsByTagName("tr");
    
        Array.from(filas).forEach((fila, index) => {
            const inputMarcador1 = fila.cells[5].getElementsByTagName("input")[0];
            const inputMarcador2 = fila.cells[6].getElementsByTagName("input")[0];
            const resultadoTexto = fila.cells[7].getElementsByTagName("span")[0];
            const inputPenales1 = fila.cells[8].getElementsByTagName("input")[0];
            const inputPenales2 = fila.cells[9].getElementsByTagName("input")[0];
            const ganadorTexto = fila.cells[10].getElementsByTagName("span")[0];
    
            const marcador1 = parseInt(inputMarcador1.value, 10);
            const marcador2 = parseInt(inputMarcador2.value, 10);
            const penales1 = parseInt(inputPenales1.value, 10);
            const penales2 = parseInt(inputPenales2.value, 10);
    
            if (isNaN(marcador1) || isNaN(marcador2)) {
                resultadoTexto.textContent = "Por Definirse";
                ganadorTexto.textContent = "Por Definirse";
                return;
            }
    
            if (marcador1 > marcador2) {
                resultadoTexto.textContent = `${fila.cells[3].textContent} gana`;
                ganadorTexto.textContent = `${fila.cells[3].textContent}`;
            } else if (marcador1 < marcador2) {
                resultadoTexto.textContent = `${fila.cells[4].textContent} gana`;
                ganadorTexto.textContent = `${fila.cells[4].textContent}`;
            } else {
                resultadoTexto.textContent = "Empate";
                if (penales1 > penales2) {
                    ganadorTexto.textContent = `${fila.cells[3].textContent}`;
                } else if (penales1 < penales2) {
                    ganadorTexto.textContent = `${fila.cells[4].textContent}`;
                }
            }
        });
    };
    
    const cargarPartidosTercero = () => {

        const semi = document.getElementById("partidos-Semi");
        if (!semi) {
            console.error("No se encontró la tabla de partidos de cuartos");
            return;
        }
    
        let final1 = semi.rows[0].cells[10].textContent === "Por Definirse" ? "Por Definirse" : semi.rows[0].cells[10].textContent;
        let final2 = semi.rows[1].cells[10].textContent === "Por Definirse" ? "Por Definirse" : semi.rows[1].cells[10].textContent;
        
        let perdedor1, perdedor2;
        
        if (final1 === "Por Definirse") {
            perdedor1 = "Por Definirse";
        } else {
            perdedor1 = (semi.rows[0].cells[3].textContent === final1) ? semi.rows[0].cells[4].textContent : semi.rows[0].cells[3].textContent;
        }
        
        if (final2 === "Por Definirse") {
            perdedor2 = "Por Definirse";
        } else {
            perdedor2 = (semi.rows[1].cells[3].textContent === final2) ? semi.rows[1].cells[4].textContent : semi.rows[1].cells[3].textContent;
        }

        let tercero1 = perdedor1;
        let tercero2 = perdedor2;
    
        const partidosTerceroBody = document.getElementById("partidos-tercero");
        if (!partidosTerceroBody) {
            console.error("No se encontró el cuerpo de la tabla de partidos de semifinales");
            return;
        }

        partidosTerceroBody.innerHTML = "";
    
        const partidosTercero = [
            { fecha: "2024-07-13", fase: "Tercero", grupo: "Tercero", equipo1: tercero1, equipo2: tercero2, resultado: "" },
            { fecha: "2024-07-14", fase: "Final", grupo: "Final", equipo1: final1, equipo2: final2, resultado: "" }
        ];
    
        partidosTercero.forEach((partido, index) => {
            const fila = document.createElement("tr");
    
            const celdaFecha = document.createElement("td");
            celdaFecha.textContent = partido.fecha;
            fila.appendChild(celdaFecha);
    
            const celdaFase = document.createElement("td");
            celdaFase.textContent = partido.fase;
            fila.appendChild(celdaFase);
    
            const celdaGrupo = document.createElement("td");
            celdaGrupo.textContent = partido.grupo;
            fila.appendChild(celdaGrupo);
    
            const celdaEquipo1 = document.createElement("td");
            celdaEquipo1.textContent = partido.equipo1;
            fila.appendChild(celdaEquipo1);
    
            const celdaEquipo2 = document.createElement("td");
            celdaEquipo2.textContent = partido.equipo2;
            fila.appendChild(celdaEquipo2);
    
            const celdaMarcador1 = document.createElement("td");
            const inputMarcador1 = document.createElement("input");
            inputMarcador1.type = "number";
            inputMarcador1.value = partido.marcador1;
            celdaMarcador1.appendChild(inputMarcador1);
            fila.appendChild(celdaMarcador1);
    
            const celdaMarcador2 = document.createElement("td");
            const inputMarcador2 = document.createElement("input");
            inputMarcador2.type = "number";
            inputMarcador2.value = partido.marcador2;
            celdaMarcador2.appendChild(inputMarcador2);
            fila.appendChild(celdaMarcador2);
            
            const celdaResultado = document.createElement("td");
            const resultadoTexto = document.createElement("span");
            resultadoTexto.textContent = partido.resultado;
            celdaResultado.appendChild(resultadoTexto);
            fila.appendChild(celdaResultado);
    
            const celdaPenales1 = document.createElement("td");
            const inputPenales1 = document.createElement("input");
            inputPenales1.type = "number";
            inputPenales1.value = partido.penales1;
            celdaPenales1.appendChild(inputPenales1);
            fila.appendChild(celdaPenales1);
    
            const celdaPenales2 = document.createElement("td");
            const inputPenales2 = document.createElement("input");
            inputPenales2.type = "number";
            inputPenales2.value = partido.penales2;
            celdaPenales2.appendChild(inputPenales2);
            fila.appendChild(celdaPenales2);
    
            const celdaGanador = document.createElement("td");
            const ganadorTexto = document.createElement("span");
            ganadorTexto.textContent = partido.resultado;
            celdaGanador.appendChild(ganadorTexto);
            fila.appendChild(celdaGanador);
    
            partidosTerceroBody.appendChild(fila);
        });
    };
    
    const actualizarTercero = () => {
        const partidosTerceroBody = document.getElementById("partidos-tercero");
        const filas = partidosTerceroBody.getElementsByTagName("tr");
    
        Array.from(filas).forEach((fila, index) => {
            const inputMarcador1 = fila.cells[5].getElementsByTagName("input")[0];
            const inputMarcador2 = fila.cells[6].getElementsByTagName("input")[0];
            const resultadoTexto = fila.cells[7].getElementsByTagName("span")[0];
            const inputPenales1 = fila.cells[8].getElementsByTagName("input")[0];
            const inputPenales2 = fila.cells[9].getElementsByTagName("input")[0];
            const ganadorTexto = fila.cells[10].getElementsByTagName("span")[0];
    
            const marcador1 = parseInt(inputMarcador1.value, 10);
            const marcador2 = parseInt(inputMarcador2.value, 10);
            const penales1 = parseInt(inputPenales1.value, 10);
            const penales2 = parseInt(inputPenales2.value, 10);
    
            if (isNaN(marcador1) || isNaN(marcador2)) {
                resultadoTexto.textContent = "Por Definirse";
                ganadorTexto.textContent = "Por Definirse";
                return;
            }
    
            if (marcador1 > marcador2) {
                resultadoTexto.textContent = `${fila.cells[3].textContent} gana`;
                ganadorTexto.textContent = `${fila.cells[3].textContent}`;
            } else if (marcador1 < marcador2) {
                resultadoTexto.textContent = `${fila.cells[4].textContent} gana`;
                ganadorTexto.textContent = `${fila.cells[4].textContent}`;
            } else {
                resultadoTexto.textContent = "Empate";
                if (penales1 > penales2) {
                    ganadorTexto.textContent = `${fila.cells[3].textContent}`;
                } else if (penales1 < penales2) {
                    ganadorTexto.textContent = `${fila.cells[4].textContent}`;
                }
            }
        });
    };

    cargarGrupos();
    cargarPartidosGrupos();

    document.getElementById("encuentros-button").addEventListener("click", actualizarResultados);
    document.getElementById("grupos-button").addEventListener("click", () => {
        actualizarResultados();
        mostrarPosiciones();
    });

    document.getElementById("cuartos-button").addEventListener("click", cargarPartidosCuartos);
    document.getElementById("resultados-cuartosButton").addEventListener("click", actualizarCuartos);

    document.getElementById("semi-button").addEventListener("click", cargarPartidosSemi);
    document.getElementById("resultados-semiButton").addEventListener("click", actualizarSemi);
    
    document.getElementById("tercer-button").addEventListener("click", cargarPartidosTercero);
    document.getElementById("Final-button").addEventListener("click", actualizarTercero);
});