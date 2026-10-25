const audio = document.getElementById('audio-player');
const playButton = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar')
const controlVolumen = document.getElementById('volumen')
const loop = document.getElementById('loop')
const shuffle = document.getElementById('shuffle')
const temaCancion = document.getElementById('theme-title')
const nombreArtista = document.getElementById('song-artist')
const imagenCancion = document.getElementById('theme-image')

const canciones = [
    {name: 'Umapoi', artist: 'Uma Musume',image:'imagenes/cancion1.jpg', file: 'assets/cancion1.mp3'},
    {name: 'Russian rulet', artist: 'Red velvet', image:'imagenes/cancion3.jpg', file: 'assets/cancion2.mp3'},
    { name: "Number One", artist: "Bleach", image:'imagenes/cancion2.jpg', file: "assets/cancion3.mp3" }
]

let currentSongIndex = 0;
let isShuffle = false;

const cargarCancion = (cancion) => {
    temaCancion.textContent = cancion.name;
    nombreArtista.textContent = cancion.artist;
    imagenCancion.src = cancion.image;
    audio.src = cancion.file;
}

const reproducirCancion = () => {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = "&vert; &vert;";
    }else {
        audio.pause();
        playButton.innerHTML = "&#9654;";
    }

}

const actualizarBarraProgreso = () => {
    const porcentaje = (audio.currentTime / audio.duration) * 100;
    progressBar.value = porcentaje;
}

const avanzarCancion = () => {
    cargarCancion(canciones[currentSongIndex]);
    audio.play();
    playButton.innerHTML = "&vert; &vert;";
}

const siguienteCancion = () => {
    if(isShuffle) {
        currentSongIndex = Math.floor(Math.random() * canciones.length);
    } else {
        currentSongIndex = (currentSongIndex + 1) % canciones.length;
    }
    avanzarCancion();
}

const prevCancion = () => {
    currentSongIndex = (currentSongIndex == 0) ? canciones.length - 1 : currentSongIndex - 1;
    avanzarCancion();
}

audio.addEventListener("ended",siguienteCancion);

playButton.addEventListener("click", reproducirCancion);
nextButton.addEventListener("click", siguienteCancion);
prevBtn.addEventListener("click", prevCancion);

controlVolumen.addEventListener('input', () => {
    audio.volume = controlVolumen.value;
});

loop.addEventListener('change', () => {
    audio.loop = loop.checked;
})

shuffle.addEventListener('change', () => {
    isShuffle = shuffle.checked;
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * canciones.length);
        avanzarCancion();
    }
})

audio.addEventListener('timeupdate', actualizarBarraProgreso);

progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
})


document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        reproducirCancion();
    }
})

cargarCancion(canciones[currentSongIndex]);