# PROMPTS DEL PROYECTO: "LA LANDING PAGE INTERACTIVA"
## FInca El Sembrador - Práctica de Integración de Componentes

Este documento contiene los prompts estructurados y secuenciados que se utilizaron con la Inteligencia Artificial para el desarrollo modular de la landing page interactiva. Diseñado acorde a la rúbrica de evaluación para demostrar la dirección lógica del proyecto.

---

### PASO 1 (ESTRUCTURA): Generación del HTML y la Maquetación CSS Semántica (Tailwind CSS)

**Slogan / Mood del diseño:** Orgánico, verde campo, rústico pero moderno, alta legibilidad y estructuración en cuadrícula/flexbox fluido.

**Prompt Utilizado:**
```text
Actúa como un Diseñador Web Senior experto en Tailwind CSS y accesibilidad. Necesito maquetar la estructura HTML semántica y las clases de estilos para la landing page de "Finca El Sembrador", un negocio local de agricultura de proximidad (KM 0) que vende cajas de verduras ecológicas de temporada directamente al consumidor.

Requisitos de Diseño e Identidad Visual (Mood):
1. Paleta de colores: Verdes de huerta fresca (emerald, teal), tonos tierra cálidos (amber, orange) y fondos limpios fuera de un gris/blanco esterilizado (usar slate-50).
2. Combinación tipográfica: Títulos principales en una fuente Serif de gran personalidad (como "Playfair Display" de Google Fonts) de estilo rústico-elegante, y cuerpo del texto en Sans-serif (como "Inter") para mantener excelente legibilidad en pantallas tanto móviles como de escritorio.
3. Estructura de Secciones:
   - Header/Navbar: Logotipo orgánico (Sprout) y título "Finca El Sembrador" con un estado de estatus y enlaces de navegación fluidos.
   - Hero Section: Con dos mitades. El lado izquierdo para albergar un contenedor llamativo de color con el título principal ("Cajas de Verduras Ecológicas Directamente a tu Hogar") y datos adaptativos del tamaño de pantalla. El lado derecho albergará una imagen atractiva de verduras de huerta de Unsplash de alta calidad.
   - Sección de Métodos (¿Cómo cultivamos?): Estructurada en una rejilla (grid) de dos columnas con tarjetas explicativas detalladas que incluyan iconos (ShieldCheck, Droplets, Route, Package).
   - Sección de Productos (Cesta de Temporada): Una vista bento o cuadrícula de tarjetas con las hortalizas que incluye la caja de verduras esta semana (tomates cherry, aguacates Hass, lechugas, plátanos, huevos de corral) con una imagen de cabecera y un selector expandible.
   - Sección de Beneficios de KM 0: Un contenedor de fondo oscuro contrastante (emerald-950) que explique claramente de forma secuencial (Puntos 1, 2, 3) los beneficios de la proximidad (nutrientes, impacto CO2, economía rural) junto con una llamada a la acción para reservar.
   - Sección del Formulario de Registro / Formulario de Reserva: Una tarjeta modular dividida en dos partes: Un sidebar informativo con compromisos semanales y una columna con los campos para registrarse. El formulario requiere campos de: Nombre, Correo Electrónico, Dirección de Entrega, Contraseña, Selector visual de tamaño de cesta y un botón prominente para Enviar.
   - Footer: Indicación de copyright, empresa S.L. y créditos de la Práctica Integrada escolar de desarrollo.

Por favor, divide la información lógicamente, utiliza selectores de ID únicos para todos los elementos interactivos o semánticos importantes (ej: id="main-title-container", id="booking-form-section", id="char-counter", id="submit-btn") y prioriza el uso de espaciados orgánicos (padding y margin dinámicos) para que la página respire riqueza visual. No incluyas todavía la interactividad del JavaScript; limítate a retornar la maquetación estática en React y TypeScript con sus correspondientes interfaces de tipado.
```

---

### PASO 2 (INTERACTIVIDAD): Prompts Específicos para la Lógica de Eventos en JavaScript

Dividimos la interactividad de eventos en las dos fases requeridas por el cliente para mantener total control técnico sobre los manipuladores de eventos de la ventana, documento y el propio formulario.

#### Prompt para Fase 1: Comportamiento de la Página (Eventos Globals/Ventana)
```text
Actúa como un Diseñador y Programador Frontend experto en React y TypeScript. Con la maquetación estática ya estructurada para "Finca El Sembrador", vamos a programar los tres comportamientos reactivos globales correspondientes a la FASE 1:

1. Evento de Bienvenida (onload / load):
   - Cuando la página y todas sus imágenes asociadas terminen de cargarse por completo en el navegador, se debe capturar el evento 'load' global (y de apoyo validar si document.readyState === 'complete' para evitar desincronías).
   - Ante este evento, despliega automáticamente un modal interactivo en pantalla (id="welcome-modal") diseñado con un fondo semitransparente con desenfoque de cristal (backdrop-blur-md) saludando cordialmente al visitante. El modal debe mostrar la hora exacta en la que se completó la carga y permitir cerrarse de forma fluida mediante un botón ("welcome-dismiss-btn") utilizando animaciones suaves de entrada y salida con la biblioteca "motion/react".

2. Evento del Detector de Pantallas (resize):
   - Registra un event listener para el evento 'resize' de la ventana (window).
   - Necesitamos que cada vez que el usuario redimensione activamente el tamaño de su pantalla (ya sea achicándola, agrandándola o rotando el móvil), el contenedor del título principal (id="main-title-container") cambie de color de fondo alternativamente para indicar que la plantilla es totalmente adaptativa y responsiva.
   - Mantén un estado para capturar en tiempo real las dimensiones del viewport (width y height en píxeles) y colócalas dentro de un panel informativo vistoso dentro del banner para que el usuario o el evaluador observe cómo cambia el valor numérico en vivo con cada píxel modificado. Haz que las transiciones de fondo de color de Tailwind duren un intervalo de tiempo suave con 'transition-all duration-500'.

3. Evento del Chivato de Lectura (scroll):
   - Escucha los eventos de 'scroll' del ratón/pantalla en window.
   - A medida que el usuario se desplace hacia abajo para leer las secciones informativas de la finca y se aproxime al formulario, detecta cuando la distancia recorrida (window.scrollY) supere los 300px.
   - En ese instante exacto, haz aparecer de forma visible un botón flotante en la esquina inferior derecha que diga "Volver arriba" junto a una flecha animada (id="btn-scroll-top").
   - Al hacer clic sobre este botón, debe desplazar la ventana suavemente de vuelta hacia el tope del documento (scrollY = 0) empleando un comportamiento de scroll suave ('behavior: smooth').

Asegura que todos los controladores de eventos (event listeners) queden correctamente registrados al montarse el componente y se destruyan o limpien (clean-up) en la fase de desmontaje para evitar pérdidas de rendimiento de memoria (memory leaks).
```

#### Prompt para Fase 2: Comportamiento del Formulario (Eventos de Foco, Teclado, Ratón y Formulario)
```text
Actúa como un Desarrollador especializado en el tratamiento de eventos de interacciones de usuario en React. Programaremos los 4 comportamientos interactivos correspondientes a la FASE 2 dentro del componente del formulario de reserva (id="booking-form-section"):

4. Guía Visual de Enfoque (focus / blur):
   - Para evitar que el usuario se pierda al escribir en el formulario, asocia escuchas de enfoque ('onFocus' y 'onBlur') a cada una de las cajas de texto (Nombre, Correo Electrónico, Dirección, Contraseña).
   - Cada vez que el usuario haga clic o pulse tabulado dentro de uno de los inputs, la caja de texto activa debe cambiar sus bordes a un color super llamativo (como un naranja cálido 'border-amber-500' y un resplandor 'ring-4 ring-amber-100') y escalar ligeramente. Al retirarse de la caja o pasar a otra alternativa ('blur'), debe volver inmediatamente a su diseño suave tradicional de color gris neutro, manteniendo una estricta transición visual elegante.

5. Contador en Vivo de Caracteres en Contraseña (keyup / input / change):
   - Debajo del campo de texto tipo contraseña (id="input-password"), coloca un badge contador de caracteres en tiempo real (id="char-counter").
   - Asocia eventos de teclado 'onKeyUp' y de entrada 'onInput' para capturar fielmente cada pulsación del usuario.
   - Actualiza de forma instantánea el número exacto de caracteres que el usuario lleva escritos. Si no hay caracteres, muéstralo neutral; si hay menos de 5 caracteres, resáltalo en rojo descriptivo (avisando de contraseña débil); si supera los 5 caracteres, muéstralo en color verde de seguridad de forma visual y reactiva.

6. Botón Dinámico con Eventos del Ratón (mouseover / mouseout):
   - Vincula los manipuladores de ratón de bajo nivel 'onMouseOver' y 'onMouseOut' en el botón principal de envío "RESERVAR MI CAJA AHORA" (id="submit-btn").
   - Cuando el cursor del ratón pase por encima del botón ('mouseover'), cambia dinámicamente su combinación de color de fondo a un llamativo tono ámbar brillante, escalando sutilmente su relación de aspecto y rotando levemente el icono de brote orgánico para darle "vida" y micro-interactividad táctil. Al retirar el ratón del botón ('mouseout'), este debe restaurarse a su aspecto color verde bosque inicial con una amortiguación de transición suave.

7. Control Final de Validación de Formulario (submit con preventDefault):
   - Escucha el evento de envío 'onSubmit' global de la etiqueta form.
   - En el manejador del envío, implementa prioritariamente e.preventDefault() para bloquear el comportamiento nativo del navegador, impidiendo absolutamente que la página se autorecargue o intente enviar parámetros por URL vacías.
   - Valida si el campo de texto "Nombre" (id="input-name") está vacío.
   - SI ESTÁ VACÍO: Cancela el envío y genera una alerta visual en rojo de error en el cuerpo del formulario instando al usuario a proveer su identidad para poder personalizar la reserva de la caja de hortalizas.
   - SI ESTÁ RELLENADO CORRECTAMENTE: Despliega un modal interactivo superpuesto con una alegre felicitación (id="success-message") exclamando "¡Registro completado!" con los datos del usuario. Adicionalmente, ejecute la limpieza absoluta de los estados, borrando todo lo escrito en todas las cajas de texto (Nombre, Email, Dirección, Contraseña) y restaurando a cero el contador en vivo de caracteres de contraseña.

El código resultante debe ser sumamente estructurado, tipado con TypeScript nativo y libre de re-renderizados innecesarios o bucles infinitos.
```

---

### PASO 3 (RESULTADO): Archivos e Integración Exitosa

Todos los archivos generados fueron compilados y validados de manera integrada en la plataforma:
- **`src/types.ts`**: Define la capa de interfaces estrictas para productos de la huerta, características ecológicas y de tipado general.
- **`src/data.ts`**: Contiene la base de datos de cultivo local, beneficios de proximidad y los 7 alimentos de temporada estrellas del catálogo.
- **`src/components/WelcomeModal.tsx`**: Orquesta el evento global de carga y despliega la bienvenida de la huorga orgánica.
- **`src/components/ProductCard.tsx`**: Estructura la visualización de vegetales con paneles expandibles con transiciones para consultar vitaminas de proximidad.
- **`src/components/FarmFeature.tsx`**: Detalla los métodos agrícolas sostenibles de la Finca.
- **`src/components/RegistrationForm.tsx`**: Sostiene todo el motor del formulario, las guías visuales de enfoque, el contador en vivo, la hoverabilidad interactiva por JS y las validaciones de submit.
- **`src/App.tsx`**: Enlaza armoniosamente el flujo completo de la landing page, capturando y renderizando las propiedades y estado de los eventos en tiempo real.
