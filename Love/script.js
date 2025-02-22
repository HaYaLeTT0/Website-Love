
function checkPin() {
    var pin = document.getElementById('pin-code').value;
    var errorMessage = document.getElementById('error-message');
    var pinScreen = document.getElementById('pin-screen');

    if (pin === '3232') {
        window.location.href = 'index2.html';  
    } else {
        errorMessage.style.display = 'block';  
    }
}



function toggleMusic() {
    var music = document.getElementById('music');
    var button = document.getElementById('music-button');
    if (music.paused) {
        music.play();
        button.innerText = 'Müziği Durdur';
    } else {
        music.pause();
        button.innerText = 'Müziği Başlat';
    }
}

