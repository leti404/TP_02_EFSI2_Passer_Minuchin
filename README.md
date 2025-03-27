"# TP_02_EFSI2_Passer_Minuchin" 
Cómo diseñaron la interfaz del formulario:

Se buscó que el formulario fuese directo y de uso intuitivo, sin descuidar su atractivo visual:
Estructura: Los espacios para ingresar datos están dispuestos en vertical para facilitar la lectura y el llenado del formulario.
Diseño: Se optó por un fondo con un degradado sutil y bordes redondeados en los campos para un estilo actual.
Tema Oscuro: Se incorporó un botón para que cada usuario pueda elegir entre el modo claro y el oscuro, personalizando así su experiencia.
Adaptabilidad: El diseño es adaptable, es decir, se ajusta a distintos tamaños de pantalla, especialmente en dispositivos móviles.

Qué validaciones implementaron y cómo funcionan: 

Se aplicaron diversas comprobaciones para asegurar que los datos ingresados fuesen correctos y completos:
Nombre y Apellido: Los campos de nombre y apellido requieren un mínimo de 4 letras. Si no, salta un aviso.
Correo Electrónico: El correo debe contener un "@" y finalizar en ".com". Si no es válido, se avisa al usuario con un mensaje.
Contraseña: La contraseña debe tener por lo menos 8 letras y números, y al menos una letra y un número. Si no se cumple, el mensaje de error indica lo que falta.
Confirmación de Contraseña: Se verifica que la contraseña sea idéntica a la confirmación. Si difieren, se muestra un mensaje de error.
Revisión Final del Formulario: Antes de enviarlo, se repasan todas las comprobaciones de nuevo. Si algo falla, no se envía y se le pide al usuario que corrija los errores.

Qué desafíos enfrentaron y cómo los resolvieron: 

Modo Oscuro: Inicialmente, hubo algunos problemas con los colores de los bordes de los campos al activar el modo oscuro. Se solucionó modificando las clases CSS para que se adaptasen al nuevo tema.
Comprobaciones en Tiempo Real: Al querer mostrar los avisos de error al instante, noté que algunos campos no se actualizaban bien. Lo resolví separando las funciones de comprobación para cada campo por separado.

Qué mejoras agregarían si tuvieran más tiempo: 

De tener más tiempo, hubieramos añadido las siguientes mejoras:
Comprobaciones Más Detalladas: Verificar que el correo tenga un dominio válido y mejorar las reglas de la contraseña, solicitando también caracteres especiales.
Mayor Accesibilidad: Incorporar soporte para lectores de pantalla y hacer los mensajes de error más accesibles con atributos como aria-live.
Almacenamiento de Datos: Usar almacenamiento local o sesiones para que los datos no se pierdan si el usuario necesita rectificar algo.
Más Interactividad: Agregar animaciones más suaves para las transiciones entre el modo claro y oscuro, o al interactuar con los campos.