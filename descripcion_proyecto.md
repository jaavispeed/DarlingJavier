# Proyecto: 3er Aniversario ðŸ’œ

## DescripciÃ³n General

Este proyecto consiste en una pÃ¡gina web temÃ¡tica de amor diseÃ±ada para celebrar el tercer aniversario (3 aÃ±os juntos) de **Darling (Fernanda)** y **Javier**.

## Detalles Clave

- **TemÃ¡tica:** Amor, celebraciÃ³n de aniversario.
- **Fecha de Inicio:** 30 de agosto del 2023.
- **Protagonistas:** Darling y Javier. (Nota: Es crucial usar el sobrenombre "Darling" en lugar de Fernanda en los textos principales, ya que es su trato preferido y especial).
- **Color Principal:** Morado ðŸ’œ. La paleta de colores de la pÃ¡gina, los detalles visuales y elementos como los corazones deben estar enfocados en tonos morados.

## Objetivos y Funcionalidades

- **Pantalla de Bienvenida y ContraseÃ±a (`pages/bienvenida.html`):** Una pantalla inicial centrada en una imagen estilo Polaroid ("tuyyoGatitos.png") como elemento principal (acompaÃ±ada de otras polaroids de fondo en forma de abanico), decorada con estrellas animadas formando constelaciones a la izquierda, y el tÃ­tulo escrito a mano. Muestra un contador de dÃ­as como nota y, al iniciar, pide la fecha de aniversario (30-08-2023) como contraseÃ±a para acceder.
- **GalerÃ­a de Recuerdos (`pages/recuerdos.html`):** Una secciÃ³n principal donde Darling puede navegar por diferentes categorÃ­as de fotos. Contiene 7 Ã¡lbumes principales: "Hamburguesas", "Comidas Varias", "Nosotros", "Viajes", "Fernanda", "Mis Favoritas" y "Nuestras Locuras". Al interactuar con un Ã¡lbum, el usuario es redirigido a una pÃ¡gina individual (ej. `pages/album_hamburguesas.html`) donde se expone la galerÃ­a fotogrÃ¡fica. En el caso del Ã¡lbum "Nosotros", esta pÃ¡gina individual posee un formato especial de lÃ­nea de tiempo interactiva cronolÃ³gica.
- **Carta Interactiva (`pages/carta.html`):** Un espacio exclusivo, accesible tras ver los recuerdos, que muestra directamente una profunda y emotiva carta de aniversario, acompaÃ±ada de un reproductor de audio dedicado para escuchar la carta narrada en voz alta.
- **MÃºsica Global (Continua):** El archivo raÃ­z (`index.html`) actÃºa como un contenedor (iframe) que reproduce la canciÃ³n "Eres Mi Tesoro" de Jesse & Joy. Incluye un pequeÃ±o reproductor flotante en la esquina inferior derecha para pausar/reproducir la mÃºsica sin interrumpir la navegaciÃ³n.
- **Experiencia Emotiva y UX:** Animaciones suaves (como las estrellas flotantes) y transiciones fluidas entre pantallas. El proyecto es 100% responsive con breakpoints especÃ­ficos para tablets (768px), mÃ³viles (480px) y telÃ©fonos extra pequeÃ±os (360px). Cada pÃ¡gina (bienvenida, recuerdos y carta) tiene reglas adaptativas propias: los Ã¡lbumes pasan a columna Ãºnica en mÃ³vil, los modales se ajustan al viewport, el reproductor de mÃºsica no tapa el contenido, y todos los elementos tÃ¡ctiles tienen tamaÃ±os accesibles. La estÃ©tica romÃ¡ntica y cÃ¡lida se mantiene en todas las resoluciones.

---

_Este documento servirÃ¡ como base para la planificaciÃ³n y desarrollo de la pÃ¡gina web._

