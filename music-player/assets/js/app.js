const audioElement = document.getElementById('songAudio');
const coverElement = document.getElementById('songCover');
const titleElement = document.getElementById('songTitle');
const artistElement = document.getElementById('songArtist');

const prevButton = document.getElementById('prevButton');
const playButton = document.getElementById('playButton');
const playIcon = playButton.querySelector('img');
const nextButton = document.getElementById('nextButton');
const playIconSrc = './assets/images/Play_fill.svg';
const pauseIconSrc = './assets/images/Pause_fill.svg';

const currentTimeElement = document.getElementById('currentTime');
const totalTimeElement = document.getElementById('totalTime');
const progressBarContainer = document.getElementById('progressBarContainer');
const progressBarFill = document.getElementById('progressBarFill');

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
    let isPlaying = false;

    prevButton.addEventListener('click', toggleNext); // TODO: Implement previous song functionality. Now it's the same as next song.
    playButton.addEventListener('click', togglePlay);
    nextButton.addEventListener('click', toggleNext);
    audioElement.addEventListener('timeupdate', updateProgressBarFill);
    progressBarContainer.addEventListener('click', jumpToTime);

    function loadSong(song) {
        audioElement.src = song.songMusicSrc;
        coverElement.src = song.songImageSrc;
        titleElement.textContent = song.songTitle;
        artistElement.textContent = song.songArtist;
    }

    loadSong(songs[songIndex]);

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

    function updateProgressBarFill() {
        let { currentTime, duration } = audioElement;
        if (!duration) {
            audioElement.addEventListener('loadedmetadata', updateProgressBarFill);
        }
        let progress = (currentTime / duration) * 100;
        progressBarFill.style.width = `${progress}%`;

        let currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        let totalMinutes = Math.floor(duration / 60);
        let totalSeconds = Math.floor(duration % 60);

        currentTimeElement.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`;
        totalTimeElement.textContent = `${totalMinutes}:${totalSeconds}`;
    }

    function jumpToTime(event) {
        let progressBarContainerWidth = progressBarContainer.offsetWidth;
        let clickPosition = event.offsetX;
        let newTime = (clickPosition / progressBarContainerWidth) * audioElement.duration;
        audioElement.currentTime = newTime;
    }
}