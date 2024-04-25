document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body')
    const orbe = document.querySelector('.orbe')
    const quad = document.querySelector('.quadrado-spin')
    const h1 = document.querySelector('.h1secret')
    let timeoutId; 
    
    orbe.addEventListener('mousedown', () => {
        timeoutId = setTimeout(function() {
            body.classList.add('backwhite');
            orbe.classList.add('hidden');
            quad.classList.add('hidden');
            h1.classList.add('backwhite');
        }, 9992);
    });

    orbe.addEventListener('mouseup', () => {
        clearTimeout(timeoutId);
    });

    let cat = document.getElementById('cat');

    quad.addEventListener('mouseover', () => {
        cat.play();
        cat.volume = 0.15;
    });

    quad.addEventListener('mouseout', () => {
        cat.pause();
        cat.currentTime = 0;
    });

    
});

//amei isso =3


