¿Cuáles son los tres lugares donde una app puede guardar datos?

Hay tres opciones principales que vas a encontrar al dirigir a una IA como Lovable, Cursor o Claude Code. Dos viven en el navegador del usuario y una vive en una máquina remota. Esa división es la más importante de entender.

# Session storage: datos que duran solo mientras la pestaña está abierta.

# Local storage: datos que sobreviven al cierre del navegador, pero solo en ese dispositivo.

# Base de datos en un servidor: datos disponibles desde cualquier lugar y compartidos entre usuarios.
Cada uno tiene una lógica distinta y un momento ideal para usarse [2:18].

¿Cuándo conviene usar session storage?

Imagina un formulario de cinco pasos. Estás llenando un trámite largo, te equivocas en el paso dos y le das atrás. Lo ideal es que lo que escribiste siga ahí. Pero si cierras la pestaña a mitad, probablemente no quieres que esos datos queden guardados para siempre.

Para eso existe session storage. Los datos viven en el navegador del usuario y se borran cuando se cierra la pestaña. Es como apuntar algo en una servilleta: te sirve mientras estás sentado, pero cuando te paras, la servilleta se va a la basura [3:05].

¿Qué es session storage? Es un espacio en el navegador donde los datos solo duran lo que dura la visita. Al cerrar la pestaña, desaparecen. Sirve para información temporal como un formulario en progreso.

¿Por qué local storage no funciona en varios dispositivos?

La app de los vasos de agua necesita algo que dure más, algo que sobreviva a apagar el computador y volver al día siguiente. Para eso existe local storage. Los datos viven en el navegador, pero no se borran al cerrar la pestaña. Sobreviven hasta que el usuario los borre o limpie el caché.

Es como tener un cuaderno físico: dura, pero solo lo tienes tú y solo donde lo dejaste. Si guardas tu contraseña en el navegador del computador, esa contraseña no aparece mágicamente en tu celular. Cada navegador tiene su propio local storage y los dispositivos no se hablan entre sí [4:30].

Para muchas aplicaciones personales, eso está bien. Para otras, es un problema serio.

¿Y si necesito que los datos estén en cualquier dispositivo?

Ahí entra el tercer lugar: una base de datos en un servidor. Cuando los datos no pueden vivir en un dispositivo específico, sino que tienen que estar disponibles desde cualquier parte y consistentes para todos los que los consultan, viven del lado del servidor.

¿Qué es la nube? Es el nombre comercial del servidor de alguien más. Google Drive, OneDrive o iCloud son bases de datos en servidores que pertenecen a esas empresas.

¿Puedo combinar los tres tipos de almacenamiento en una sola app?

Sí, y de hecho es lo normal. Vuelve al formulario de cinco pasos. Mientras la persona lo llena, los datos pueden vivir en session storage. Cuando hace clic en enviar, viajan a un servidor para guardarse de verdad.

Usaste dos lugares en el mismo flujo, cada uno en su momento. Las opciones no son excluyentes: una app real combina varias según lo que cada dato necesita y según el momento del flujo en que se use [7:20].

¿Por qué importa esto cuando construyes con IA?

Cuando le pides a Lovable, Cursor o Claude Code que te construya una aplicación, una de las primeras decisiones que esas herramientas toman por ti es dónde guardar los datos. Si no se lo dices, eligen por defecto, y casi siempre eligen local storage, porque es la opción más rápida de implementar.

Eso puede ser justo lo que necesitas, o un problema que descubres semanas después cuando alguien usa la app desde otro dispositivo y sus datos no están. Mira la diferencia:

Prompt vago: guarda los datos del usuario.
Prompt preciso: los datos del usuario tienen que persistir entre sesiones y estar disponibles desde cualquier dispositivo, así que necesito una base de datos en servidor.
El segundo no requiere que sepas programar la base de datos. Requiere que tengas el vocabulario para nombrar la decisión [8:55].