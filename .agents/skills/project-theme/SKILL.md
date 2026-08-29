---
name: project-theme
description: >-
  Instrucciones fundamentales sobre la estética, el tono y los protagonistas del proyecto (Darling y Javier).
  Usar esta skill siempre que se genere contenido, diseño o textos nuevos.
---

# Temática del Proyecto: Amor y Aniversario (¡Lo más importante!)

Este no es un proyecto de software cualquiera, es un regalo personal, romántico y emotivo.

1.  **Protagonistas:** **Darling** y **Javier**. Siempre refiérete a ella como "Darling" (nunca como Fernanda, ya que "Darling" es especial).
2.  **Motivo:** Celebración de su **3er Aniversario**.
3.  **Fecha Especial:** 30 de agosto de 2023. Se debe usar como hito o "contraseña" simbólica del amor.
4.  **Paleta de Colores:** Siempre utiliza tonos morados 💜 (`var(--primary)`, `var(--secondary)`). El morado es el pilar estético de la relación.
5.  **Tono y Experiencia (UX):** El texto en la interfaz debe ser extremadamente dulce, cariñoso, respetuoso y mágico. Además, todo el diseño (100% responsive) y la experiencia de usuario (UX) deben girar en torno a que ella se sienta especial al navegar; la temática romántica es el filtro para cualquier decisión técnica.
6.  **Estilo de Imágenes (Polaroid) — ESTÁNDAR DE DISEÑO:**
    Todas las fotografías del proyecto deben seguir el formato Polaroid. A continuación el estándar obligatorio:

    **Polaroid simple (para galerías de comidas, recuerdos, etc.):**

    ```html
    <div class="polaroid">
      <img src="../assets/img/ejemplo.png" alt="Descripción" />
      <div class="bg-polaroid-msg">Texto escrito a mano 💜</div>
    </div>
    ```

    **Polaroid principal (con título, subtítulo y fecha):**

    ```html
    <div class="polaroid welcome-polaroid">
      <img src="../assets/img/ejemplo.png" alt="Descripción" />
      <div class="polaroid-text">
        <div class="p-title">Título cursivo grande</div>
        <div class="p-subtitle">Subtítulo en Poppins</div>
        <div class="p-date">✨ Fecha o detalle ✨</div>
      </div>
    </div>
    ```

    **Baraja/Abanico de Polaroids (para mostrar varias fotos juntas):**

    ```html
    <div class="polaroid-deck">
      <div class="polaroid bg-polaroid bg-1">
        <img ... />
        <div class="bg-polaroid-msg">Msg</div>
      </div>
      <div class="polaroid bg-polaroid bg-2">
        <img ... />
        <div class="bg-polaroid-msg">Msg</div>
      </div>
      <div class="polaroid welcome-polaroid">
        <img ... />
        <div class="polaroid-text">...</div>
      </div>
      <div class="polaroid bg-polaroid bg-3">
        <img ... />
        <div class="bg-polaroid-msg">Msg</div>
      </div>
      <div class="polaroid bg-polaroid bg-4">
        <img ... />
        <div class="bg-polaroid-msg">Msg</div>
      </div>
    </div>
    ```

    **Clases CSS disponibles en `assets/css/styles.css`:**
    - `.polaroid` — Base: fondo blanco, padding `10px 10px 40px 10px`, sombra suave, border-radius `3px`.
    - `.bg-polaroid-msg` — Texto "escrito a mano" (Dancing Script, 1.2rem) en el borde blanco inferior.
    - `.polaroid-text` — Contenedor de textos para la polaroid principal.
    - `.p-title` — Título cursivo grande (Dancing Script, 1.6rem).
    - `.p-subtitle` — Subtítulo elegante (Poppins, 0.95rem, color morado).
    - `.p-date` — Fecha o dato sutil (Poppins, 0.85rem, color secundario).
    - `.polaroid-deck` — Contenedor de baraja (pivote central inferior, rotaciones simétricas ±30° y ±15°).
    - `.bg-1` a `.bg-4` — Posiciones del abanico.
    - `.welcome-polaroid` — Polaroid central del abanico (rotate 0°, z-index 5).

    **Reglas de diseño obligatorias:**
    - Las imágenes usan `object-fit: cover` para mantener proporción.
    - El borde blanco inferior siempre es más ancho que los otros 3 lados (simula papel fotográfico real).
    - En hover: `scale(1.05)` con ligera rotación, transición suave de 0.3-0.4s.
    - Siempre incluir un texto o mensaje cariñoso en la parte blanca inferior.
