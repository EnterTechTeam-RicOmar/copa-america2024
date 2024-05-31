# Requisitos del Software

## Enfoque

El enfoque de este producto es proporcionar una plataforma interactiva para la Copa América 2024 que permita a los aficionados del fútbol participar en un pool de predicciones de partidos. Este proyecto resuelve el problema de la falta de una herramienta centralizada y fácil de usar para registrar, comparar y evaluar predicciones de los partidos de la Copa América. Es importante porque fomenta la participación y el compromiso de los aficionados, ofreciendo una experiencia enriquecedora y competitiva durante el torneo.

## Alcance

**PERTINENTE: Lo que tu producto hará**

1. **Registro y Gestión de Usuarios**: Los usuarios podrán registrarse y crear una cuenta para participar en las predicciones.
2. **Realización de Predicciones**: Los usuarios podrán predecir los resultados de los partidos de la Copa América 2024.
3. **Comparación de Resultados**: La aplicación comparará las predicciones de los usuarios con los resultados reales de los partidos.
4. **Clasificación de Usuarios**: Se mostrará una clasificación que indique la posición de cada usuario basada en sus puntos obtenidos.
5. **Notificaciones y Alertas**: Los usuarios recibirán notificaciones sobre próximos partidos y resultados de sus predicciones.

**NO PERTINENTE: Lo que tu producto no hará**

1. La aplicación no ofrecerá retransmisiones en vivo de los partidos.
2. No se desarrollará una versión de la aplicación para iOS o Android durante el ciclo de desarrollo inicial.

## Producto Mínimo Viable (MVP)

El MVP permitirá a los usuarios registrarse, hacer predicciones sobre los partidos de la Copa América 2024, comparar sus predicciones con los resultados reales y ver su clasificación en relación con otros usuarios.

**Logros Adicionales**

1. Implementación de un sistema de premios para los usuarios mejor clasificados.
2. Funcionalidades sociales, como compartir predicciones y resultados en redes sociales.
3. Estadísticas avanzadas y análisis de predicciones.

## Requisitos funcionales

1. Un usuario puede registrarse y crear una cuenta.
2. Un usuario puede iniciar sesión en la aplicación.
3. Un usuario puede predecir el resultado de un partido.
4. La aplicación comparará las predicciones del usuario con los resultados reales y calculará los puntos obtenidos.
5. Los usuarios podrán ver su clasificación y comparar su rendimiento con otros usuarios.
6. Los usuarios recibirán notificaciones sobre próximos partidos y resultados.

## Flujo de Datos

1. **Registro/Iniciar Sesión**: El usuario se registra o inicia sesión en la aplicación.
2. **Predicción de Partidos**: El usuario selecciona un partido y predice el resultado.
3. **Almacenamiento de Predicciones**: La predicción se guarda en la base de datos.
4. **Obtención de Resultados Reales**: La aplicación obtiene los resultados reales de los partidos mediante una API.
5. **Comparación y Cálculo de Puntos**: La aplicación compara las predicciones del usuario con los resultados reales y calcula los puntos obtenidos.
6. **Visualización de Clasificación**: El usuario puede ver su posición en la clasificación basada en sus puntos.
7. **Notificaciones**: El usuario recibe notificaciones sobre próximos partidos y resultados de predicciones.

## Requisitos no funcionales

1. **Seguridad**: La aplicación implementará medidas de seguridad robustas para proteger los datos de los usuarios. Esto incluirá el cifrado de contraseñas y datos sensibles, así como la implementación de autenticación y autorización seguras. Se utilizarán protocolos HTTPS para asegurar la comunicación entre el cliente y el servidor.

2. **Escalabilidad**: La arquitectura de la aplicación estará diseñada para manejar un alto volumen de usuarios concurrentes, especialmente durante los partidos de la Copa América. Se utilizarán servicios en la nube y balanceo de carga para asegurar que la aplicación pueda escalar horizontalmente y mantener un rendimiento óptimo bajo carga alta.
