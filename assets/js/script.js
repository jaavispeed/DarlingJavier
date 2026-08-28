// Generar estrellas reales de fondo (Cielo estrellado)
function createStars() {
  const container = document.getElementById("bg-stars");
  if (!container) return;
  for (let i = 0; i < 350; i++) {
    let star = document.createElement("div");
    star.className = "sky-star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    
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
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") return;

    const playerHTML = `
        <style>
            .music-player {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: rgba(245, 238, 248, 0.9);
                backdrop-filter: blur(5px);
                border: 2px solid #8e44ad;
                border-radius: 30px;
                padding: 8px 15px;
                display: flex;
                align-items: center;
                gap: 12px;
                box-shadow: 0 4px 15px rgba(142, 68, 173, 0.2);
                z-index: 1000;
                transition: all 0.3s ease;
                opacity: 0.8;
                font-family: 'Poppins', sans-serif;
            }
            .music-player:hover { opacity: 1; transform: scale(1.02); }
            .music-icon { font-size: 1.5rem; animation: floatIcon 3s ease-in-out infinite; }
            @keyframes floatIcon { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
            .music-info { display: flex; flex-direction: column; line-height: 1.2; }
            .music-title { font-weight: 600; color: #8e44ad; font-size: 0.9rem; }
            .music-artist { font-size: 0.75rem; color: #9b59b6; }
            .play-btn { background: #8e44ad; color: white; border: none; width: 35px; height: 35px; border-radius: 50%; cursor: pointer; display: flex; justify-content: center; align-items: center; font-size: 1rem; transition: transform 0.2s, background 0.2s; outline: none; }
            .play-btn:hover { transform: scale(1.1); background: #732d91; }
            .volume-container { display: flex; align-items: center; gap: 5px; margin-left: 8px; margin-right: 8px; }
            .volume-icon { font-size: 0.9rem; color: #8e44ad; }
            .volume-slider { width: 55px; accent-color: #8e44ad; cursor: pointer; }
            
            @media (max-width: 480px) {
                .music-player { bottom: 15px; right: 15px; left: 15px; justify-content: space-between; border-radius: 20px; padding: 6px 12px; gap: 5px; }
                .music-info { max-width: 100px; overflow: hidden; white-space: nowrap; }
                .music-title { font-size: 0.8rem; text-overflow: ellipsis; overflow: hidden; }
                .music-artist { font-size: 0.65rem; }
                .volume-container { margin-left: 0; margin-right: 0; }
                .volume-slider { width: 40px; }
                .music-icon { font-size: 1.2rem; }
            }
        </style>
        <audio id="bg-music" loop autoplay>
            <source src="../assets/music/Eres_Mi_Tesoro.mp3" type="audio/mpeg">
        </audio>
        <div class="music-player">
            <div class="music-icon">🎵</div>
            <div class="music-info">
                <span class="music-title">Eres Mi Tesoro</span>
                <span class="music-artist">Jesse & Joy</span>
            </div>
            <div class="volume-container">
                <span class="volume-icon">🔊</span>
                <input type="range" id="volume-slider" min="0" max="100" value="20" class="volume-slider" title="Ajustar volumen">
            </div>
            <button class="play-btn" id="play-pause-btn">▶️</button>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', playerHTML);

    const bgMusic = document.getElementById("bg-music");
    const playBtn = document.getElementById("play-pause-btn");
    const volumeSlider = document.getElementById("volume-slider");

    // 2. Restaurar estado de sessionStorage
    const savedTime = sessionStorage.getItem("musicTime") || 0;
    const isPlaying = sessionStorage.getItem("musicPlaying") === "true";
    const savedVolume = sessionStorage.getItem("musicVolume") || 0.2;

    bgMusic.volume = savedVolume;
    volumeSlider.value = savedVolume * 100;
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
    
    // Guardar estado de forma continua por si cierra el navegador repentinamente
    setInterval(() => {
        sessionStorage.setItem("musicTime", bgMusic.currentTime);
        sessionStorage.setItem("musicPlaying", !bgMusic.paused);
    }, 1000);

    // 4. Lógica de los botones
    playBtn.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play();
            playBtn.textContent = "⏸";
        } else {
            bgMusic.pause();
            playBtn.textContent = "▶️";
        }
    });
    
    bgMusic.addEventListener("play", () => playBtn.textContent = "⏸");
    bgMusic.addEventListener("pause", () => playBtn.textContent = "▶️");

    volumeSlider.addEventListener("input", function() {
        bgMusic.volume = this.value / 100;
        sessionStorage.setItem("musicVolume", bgMusic.volume);
    });
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
    dateInput.addEventListener("input", function(e) {
      // Elimina todo lo que no sea número
      let value = this.value.replace(/\D/g, "");
      
      // Añade los guiones automáticamente
      if (value.length > 2 && value.length <= 4) {
        value = value.substring(0, 2) + "-" + value.substring(2);
      } else if (value.length > 4) {
        value = value.substring(0, 2) + "-" + value.substring(2, 4) + "-" + value.substring(4, 8);
      }
      
      this.value = value;
    });

    // Permitir enviar con la tecla Enter
    dateInput.addEventListener("keypress", function(e) {
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

// Lógica de los Álbumes de Recuerdos
const albumData = {
    hamburguesas: {
        title: 'Nuestra Favorita: ¡Hamburguesas! 🍔🍟',
        folder: '../assets/img/hamburguesas',
        placeholder: '📸 (Las fotos de la carpeta "assets/img/hamburguesas" irán aquí)'
    },
    comidas: {
        title: 'Momentos Deliciosos Juntos 🍕🍣',
        folder: '../assets/img/comidas_varias',
        placeholder: '📸 (Las fotos de la carpeta "assets/img/comidas_varias" irán aquí)'
    },
    juntos: {
        title: 'Tú y Yo 💑',
        folder: '../assets/img/juntos',
        placeholder: '📸 (Las fotos de nosotros juntos irán aquí)'
    },
    viajes: {
        title: 'Nuestros Viajes ✈️',
        folder: '../assets/img/viajes',
        placeholder: '📸 (Las fotos de nuestros viajes irán aquí)'
    },
    otros: {
        title: 'Otros Momentos Mágicos ✨',
        folder: '../assets/img/otros',
        placeholder: '📸 (Otras fotos especiales irán aquí)'
    },
    locuras: {
        title: 'Nuestras Locuras 🤪',
        folder: '../assets/img/locuras',
        placeholder: '📸 (Fotos divertidas irán aquí)'
    }
};

function abrirAlbum(albumId) {
    const modal = document.getElementById('album-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalGallery = document.getElementById('modal-gallery');
    
    if (modal && albumData[albumId]) {
        modalTitle.textContent = albumData[albumId].title;
        
        // Simular fotos con polaroids
        modalGallery.innerHTML = `
            <div class="gallery-placeholder" style="grid-column: 1 / -1; background-color: white; border: 2px dashed var(--heart); border-radius: 10px; padding: 40px 20px; color: var(--text-dark); font-weight: 600; text-align: center;">
                <p>${albumData[albumId].placeholder}</p>
                <p style="font-size: 0.85rem; color: var(--secondary); margin-top: 10px;">Ruta esperada: ${albumData[albumId].folder}</p>
            </div>
        `;
        
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }
}

function cerrarAlbum() {
    const modal = document.getElementById('album-modal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}
