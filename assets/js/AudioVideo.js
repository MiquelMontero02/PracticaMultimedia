// Obtener referencias a los elementos de audio y video
var audioPlayer = document.getElementById("audioPlayer");
var videoPlayer = document.getElementById("videoPlayer");
document.getElementById("botonPausaVideo").addEventListener('click',function(){
    videoPlayer.pause();
});
document.getElementById("botonPausaAudio").addEventListener('click',function(){
    audioPlayer.pause();
});
document.getElementById("botonReanudarVideo").addEventListener('click',function(){
    videoPlayer.play();
});
document.getElementById("botonReanudarAudio").addEventListener('click',function(){
    audioPlayer.play();
});
