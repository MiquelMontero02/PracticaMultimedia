function asociarAudio(){
    var audioPlayer = document.getElementById("audioPlayer");
    document.getElementById("botonPausaAudio").addEventListener('click',function(){
        audioPlayer.pause();
    });
    document.getElementById("botonReanudarAudio").addEventListener('click',function(){
        audioPlayer.play();
    });
}
function asociarVideo(){
    var videoPlayer = document.getElementById("videoPlayer");
    document.getElementById("botonPausaVideo").addEventListener('click',function(){
        videoPlayer.pause();
    });
    document.getElementById("botonReanudarVideo").addEventListener('click',function(){
        videoPlayer.play();
    });
}