const audioElement = document.getElementById('songAudio');
const coverElement = document.getElementById('songCover');
const titleElement = document.getElementById('songTitle');
const artistElement = document.getElementById('songArtist');

const prevButton = document.getElementById('prevButton');
const playButton = document.getElementById('playButton');
const playIcon = playButton.querySelector('img');
const nextButton = document.getElementById('nextButton');
const currentTimeElement = document.getElementById('currentTime');
const totalTimeElement = document.getElementById('totalTime');
const progressBar = document.getElementById('progressBar');

const playIconSrc = './assets/images/Play_fill.svg';
const pauseIconSrc = './assets/images/Pause_fill.svg';

const songs = [
    {
        songTitle: "Lost in the City Lights",
        songArtist: "Cosmo Sheldrake",
        songImageSrc: "./assets/images/cover-1.jpg",
        songMusicSrc: "./assets/audio/lost-in-city-lights-145038.mp3",
    },
    {
        songTitle: "Forest Lullaby",
        songArtist: "Lesfm",
        songImageSrc: "./assets/images/cover-2.jpg",
        songMusicSrc: "./assets/audio/forest-lullaby-110624.mp3",
    },
];

window.onload = () => {
    let songIndex = 0;
    loadSong(songs[songIndex]);
    let isPlaying = false;

    function loadSong(song) {
        audioElement.src = song.songMusicSrc;
        coverElement.src = song.songImageSrc;
        titleElement.textContent = song.songTitle;
        artistElement.textContent = song.songArtist;
    }

    function togglePlay() {
        if (isPlaying) {
            audioElement.pause();
            let playIcon = playButton.querySelector("img");
            playIcon.src = playIconSrc;
        } else {
            audioElement.play();
            let playIcon = playButton.querySelector("img");
            playIcon.src = pauseIconSrc;
        }
        isPlaying = !isPlaying;
    }

    function toggleNext() {
        songIndex = (songIndex + 1) % songs.length;
        loadSong(songs[songIndex]);
        if (isPlaying) {
            audioElement.play();
        }
    }

    playButton.addEventListener('click', togglePlay);
    nextButton.addEventListener('click', toggleNext);
    prevButton.addEventListener('click', toggleNext); // TODO: Implement previous song functionality. Now it's the same as next song.
}