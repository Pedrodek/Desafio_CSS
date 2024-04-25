document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body')
    const orbe = document.querySelector('.orbe')
    const quad = document.querySelector('.quadrado-spin')
    const h1 = document.querySelector('.h1secret')

    orbe.addEventListener('mousedown', ()=> {
        setTimeout(function(){
            body.classList.add('backwhite');                                                
            orbe.classList.add('hidden')
            quad.classList.add('hidden')
            h1.classList.add('backwhite')
        }, 9992);
    })
    
});

//amei isso =3
function carregarPlayer() {
    var videoId = 'https://www.youtube.com/watch?v=9lX-hVpvN3E';

    var playerConfig = {
        height: '0',
        width: '0',
        videoId: videoId,
        events: {
            'onReady': onPlayerReady
        }
    };

    var player = new YT.Player('player', playerConfig);
}

function onPlayerReady(event) {
    var quad = document.getElementById('quad');

    quad.addEventListener('mouseover', function() {
        event.target.playVideo();
    });

    quad.addEventListener('mouseout', function() {
        event.target.pauseVideo(); 
        event.target.seekTo(0); 
    });
};

window.onload = function() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var primeiroScriptTag = document.getElementsByTagName('script')[0];
    primeiroScriptTag.parentNode.insertBefore(tag, primeiroScriptTag);
};