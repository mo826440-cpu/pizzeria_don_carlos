¿Te ha pasado que terminas con archivos llamados documento_final, documento_final_v2 y documento_final_este_sí? Aquí aprendes qué es Git y cómo usarlo para versionar tu proyecto sin caos, con los comandos mínimos que necesitas para empezar hoy.

Git es la herramienta que usan los programadores de Google, Netflix y hasta tu app del banco para guardar, organizar y colaborar en su código. Piensa en él como una máquina del tiempo para tu proyecto: cada vez que avanzas, tomas una foto del estado de tu carpeta y la guardas con una etiqueta que tú escribes.

¿Por qué necesitas una máquina del tiempo en tu código?

Hay dos razones que justifican usar control de versiones desde el primer día, incluso en proyectos pequeños como el sitio de Okini que estamos construyendo.

La primera es que el código se rompe. Vas a hacer un cambio que parecía buena idea y algo va a dejar de funcionar. Sin Git tendrías que recordar qué tocaste y deshacerlo a mano. Con Git, vuelves a la foto anterior y listo.

La segunda razón es la colaboración. Cuando trabajes en equipo o le pidas ayuda a una inteligencia artificial, vas a necesitar mostrar qué cambió y cuándo. Git es el lenguaje común que usa toda la industria para hablar de cambios.

¿Qué es Git en palabras simples? Es un sistema que toma fotos del estado de tu proyecto en distintos momentos. Cada foto tiene un mensaje que tú escribes, y puedes volver a cualquiera de esas fotos cuando quieras.

¿Cómo inicio un proyecto con Git desde la terminal?

Todo empieza abriendo VS Code en la carpeta de tu proyecto y activando la terminal integrada, que te permite hablarle al sistema operativo con comandos en lugar de hacer clics [04:14].

El primer comando que ejecutas es git init, que viene de initialize. Ese comando le dice a la carpeta que de ahora en adelante será un proyecto versionado. No verás nada visible, pero internamente Git crea una carpeta oculta donde guardará todas las fotos que tomes.

bash git init

Si te aparece un error, probablemente no tienes Git instalado. Lo descargas desde el sitio oficial eligiendo tu sistema operativo y listo.

¿Para qué sirve git status?

Después de inicializar, viene el comando que más vas a usar en tu vida con Git: git status. Es como preguntarle a Git qué ve en tu carpeta [05:30].

En la primera ejecución te dirá que estás en una rama llamada main, que no has hecho ningún commit todavía y te listará tus archivos como untracked, que significa sin seguimiento. Los archivos están ahí, pero Git aún no los observa hasta que tú se lo pidas.

¿Cuál es la diferencia entre git add y git commit?

Aquí está uno de los conceptos más importantes para entender Git: el guardado se hace en dos pasos. Primero seleccionas qué archivos van a entrar en la foto, y después tomas la foto.

git add selecciona los archivos que quieres incluir en la próxima foto.
git commit toma la foto y la guarda en tu línea del tiempo.
git add . (con punto) incluye todo lo que hay en la carpeta de un solo golpe.
Es como hacer café: primero lo preparas y después lo sirves. Cuando ejecutas git add, los archivos pasan de aparecer en rojo a verde en git status, lo que indica que están listos para ser fotografiados.

bash git add . git commit -m "Versión inicial del sitio de Okini"

Ese -m significa message, y entre comillas escribes la descripción de la foto. Si después corres git status, verás el mensaje Nothing to commit, working tree clean, que confirma que todo quedó guardado.

¿Qué pasa si modifico un archivo después del primer commit? Git detecta el cambio y te lo muestra en git status, pero no lo incluirá en la próxima foto hasta que ejecutes git add con el nombre del archivo y luego git commit -m.

¿Cómo escribir buenos mensajes de commit?

El mensaje del commit no es un detalle decorativo, es lo que tú o alguien más va a leer dentro de seis meses para entender qué cambió en cada punto del tiempo.

Un mensaje como Agregar dirección de Okini en el footer funciona porque cualquiera entiende inmediatamente qué pasó. En cambio, mensajes como cambios o actualización no comunican nada útil. La regla es la misma que aprendiste con las funciones: un buen nombre describe lo que hace.

¿Cómo veo el historial completo de mi proyecto?

Para revisar todas las fotos que has tomado, usas git log. Este comando te muestra los commits en orden, con el mensaje que escribiste y un código identificador único de letras y números al lado de cada uno [10:39].

Ese código es la dirección de cada foto. Si algún día quieres volver a un punto específico del pasado, ese identificador es la referencia que necesitas.

bash git log

Lo importante es que cada commit es un punto seguro al que puedes volver. Mientras hagas commits con frecuencia y con mensajes claros, tu trabajo siempre va a estar protegido, incluso si experimentas con un color chocolate en el header que termina viéndose horrible.

Git tiene mucho más por explorar: ramas, viajes en el tiempo, deshacer cambios y trabajo colaborativo. Todo eso lo encuentras en el curso completo de Git en Platzi, que te recomiendo tomar después. Por ahora ya tienes lo necesario para el siguiente paso: subir tu repositorio a GitHub y respaldar tu máquina del tiempo en la nube. Cuéntame en los comentarios cuál fue tu primer mensaje de commit.