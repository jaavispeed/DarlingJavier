# Proyecto: 3er Aniversario 💜

## Descripción General

Este proyecto consiste en una página web temática de amor diseñada para celebrar el tercer aniversario (3 años juntos) de **Darling (Fernanda)** y **Javier**.

## Detalles Clave

- **Temática:** Amor, celebración de aniversario.
- **Fecha de Inicio:** 30 de agosto del 2023.
- **Protagonistas:** Darling y Javier. (Nota: Es crucial usar el sobrenombre "Darling" en lugar de Fernanda en los textos principales, ya que es su trato preferido y especial).
- **Color Principal:** Morado 💜. La paleta de colores de la página, los detalles visuales y elementos como los corazones deben estar enfocados en tonos morados.

## Objetivos y Funcionalidades

- **Pantalla de Bienvenida y Contraseña (`pages/bienvenida.html`):** Una pantalla inicial centrada en una imagen estilo Polaroid ("tuyyoGatitos.png") como elemento principal (acompañada de otras polaroids de fondo en forma de abanico), decorada con estrellas animadas formando constelaciones a la izquierda, y el título escrito a mano. Muestra un contador de días como nota y, al iniciar, pide la fecha de aniversario (30-08-2023) como contraseña para acceder.
- **Galería de Recuerdos (`pages/recuerdos.html`):** Una sección principal donde Darling puede navegar por diferentes categorías de fotos. Contiene 7 álbumes principales: "Hamburguesas", "Comidas Varias", "Nosotros", "Viajes", "Fernanda", "Mis Favoritas" y "Nuestras Locuras". Al interactuar con un álbum, el usuario es redirigido a una página individual (ej. `pages/album_hamburguesas.html`) donde se expone la galería fotográfica. En el caso del álbum "Nosotros", esta página individual posee un formato especial de línea de tiempo interactiva cronológica.
- **Carta Interactiva (`pages/carta.html`):** Un espacio exclusivo, accesible tras ver los recuerdos, que muestra directamente una profunda y emotiva carta de aniversario, acompañada de un reproductor de audio dedicado para escuchar la carta narrada en voz alta.
- **Música Global (Continua):** El archivo raíz (`index.html`) actúa como un contenedor (iframe) que reproduce la canción "Eres Mi Tesoro" de Jesse & Joy. Incluye un pequeño reproductor flotante en la esquina inferior derecha para pausar/reproducir la música sin interrumpir la navegación.
- **Experiencia Emotiva y UX:** Animaciones suaves (como las estrellas flotantes) y transiciones fluidas entre pantallas. El proyecto es 100% responsive con breakpoints específicos para tablets (768px), móviles (480px) y teléfonos extra pequeños (360px). Cada página (bienvenida, recuerdos y carta) tiene reglas adaptativas propias: los álbumes pasan a columna única en móvil, los modales se ajustan al viewport, el reproductor de música no tapa el contenido, y todos los elementos táctiles tienen tamaños accesibles. La estética romántica y cálida se mantiene en todas las resoluciones.

---

_Este documento servirá como base para la planificación y desarrollo de la página web._
