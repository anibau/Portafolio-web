const toggleTheme= document.getElementById('toggle-theme');
const toggleIcon= document.getElementById('toggle-icon');
const toggleText= document.getElementById('toggle-text');
const toggleColors= document.getElementById('toggle-colors');
const rootStyle= document.documentElement.style;
const buttontoBack= document.getElementById('backToTopButton')

//funcion de dark mode
const themeMode=()=>{
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src= 'assets/sun.svg';
        toggleText.textContent='Ligth Mode';
        toggleColors.style.display= 'none'
    } else{
        toggleIcon.src= 'assets/moon.svg';
        toggleText.textContent='Dark Mode';
        toggleColors.style.display='flex'
    }

}

toggleTheme.addEventListener('click', themeMode);

// funcion de cambio de colores de fuente
toggleColors.addEventListener('click', (e)=>{
    if(e.target.dataset.color){
        rootStyle.setProperty('--primary-color', e.target.dataset.color);
        rootStyle.setProperty('--bg-color', e.target.dataset.bgColor);
        rootStyle.setProperty('--bg-icon-color-hover', e.target.dataset.iconHover);
        rootStyle.setProperty('--bg-span-color', e.target.dataset.spanColor);
    }
 })

// funcion de flecha de regreso
window.addEventListener('scroll', ()=>{
    if(window.scrollY>200){
        buttontoBack.style.display='block';
    } else{
        buttontoBack.style.display= 'none'
    }
})

// funcion de animacion de tipeo
document.addEventListener("DOMContentLoaded", function() {
    const text = ' Soy una apasionada del conocimiento, siempre en busca de aprender y crecer en dos áreas que me fascinan: la lógica de la programación y las inversiones.';
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


  //animacion letra por letra
//   const text = "SOBRE MI";
// document.getElementById('sobre-mi').innerHTML = [...text].map(char => `<span>${char}</span>`).join('');


