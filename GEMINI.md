# Guía Maestra del Proyecto: 3er Aniversario 💜

Esta regla central aplica **SIEMPRE** en cada nueva petición para este repositorio. Cuando recibas una petición en este proyecto, recuerda y aplica obligatoriamente las siguientes directrices (que también están detalladas en las _skills_ locales del agente):

1. **Temática del Proyecto (Prioridad Máxima)**:
   - Es una página romántica para el 3er aniversario de **Darling y Javier**.
   - La fecha de inicio es el **30 de agosto del 2023**.
   - Usa siempre el nombre **"Darling"** (es especial).
   - Mantén la estética basada en tonos morados 💜, animaciones suaves y textos emotivos, mágicos y cariñosos.
   - **Estilo de Fotografías:** Todo el diseño fotográfico debe tener una estética de **fotos Polaroid** (marcos blancos asimétricos con una pequeña sombra), que es su estilo favorito. Las clases CSS (`.polaroid`, `.polaroid-deck`, `.bg-polaroid-msg`, etc.) ya están estandarizadas en `assets/css/styles.css`. Consultar la skill `project-theme` para ver la estructura HTML y las reglas de diseño completas.

2. **Programación Simple y SOLID**:
   - Evita la sobreingeniería. Usa HTML, CSS y JS puro y directo.
   - Aplica el principio de responsabilidad única (SOLID): no mezcles CSS/JS dentro de los archivos HTML, y mantén los componentes visuales separados lógica y estéticamente en archivos correspondientes.
   - Escribe código limpio y fácil de leer.
   - **Responsividad y UX:** Todo el desarrollo debe ser 100% responsive, con un enfoque absoluto en la Experiencia de Usuario (UX) y siempre respetando la temática romántica del proyecto.

3. **Estructura de Carpetas y Rutas Exactas**:
   Debes conocer y usar estrictamente estas rutas para encontrar o guardar archivos:
   - **Estilos:** `assets/css/styles.css`
   - **Lógica JS:** `assets/js/script.js`
   - **Páginas HTML:**
     - `index.html` (Raíz, solo redirige)
     - `pages/bienvenida.html` (Pantalla de inicio y contraseña)
     - `pages/recuerdos.html` (Galerías y tarjetas)
     - `pages/carta.html` (Carta interactiva)
   - **Imágenes (¡Muy Importante!):** Las fotos de los recuerdos se encuentran aquí:
     - `assets/img/comidas_varias/` (Para momentos de comida en general)
     - `assets/img/hamburguesas/` (Para su comida favorita)
   - **Raíz (`/`):** Exclusiva para configuraciones (`GEMINI.md`), `index.html` y documentación. Ningún otro archivo debe ir aquí.

4. **Mantenimiento de la Documentación (¡Obligatorio!)**:
   - Cada vez que se agregue una nueva funcionalidad, se cree una nueva sección, o se modifique la forma en que se muestran las pantallas del proyecto, **DEBES actualizar automáticamente el archivo `descripcion_proyecto.md`**.
   - Este archivo debe ser siempre el reflejo exacto y actualizado de cómo funciona la página y qué secciones contiene.

_Si tienes dudas, revisa las skills dentro de `.agents/skills/` para más detalles sobre cada una de estas reglas._
