// Generar estrellas reales de fondo (Cielo estrellado)
function createStars() {
  const container = document.getElementById("bg-stars");
  if (!container) return;
  // Limpiar estrellas previas si existen
  container.innerHTML = "";
  for (let i = 0; i < 350; i++) {
    let star = document.createElement("div");
    star.className = "sky-star";
    // Usar porcentaje dentro del contenedor fijo para cubrir todo uniformemente
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    // Tamaños variables para simular cercanía/brillo
    let size = Math.random() * 2.5 + 0.5;
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDuration = Math.random() * 3 + 2 + "s";
    star.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(star);
  }
}
createStars();

// Inicializar reproductor de música persistente
document.addEventListener("DOMContentLoaded", () => {
  // 1. Inyectar HTML y CSS del reproductor si no estamos en el index.html raíz
  if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/"
  )
    return;

  const playerHTML = `
        <style>
            .music-player {
                position: fixed;
                bottom: 16px;
                right: 16px;
                background: rgba(10, 5, 18, 0.75);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: 1px solid rgba(142, 68, 173, 0.35);
                border-radius: 50px;
                padding: 5px 5px 5px 14px;
                display: flex;
                align-items: center;
                gap: 10px;
                z-index: 1000;
                font-family: 'Poppins', sans-serif;
                box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
                transition: box-shadow 0.3s;
            }
            .music-player:hover {
                box-shadow: 0 4px 18px rgba(142, 68, 173, 0.3);
            }
            .music-label {
                display: flex;
                align-items: center;
                gap: 6px;
                color: rgba(245, 238, 248, 0.9);
                font-size: 0.75rem;
                white-space: nowrap;
                letter-spacing: 0.3px;
            }
            .music-label .song-icon { font-size: 0.85rem; }
            .play-btn {
                background: rgba(142, 68, 173, 0.9);
                color: white;
                border: none;
                width: 34px;
                height: 34px;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.9rem;
                transition: transform 0.15s, background 0.2s;
                outline: none;
                flex-shrink: 0;
            }
            .play-btn:hover { background: #8e44ad; transform: scale(1.08); }
            .play-btn:active { transform: scale(0.92); }

            /* Móvil: el reproductor pasa a flujo normal (no flotante) */
            @media (max-width: 480px) {
                .music-player {
                    position: static;
                    margin: 20px auto 10px;
                    width: fit-content;
                    border-radius: 50px;
                    padding: 5px 5px 5px 14px;
                    gap: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                }
                .music-label { font-size: 0.72rem; }
                .play-btn { width: 32px; height: 32px; font-size: 0.85rem; }
            }

            @media (max-width: 360px) {
                .music-label { font-size: 0.65rem; gap: 4px; }
                .music-label .song-icon { font-size: 0.75rem; }
                .play-btn { width: 30px; height: 30px; }
            }
        </style>
        <audio id="bg-music" loop autoplay>
            <source src="../assets/music/Eres_Mi_Tesoro.mp3" type="audio/mpeg">
        </audio>
        <div class="music-player">
            <div class="music-label">
                <span class="song-icon">🎵</span>
                <span>Eres Mi Tesoro</span>
            </div>
            <button class="play-btn" id="play-pause-btn">▶</button>
        </div>
    `;

  // Insertar en el slot inline si existe (bienvenida), sino al final del body
  const inlineSlot = document.getElementById("inline-player");
  if (inlineSlot) {
    inlineSlot.innerHTML = playerHTML;
  } else {
    document.body.insertAdjacentHTML("beforeend", playerHTML);
  }

  const bgMusic = document.getElementById("bg-music");
  const playBtn = document.getElementById("play-pause-btn");

  // 2. Restaurar estado de sessionStorage
  const savedTime = sessionStorage.getItem("musicTime") || 0;
  const isPlaying = sessionStorage.getItem("musicPlaying") === "true";
  const savedVolume = sessionStorage.getItem("musicVolume") || 0.2;

  bgMusic.volume = savedVolume;
  bgMusic.currentTime = parseFloat(savedTime);

  if (isPlaying) {
    bgMusic.play().catch(() => console.log("Esperando interacción..."));
    playBtn.textContent = "⏸";
  }

  // 3. Guardar estado al salir o cambiar de página
  window.addEventListener("beforeunload", () => {
    sessionStorage.setItem("musicTime", bgMusic.currentTime);
    sessionStorage.setItem("musicPlaying", !bgMusic.paused);
    sessionStorage.setItem("musicVolume", bgMusic.volume);
  });

  // Guardar estado de forma continua
  setInterval(() => {
    sessionStorage.setItem("musicTime", bgMusic.currentTime);
    sessionStorage.setItem("musicPlaying", !bgMusic.paused);
  }, 1000);

  // 4. Lógica del botón
  playBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      playBtn.textContent = "⏸";
    } else {
      bgMusic.pause();
      playBtn.textContent = "▶";
    }
  });

  bgMusic.addEventListener("play", () => (playBtn.textContent = "⏸"));
  bgMusic.addEventListener("pause", () => (playBtn.textContent = "▶"));
});

// Mostrar campo de contraseña
function showPasswordPrompt() {
  // Iniciar la música al interactuar con el botón
  try {
    const bgMusic = document.getElementById("bg-music");
    if (bgMusic && bgMusic.paused) {
      bgMusic.play();
    }
  } catch (e) {
    console.log("Esperando para iniciar audio", e);
  }

  document.getElementById("start-btn").classList.add("hidden");
  document.getElementById("password-container").classList.remove("hidden");
}

// Verificar contraseña (fecha)
function checkPassword() {
  const input = document.getElementById("date-password").value;
  const errorMsg = document.getElementById("error-msg");

  const funnyErrors = [
    "Uy, esa no es la fecha....",
    "Esa fecha no me suena...",
    "¡Incorrecto! Pista: es el día que empezó todo",
    "Mmm... creo que alguien necesita revisar su calendario",
    "¿Otra fecha??? ¡Concéntrate!",
  ];

  // Formato aceptado: 30-08-2023 o 30/08/2023
  if (input === "30-08-2023" || input === "30/08/2023") {
    errorMsg.classList.add("hidden");
    startJourney();
  } else {
    // Elegir mensaje de error al azar
    const randomMsg =
      funnyErrors[Math.floor(Math.random() * funnyErrors.length)];
    errorMsg.textContent = randomMsg;
    errorMsg.classList.remove("hidden");

    // Pequeña animación de temblor
    errorMsg.style.animation = "none";
    errorMsg.offsetHeight; // Forzar reflow
    errorMsg.style.animation = "shake 0.4s ease";
  }
}

// Formateo automático de la fecha mientras se escribe (DD-MM-YYYY)
document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("date-password");
  if (dateInput) {
    dateInput.addEventListener("input", function (e) {
      // Elimina todo lo que no sea número
      let value = this.value.replace(/\D/g, "");

      // Añade los guiones automáticamente
      if (value.length > 2 && value.length <= 4) {
        value = value.substring(0, 2) + "-" + value.substring(2);
      } else if (value.length > 4) {
        value =
          value.substring(0, 2) +
          "-" +
          value.substring(2, 4) +
          "-" +
          value.substring(4, 8);
      }

      this.value = value;
    });

    // Permitir enviar con la tecla Enter
    dateInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        checkPassword();
      }
    });
  }
});

// Transición de la pantalla de bienvenida a la principal
function startJourney() {
  // Transición suave de salida
  document.body.style.transition = "opacity 0.8s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "recuerdos.html";
  }, 800);
}

// Interacción de las tarjetas de recuerdos
function toggleCard(element) {
  // Cierra las demás tarjetas si quieres que solo haya una abierta, o déjalas independientes
  element.classList.toggle("active");
}

// Abrir la carta
function openLetter() {
  const envelope = document.getElementById("envelope");
  const letter = document.getElementById("letter");

  envelope.style.display = "none"; // Oculta el sobre

  letter.classList.add("show"); // Muestra la carta con animación

  // Scroll hacia la carta
  setTimeout(() => {
    letter.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 100);
}

// Calcular días juntos
function calculateDays() {
  const startDate = new Date("2023-08-30T00:00:00"); // 30 de agosto de 2023
  const currentDate = new Date();

  // Diferencia en milisegundos
  const difference = currentDate - startDate;

  // Convertir a días (1000 ms * 60 s * 60 min * 24 hrs)
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const counterElement = document.getElementById("days-counter");
  if (counterElement) {
    counterElement.innerHTML = `¡Llevamos ${days} días increíbles! ✨`;
  }
}
calculateDays();


