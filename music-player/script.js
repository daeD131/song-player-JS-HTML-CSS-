//this function change the song archive, image and names of the song and artist based on the songs array
function renderSong(index){
    song.setAttribute('src', songs[index].src)
    song.addEventListener('loadeddata', () => {
        songName.textContent = songs[index].title;
        songArtist.textContent = songs[index].artist;
        songImage.src = songs[index].img
    });
}

// following you can set your own songs with your own song archives and images
let songs = [
    {title:'', artist:'', src:'', img:'./assets/img/logo.png'},
    {title:'Code Of The Slashers', artist:'Cannibal Corpse', src:'./assets/songs/Code-Of-The-Slashers.mp4', img:'./assets/img/red-before-black.png'},
    {title:'Hallowed Be Thy Name', artist:'Iron Maiden', src:'./assets/songs/Hallowed-Be-Thy-Name.mp4', img:'./assets/img/the-number-of-the-beast.png'},
    {title:'Black Magic', artist:'Slayer', src:'./assets/songs/Black-Magic.mp4', img:'./assets/img/show-no-mercy.png'},
    {title:'Dunkelheit', artist:'Burzum', src:'./assets/songs/Dunkelheit.mp4', img:'./assets/img/filosofem.png'},
    {title:'Freezing Moon', artist:'Mayhem', src:'./assets/songs/Freezing-Moon.mp4', img:'./assets/img/mysteriis.png'}
];

//variables
let song = document.querySelector('audio');
let songImage = document.querySelector('.album-image img');
let songName = document.querySelector('.song-name h2')
let songArtist = document.querySelector('.artist i')
let indexSong = 0;

//events
document.querySelector('.play').addEventListener('click', playSong);
document.querySelector('.pause').addEventListener('click', pauseSong);
document.querySelector('.back').addEventListener('click', () => {
    indexSong--;
    renderSong(indexSong);
});
document.querySelector('.next').addEventListener('click', () => {
    indexSong++;
    renderSong(indexSong);
});
song.addEventListener('timeupdate', updateBar);

//functions to hited by the events
function playSong(){
    song.play();
}

function pauseSong(){
    song.pause();
}

function updateBar(){
    let progressBar = document.querySelector('progress');
    progressBar.style.width = (song.currentTime /song.duration) * 100 + '%';
}