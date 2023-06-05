
const mode = document.getElementById('switch')

mode.addEventListener('click', () => {
    
    const html = document.documentElement

    if(html.classList.contains('light')) {
        html.classList.remove('light')
        return;

    }
    else{
        html.classList.add('light')
    }
});