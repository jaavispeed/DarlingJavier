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
