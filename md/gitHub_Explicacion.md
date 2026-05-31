Resumen
Imagina que mañana tu computador deja de funcionar. Todo el trabajo de Okini, los commits, el HTML, el CSS y el JavaScript desaparecen contigo. Aquí entra GitHub, el servicio que lleva tu repositorio Git a la nube y te permite respaldar, trabajar desde cualquier lugar y colaborar con otras personas en el mismo proyecto.

Cuál es la diferencia entre Git y GitHub

Git y GitHub suelen confundirse, pero cumplen funciones distintas que se complementan. Git es el sistema de control de versiones que vive en tu máquina; GitHub es el servicio que aloja una copia de ese repositorio en un servidor remoto al que puedes acceder desde cualquier parte.

Una analogía rápida: es como tener un documento en tu computador y subirlo a Google Drive. El archivo es el mismo, lo que cambia es dónde vive y quién puede llegar a él.

¿Qué es GitHub? Es Git en la nube. Aloja tu repositorio en un servidor remoto para que tengas respaldo, accedas desde cualquier dispositivo y colabores con otras personas usando una URL.

Cómo creo un repositorio nuevo en GitHub

Lo primero es tener una cuenta en github.com. Una vez dentro, busca el botón Nuevo para crear un repositorio.

En la configuración inicial sigue estos pasos:

Ponle un nombre al repositorio, en este caso Okini.
Déjalo en modo público.
No marques la opción para crear un README.
No agregues un .gitignore todavía.
¿La razón de crearlo vacío? Si tu repositorio local ya tiene commits y GitHub crea archivos por su lado, terminas con dos historias paralelas que después hay que reconciliar. Un dolor de cabeza innecesario en esta etapa.

Cómo conecto mi repositorio local con el remoto

Después de crear el repositorio vacío, GitHub te muestra una pantalla con varias opciones. La que necesitas es la sección Push an existing repository from the command line, que trae los comandos exactos para conectar tu proyecto local.

Qué hace el comando git remote add origin

Abre la terminal en VS Code y pega el primer comando:

bash git remote add origin URL_DEL_REPOSITORIO

Este comando le dice a tu Git local que ese repositorio remoto existe y se va a llamar Origin para ti. Origin es solo un apodo, una convención que se usa en todo el mundo para referirse al repositorio remoto principal.

Qué significa git push -u origin main

El segundo comando que necesitas es:

bash git push -u origin main

Push significa empujar. Le estás diciendo a Git: agarra todos los commits que tengo localmente y mándalos al remoto llamado origin, a la rama main.

Al ejecutarlo, VS Code te va a pedir autenticarte con GitHub. Solo das clic en autorizar y continuar. Esto debería pasarte una sola vez en el computador donde estás trabajando, aunque si cerraste sesión, puede repetirse.

¿Qué es origin en Git? Es el nombre estándar que se le da al repositorio remoto principal. No es una palabra mágica, es una convención que casi todo el mundo respeta para mantener los proyectos consistentes.

Por qué tener tu código en GitHub cambia tu carrera

Cuando recargas la página del repositorio en el navegador, ya aparecen tus archivos HTML, CSS, JavaScript y todo lo que llevas construido. En la pestaña de commits encuentras el historial completo, ahora visible desde cualquier parte del mundo donde alguien tenga el enlace.

Eso desbloquea tres cosas concretas:

Respaldo: si tu computador se daña, clonas el repositorio en otro y sigues como si nada.
Ubicuidad: trabajas desde cualquier dispositivo con Git, conexión a internet y un editor de código.
Presencia profesional: GitHub es donde vive el código del mundo, donde colaboran los equipos, donde se publican los proyectos open source y donde los reclutadores miran lo que has hecho.
Cómo se conecta GitHub con la inteligencia artificial

Hay un beneficio extra que vale la pena mencionar. Herramientas como Claude, Cursor o Lovable pueden analizar repositorios completos de GitHub. Cuando les pasas la URL de tu repositorio, obtienen un contexto rico: la estructura del proyecto, los commits, los cambios recientes.

Es muy distinto a pegarle un fragmento aislado de código y esperar que adivine cómo encaja con el resto. Entre más contexto, mejor el resultado.

Tu código de Okini ya vive en un servidor con una URL pública, pero todavía no es un sitio web que cualquiera pueda visitar. Para eso falta un último paso: tomar ese repositorio y convertirlo en un sitio publicado en internet. ¿Ya creaste tu cuenta de GitHub? Cuéntame en los comentarios cómo te fue con tu primer push.