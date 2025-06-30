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
