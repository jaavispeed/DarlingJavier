// Generar corazones flotantes de fondo
function createHearts() {
  const container = document.getElementById("bg-hearts");
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💜";
    heart.className = "bg-heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";
    heart.style.animationDelay = Math.random() * 5 + "s";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    container.appendChild(heart);
  }
}
createHearts();

// Mostrar campo de contraseña
function showPasswordPrompt() {
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
