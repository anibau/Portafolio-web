const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");
const toggleColors = document.getElementById("toggle-colors");
const rootStyle = document.documentElement.style;
const buttontoBack = document.getElementById("backToTopButton");

//funcion de dark mode
const themeMode = () => {
  document.body.classList.toggle("dark");
  if (toggleIcon.src.includes("moon.svg")) {
    toggleIcon.src = "assets/sun.svg";
    toggleText.textContent = "Ligth Mode";
    toggleColors.style.display = "none";
  } else {
    toggleIcon.src = "assets/moon.svg";
    toggleText.textContent = "Dark Mode";
    toggleColors.style.display = "flex";
  }
};

toggleTheme.addEventListener("click", themeMode);

// funcion de cambio de colores de fuente
toggleColors.addEventListener("click", (e) => {
  if (e.target.dataset.color) {
    rootStyle.setProperty("--primary-color", e.target.dataset.color);
    rootStyle.setProperty("--bg-color", e.target.dataset.bgColor);
    rootStyle.setProperty("--bg-icon-color-hover", e.target.dataset.iconHover);
    rootStyle.setProperty("--bg-span-color", e.target.dataset.spanColor);
  }
});

// funcion de flecha de regreso
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    buttontoBack.style.display = "block";
  } else {
    buttontoBack.style.display = "none";
  }
});

// funcion de animacion de tipeo
document.addEventListener("DOMContentLoaded", function () {
  const text =
    " Soy una desarrolladora Full Stack/ Backend especializada en JavaScript, TypeScript, Node.js, React, NestJS, PostgreSQL y MongoDB. Me apasiona crear APIs escalables, optimizar bases de datos y desarrollar interfaces interactivas.";
  const animatedText = document.getElementById("animated-text");
  let index = 0;

  function typeText() {
    if (index < text.length) {
      // Añade un carácter al contenido del párrafo
      animatedText.textContent += text.charAt(index);
      index++;

      // Llama a la función de nuevo después de un pequeño retraso
      setTimeout(typeText, 50); // Ajusta el tiempo para controlar la velocidad de escritura
    }
  }

  typeText(); // Inicia la animación de tipeo
});

// funcion de animacion de tipeo en EN
document.addEventListener("DOMContentLoaded", function () {
  const text =
    " I am a Full Stack developer/ Backend specialized in JavaScript, TypeScript, Node.js, React, NestJS, PostgreSQL and MongoDB. I am passionate about creating scalable APIs, optimizing databases and developing interactive interfaces."
  const animatedText = document.getElementById("animated-text-en");
  let index = 0;

  function typeText() {
    if (index < text.length) {
      // Añade un carácter al contenido del párrafo
      animatedText.textContent += text.charAt(index);
      index++;

      // Llama a la función de nuevo después de un pequeño retraso
      setTimeout(typeText, 50); // Ajusta el tiempo para controlar la velocidad de escritura
    }
  }

  typeText(); // Inicia la animación de tipeo
});

//animacion letra por letra
//   const text = "SOBRE MI";
// document.getElementById('sobre-mi').innerHTML = [...text].map(char => `<span>${char}</span>`).join('');
