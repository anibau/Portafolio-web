const menuToggle = document.getElementById("menuToggle");
const menuDropdown = document.getElementById("menuDropdown");
const themeSwitch = document.getElementById("themeSwitch");
const colorBtns = document.querySelectorAll(".color-btn");
const languageBtns = document.querySelectorAll(".language-btn");
const rootStyle = document.documentElement.style;
const buttontoBack = document.getElementById("backToTopButton");

// Función para manejar el menú desplegable
const toggleMenu = () => {
  menuDropdown.classList.toggle("active");
  menuToggle.classList.toggle("active");
};

// Cerrar menú al hacer clic fuera
document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !menuDropdown.contains(e.target)) {
    menuDropdown.classList.remove("active");
    menuToggle.classList.remove("active");
  }
});

// Función de dark mode
const themeMode = () => {
  document.body.classList.toggle("dark");
  themeSwitch.classList.toggle("active");
  
  // Guardar preferencia en localStorage
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

// Función auxiliar para convertir hex a rgb
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
    '128, 0, 128';
};


const changeColor = (e) => {
  const btn = e.target.closest(".color-btn");
  if (!btn) return;

  colorBtns.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  const { color, bgColor, iconHover, spanColor } = btn.dataset;

  // Aplicar colores principales
  rootStyle.setProperty("--primary-color", color);
  rootStyle.setProperty("--bg-color", bgColor);
  rootStyle.setProperty("--bg-icon-hover-color", iconHover);
  rootStyle.setProperty("--bg-span-color", spanColor);

  // Aplicar colores derivados y de texto
  rootStyle.setProperty("--secondary-color", iconHover);
  rootStyle.setProperty("--accent-color", bgColor);
  rootStyle.setProperty("--accent-light", bgColor);
  rootStyle.setProperty("--accent-soft", bgColor);
  rootStyle.setProperty("--text-color", iconHover);
  rootStyle.setProperty("--text-light", color);
  rootStyle.setProperty("--title-color", iconHover);
  rootStyle.setProperty("--subtitle-color", color);
  rootStyle.setProperty("--hover-color", iconHover);
  rootStyle.setProperty("--icon-hover", color);
  rootStyle.setProperty("--span-color", spanColor);

  // Bordes y sombras derivados
  rootStyle.setProperty("--border-color", `rgba(${hexToRgb(color)}, 0.2)`);
  rootStyle.setProperty("--shadow-color", `rgba(${hexToRgb(iconHover)}, 0.15)`);

  // Guardar preferencia
  localStorage.setItem("colorTheme", color);
};

window.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem("colorTheme");
  if (!savedColor) return;

  const savedBtn = Array.from(colorBtns).find(btn => btn.dataset.color === savedColor);
  if (savedBtn) savedBtn.click();
});




// Función para manejar idiomas
const changeLanguage = (e) => {
  const btn = e.target.closest(".language-btn");
  if (!btn) return;
  
  // Remover clase active de todos los botones
  languageBtns.forEach(btn => btn.classList.remove("active"));
  
  // Agregar clase active al botón clickeado
  btn.classList.add("active");
};

// Event listeners
menuToggle.addEventListener("click", toggleMenu);
themeSwitch.addEventListener("click", themeMode);
colorBtns.forEach(btn => btn.addEventListener("click", changeColor));
languageBtns.forEach(btn => btn.addEventListener("click", changeLanguage));

// Cargar preferencias guardadas
document.addEventListener("DOMContentLoaded", () => {
  // Cargar tema
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeSwitch.classList.add("active");
  }
  
  // Cargar color
  const savedColor = localStorage.getItem("colorTheme");
  if (savedColor) {
    const activeBtn = Array.from(colorBtns).find(btn => btn.dataset.color === savedColor);
    if (activeBtn) {
      activeBtn.classList.add("active");
      changeColor({ target: activeBtn });
    }
  }
});

// funcion de flecha de regreso mejorada
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    buttontoBack.classList.add("show");
  } else {
    buttontoBack.classList.remove("show");
  }
});

// Función para scroll suave al hacer clic en el botón
buttontoBack.addEventListener("click", (e) => {
  e.preventDefault();
  
  // Añadir efecto de feedback visual
  buttontoBack.style.transform = "scale(0.95)";
  
  // Scroll suave al inicio
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  
  // Restaurar el botón después de la animación
  setTimeout(() => {
    buttontoBack.style.transform = "";
  }, 150);
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

// Funcionalidad mejorada para videos de proyectos
document.addEventListener("DOMContentLoaded", function() {
  const projectMedias = document.querySelectorAll('.project-media');
  
  projectMedias.forEach(media => {
    const video = media.querySelector('.project-video');
    const overlay = media.querySelector('.video-overlay');
    const controls = media.querySelector('.video-controls');
    const loading = media.querySelector('.video-loading');
    const fallback = media.querySelector('.video-fallback');
    const progressBar = media.querySelector('.video-progress-bar');
    
    // Solo procesar si es un video
    if (video && video.tagName === 'VIDEO') {
      const playPauseBtn = media.querySelector('.play-pause-btn');
      const muteBtn = media.querySelector('.mute-btn');
      const fullscreenBtn = media.querySelector('.fullscreen-btn');
      
      // Estado del video
      let isPlaying = false;
      let isMuted = true;
      
      // Mostrar loading al cargar
      video.addEventListener('loadstart', () => {
        if (loading) loading.style.display = 'block';
      });
      
      // Ocultar loading cuando esté listo
      video.addEventListener('canplay', () => {
        if (loading) loading.style.display = 'none';
      });
      
      // Manejar errores de video
      video.addEventListener('error', () => {
        if (loading) loading.style.display = 'none';
        if (fallback) {
          fallback.style.display = 'flex';
          media.classList.add('video-error');
        }
      });
      
      // Actualizar progreso
      video.addEventListener('timeupdate', () => {
        if (progressBar && video.duration) {
          const progress = (video.currentTime / video.duration) * 100;
          progressBar.style.width = progress + '%';
        }
      });
      
      // Función para reproducir/pausar
      const togglePlay = () => {
        if (video.paused) {
          video.play();
          isPlaying = true;
          if (playPauseBtn) {
            playPauseBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
          }
          if (overlay) {
            overlay.classList.add('playing');
          }
          media.classList.add('playing');
        } else {
          video.pause();
          isPlaying = false;
          if (playPauseBtn) {
            playPauseBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
          }
          if (overlay) {
            overlay.classList.remove('playing');
          }
          media.classList.remove('playing');
        }
      };
      
      // Función para silenciar/desilenciar
      const toggleMute = () => {
        if (video.muted) {
          video.muted = false;
          isMuted = false;
          if (muteBtn) {
            muteBtn.innerHTML = '<i class="bi bi-volume-up-fill"></i>';
          }
        } else {
          video.muted = true;
          isMuted = true;
          if (muteBtn) {
            muteBtn.innerHTML = '<i class="bi bi-volume-mute-fill"></i>';
          }
        }
      };
      
      // Función para pantalla completa
      const toggleFullscreen = () => {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        }
      };
      
      // Event listeners para controles
      if (playPauseBtn) {
        playPauseBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          togglePlay();
        });
      }
      
      if (muteBtn) {
        muteBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleMute();
        });
      }
      
      if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleFullscreen();
        });
      }
      
      // Click en el overlay para reproducir
      if (overlay) {
        overlay.addEventListener('click', (e) => {
          e.stopPropagation();
          togglePlay();
        });
      }
      
      // Click en el contenedor principal
      media.addEventListener('click', (e) => {
        // Solo si no se hizo clic en un botón de control
        if (!e.target.closest('.control-btn')) {
          togglePlay();
        }
      });
      
      // Teclado para accesibilidad
      media.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          togglePlay();
        }
      });
      
      // Lazy loading para videos
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Precargar metadata
            video.preload = 'metadata';
            observer.unobserve(entry.target);
          }
        });
      });
      
      observer.observe(media);
    } else {
      // Para imágenes, solo manejar el click
      media.addEventListener('click', () => {
        // Aquí podrías agregar funcionalidad para abrir una galería o modal
        console.log('Image clicked');
      });
      
      media.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          console.log('Image activated');
        }
      });
    }
  });
});

// Animación de métricas con contador
document.addEventListener("DOMContentLoaded", function() {
  const metrics = document.querySelectorAll('.metric .number');
  
  const animateMetric = (element) => {
    const target = element.textContent;
    const isPercentage = target.includes('%');
    const isPlus = target.includes('+');
    const isText = /[a-zA-Z]/.test(target);
    
    if (isText) return; // No animar texto
    
    const numericValue = parseFloat(target.replace(/[^0-9.]/g, ''));
    let current = 0;
    const increment = numericValue / 50; // 50 pasos para la animación
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        current = numericValue;
        clearInterval(timer);
      }
      
      let displayValue = Math.floor(current);
      if (isPercentage) displayValue += '%';
      if (isPlus) displayValue += '+';
      
      element.textContent = displayValue;
    }, 30);
  };
  
  // Observador para animar métricas cuando sean visibles
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateMetric(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });
  
  metrics.forEach(metric => observer.observe(metric));
});

// Tracking de eventos para analytics
document.addEventListener("DOMContentLoaded", function() {
  // Tracking de clics en proyectos
  const projectLinks = document.querySelectorAll('.div-button a');
  projectLinks.forEach(link => {
    link.addEventListener('click', function() {
      const projectName = this.closest('.proyects').querySelector('h4').textContent;
      const linkType = this.querySelector('i').classList.contains('bi-github') ? 'GitHub' : 'Demo';
      
      // Enviar evento a Google Analytics (si está configurado)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'project_click', {
          'project_name': projectName,
          'link_type': linkType
        });
      }
      
      // Enviar evento a Hotjar (si está configurado)
      if (typeof hj !== 'undefined') {
        hj('event', 'project_click', {
          project_name: projectName,
          link_type: linkType
        });
      }
    });
  });
  
  // Tracking de clics en CTA
  const ctaButtons = document.querySelectorAll('.cta-buttons a');
  ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = this.textContent.trim();
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'cta_click', {
          'button_text': buttonText
        });
      }
      
      if (typeof hj !== 'undefined') {
        hj('event', 'cta_click', {
          button_text: buttonText
        });
      }
    });
  });
  
  // Tracking de cambio de tema
  toggleTheme.addEventListener('click', function() {
    const isDark = document.body.classList.contains('dark');
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'theme_change', {
        'theme': isDark ? 'dark' : 'light'
      });
    }
  });
});

// Mejora de performance - Preload de recursos críticos
document.addEventListener("DOMContentLoaded", function() {
  // Preload de imágenes importantes
  const criticalImages = [
    'assets/portafolio-removebg-preview.png',
    'assets/CEM.png',
    'assets/proyectFrontend300.png'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
});

// Smooth scrolling para navegación interna
document.addEventListener("DOMContentLoaded", function() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

//animacion letra por letra
//   const text = "SOBRE MI";
// document.getElementById('sobre-mi').innerHTML = [...text].map(char => `<span>${char}</span>`).join('');
