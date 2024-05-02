document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body')
    const orbe = document.querySelector('.orbe')
    const quad = document.querySelector('.quadrado-spin')
    const h1intro = document.querySelector('.intro')
    const h1 = document.querySelector('.h1secret')
    const h2 = document.querySelector('.h2lindo')
    const esquerdo = document.querySelectorAll('.lower-e div')
    const direito = document.querySelectorAll('.lower-d div')
    let timeoutId; 
    
    orbe.addEventListener('mousedown', () => {
        timeoutId = setTimeout(function() {
            body.classList.add('backwhite');
            orbe.classList.add('hidden');
            quad.classList.add('hidden');
            h1intro.classList.add('hidden');
            h1.classList.add('backwhite');
        }, 9992);
    });

    orbe.addEventListener('mouseup', () => {
        clearTimeout(timeoutId);
    });

    let cat = document.getElementById('cat');
    let timeoutId2;

    quad.addEventListener('mouseover', () => {
        cat.play();
        cat.volume = 0.15;
        timeoutId2 = setTimeout(function() {
            h2.classList.add('show');
        }, 20000)
        timeoutId2 = setTimeout(function() {
            h2.classList.remove('show');
        }, 23000)
        timeoutId2 = setTimeout(function() {
            esquerdo.forEach(function(filho) {
                filho.classList.add('vibing');
            });
            direito.forEach(function(filho) {
                filho.classList.add('vibing');
            });
        }, 55700)
    });

    quad.addEventListener('mouseout', () => {
        cat.pause();
        clearTimeout(timeoutId2);
        cat.currentTime = 0;
        esquerdo.forEach(function(filho) {
            filho.classList.remove('vibing');
        });
        direito.forEach(function(filho) {
            filho.classList.remove('vibing');
        });

    });

    quad.addEventListener('touchstart', () => {
        cat.play();
        cat.volume = 0.15;
        timeoutId2 = setTimeout(function() {
            esquerdo.forEach(function(filho) {
                filho.classList.add('vibing');
            });
            direito.forEach(function(filho) {
                filho.classList.add('vibing');
            });
        }, 56000)
    });

    quad.addEventListener('touchend', () => {
        cat.pause();
        clearTimeout(timeoutId2)
        cat.currentTime = 0;
        esquerdo.forEach(function(filho) {
            filho.classList.remove('vibing');
        });
        direito.forEach(function(filho) {
            filho.classList.remove('vibing');
        });
    });

    
});

//amei isso =3

