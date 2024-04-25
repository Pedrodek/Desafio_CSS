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

    
});

//amei isso =3

function onYouTubeIframeAPIReady() {
    carregarPlayer();
}

function carregarPlayer() {
    var videoId = extrairVideoId('https://www.youtube.com/watch?v=9lX-hVpvN3E');

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

function extrairVideoId(url) {
    var match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
}
