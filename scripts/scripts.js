const toggleTheme= document.getElementById('toggle-theme');
const toggleIcon= document.getElementById('toggle-icon');
const toggleText= document.getElementById('toggle-text');
const toggleColors= document.getElementById('toggle-colors');
const rootStyle= document.documentElement.style;

const themeMode=()=>{
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src= 'assets/sun.svg';
        toggleText.textContent='Ligth Mode';
    } else{
        toggleIcon.src= 'assets/moon.svg';
        toggleText.textContent='Dark Mode'
    }

}

toggleTheme.addEventListener('click', themeMode);
toggleColors.addEventListener('click', (e)=>{
    console.log(e.target.dataset)
    rootStyle.setProperty('--primary-color', e.target.dataset.color);
})