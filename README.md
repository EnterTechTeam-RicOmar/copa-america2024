# "COPA AMERICA 2024" - Acuerdo de Equipo

Proyecto Enter Tech School, para esarrollar una aplicación interactiva para la Copa América 2024 que permita a los usuarios participar en una "polla" o pool de predicciones de partidos. La aplicación facilitará a los aficionados registrar sus pronósticos de marcadores, compararlos con los resultados reales y ver su posición en una clasificación de puntaje.

**Nombres de los Integrantes del Equipo:**

- Omar Torbisco
- Ricardo Delgado

## Plan de Cooperación

### Fortalezas y Aprovechamiento

- **Omar Torbisco**:
  - **Fortalezas Clave**: Habilidades en diseño gráfico, programacion en CSS.
  - **Aprovechamiento**: Liderará la parte visual del proyecto y ayudará a organizar tareas y plazos.
  - **Áreas de Desarrollo**: Mejora en habilidades de programación.
- **Ricardo Delgado**:
  - **Fortalezas Clave**: Programación en JavaScript, conocimientos en frameworks front-end.
  - **Aprovechamiento**: Se encargará del desarrollo del frontend del proyecto.
  - **Áreas de Desarrollo**: Gestión de proyectos y liderazgo.

### Plan de Trabajo Cotidiano

- **Distribución del Trabajo**: Ambos integrantes entenderán el panorama general del proyecto. Las tareas diarias se asignarán en base a las fortalezas y áreas de desarrollo de cada miembro.
- **Revisión y Colaboración**: Se establecerán reuniones diarias para revisar el progreso y ajustar las tareas según sea necesario.

## Plan en Caso de Conflicto

### Resolución de Conflictos

- **Proceso**:
  - Discusión abierta y respetuosa durante las reuniones.
  - Si no se resuelve, se escalará al líder del proyecto o se buscará un mediador externo.
- **Control del Proyecto**:
  - Recordar al miembro dominante la importancia de la colaboración.
  - Reasignar tareas si es necesario para asegurar una participación equitativa.
- **Desigualdad en Habilidades**:
  - Fomentar la mentoría y el aprendizaje mutuo.
  - Dividir tareas complejas en partes más manejables.
- **Inadecuada Contribución**:
  - Conversaciones uno a uno para identificar problemas y buscar soluciones.
- **Escalación de Conflictos**:
  - Si el conflicto persiste, involucrar a un instructor para mediar.

## Plan de Comunicación

### Disponibilidad y Plataformas

- **Horas de Comunicación**:
  - Martes a Viernes, de 6 PM a 10 PM.
- **Plataformas**:
  - Slack para comunicación diaria.
  - Zoom para reuniones virtuales.
  - WhatsApp para comunicación directa.
- **Frecuencia de Descansos**:
  - Pausas de 15 minutos cada 2 horas.
- **Plan para Atrasos**:
  - Notificar al equipo de inmediato y reprogramar tareas.
- **Comunicación Fuera de Horario**:
  - Mensajes urgentes a través de Slack o WhatsApp.
  - Llamadas en Zoom solo en casos de emergencia.
- **Inclusión de Opiniones**:
  - Asegurar que ambos miembros tienen tiempo para hablar durante las reuniones.
  - Fomentar un ambiente de respeto y apertura.

## Plan de Trabajo

### Monitoreo y Contribución Equitativa

- **Asignación de Tareas**:
  - Usar Trello para gestionar y asignar tareas.
  - Establecer fechas límite claras para cada tarea.
- **Herramienta de Gestión**:
  - Trello para la gestión de proyectos.
  - GitHub para el control de versiones.
- **Distribución del Trabajo**:
  - Revisar el tablero de Trello diariamente para asegurarse de que ambos estén contribuyendo.
  - Realizar revisiones semanales para ajustar la carga de trabajo si es necesario.

## Procedimiento de Git

### Flujo de Trabajo de Git

- **Componentes en GitHub**:
  - Todo el código fuente, documentación y activos relacionados con el proyecto.
- **Compartir el Repositorio**:
  - Crear un repositorio en GitHub y compartirlo con ambos miembros del equipo.
- **Flujo de Trabajo**:
  - Utilizar ramas para cada funcionalidad nueva.
  - Realizar Pull Requests (PR) para revisiones de código.
- **Revisión de PR**:
  - Ambos miembros deben revisar cada PR.
  - Los merges serán realizados por consenso entre Omar y Ricardo.
  - Hacer merges cada dos días o cuando una funcionalidad esté completa.
  - Comunicarse a través de Slack o WhatsApp cuando sea necesario hacer un merge.

## Enlace a las Diapositivas para la Presentación

[Aplicacion Copa America 2024](https://docs.google.com/presentation/d/1kCI-RtTss_TxJxTXe7G-oHfC7FczV0ExoREVnLithuU/edit?usp=sharing)

## Agenda de Sesión de Práctica

- **Fecha y Hora de la Práctica**:
  - Coordinar con el instructor y programar una reunión para la práctica de la presentación.

# Modelo de Dominio

### Entidades y Relaciones

#### Entidades

1. **Usuario**
   - `id`: entero (autoincremental)
   - `nombre`: string
   - `email`: string
   - `contraseña`: string
   - `puntos`: entero
   - `rol`: string (admin, usuario)

2. **Predicción**
   - `id`: entero (autoincremental)
   - `usuario_id`: entero (referencia a Usuario)
   - `partido_id`: entero (referencia a Partido)
   - `prediccion_local`: entero
   - `prediccion_visitante`: entero
   - `puntos_obtenidos`: entero

3. **Partido**
   - `id`: entero (autoincremental)
   - `equipo_local`: string
   - `equipo_visitante`: string
   - `fecha`: datetime
   - `resultado_local`: entero
   - `resultado_visitante`: entero

4. **Clasificación**
   - `id`: entero (autoincremental)
   - `usuario_id`: entero (referencia a Usuario)
   - `posicion`: entero

#### Relaciones

- Un **Usuario** puede hacer muchas **Predicciones**.
- Una **Predicción** pertenece a un **Usuario** y a un **Partido**.
- Un **Partido** puede tener muchas **Predicciones**.
- Una **Clasificación** está asociada a un **Usuario**.

### Funciones/Métodos y su Interacción con las Entidades

1. **Registro de Usuario**: Crea una nueva entidad `Usuario`.
2. **Inicio de Sesión**: Verifica las credenciales del `Usuario`.
3. **Hacer Predicción**: Crea una nueva entidad `Predicción` asociada a un `Usuario` y un `Partido`.
4. **Actualizar Resultados**: Actualiza los resultados de un `Partido` y calcula los puntos obtenidos para cada `Predicción` asociada.
5. **Generar Clasificación**: Calcula y actualiza la `Clasificación` de los `Usuarios` basado en sus puntos acumulados.

### Diagrama del Modelo de Dominio

```mermaid
classDiagram
    class Usuario {
        int id
        string nombre
        string email
        string contraseña
        int puntos
        string rol
    }
    
    class Predicción {
        int id
        int usuario_id
        int partido_id
        int prediccion_local
        int prediccion_visitante
        int puntos_obtenidos
    }
    
    class Partido {
        int id
        string equipo_local
        string equipo_visitante
        datetime fecha
        int resultado_local
        int resultado_visitante
    }
    
    class Clasificación {
        int id
        int usuario_id
        int posicion
    }
    
    Usuario "1" --> "0..*" Predicción: hace
    Predicción "0..*" --> "1" Partido: pertenece a
    Partido "1" --> "0..*" Predicción: tiene
    Clasificación "1" --> "1" Usuario: pertenece a