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
    var imagen=document.getElementById("imgVideo");
    document.getElementById("botonVideo").addEventListener('click',function(){
        if(imagen.play==1){
            videoPlayer.pause();
            imagen.src="/assets/img/IconPlay.svg";
            imagen.play=0;    
        }else{
            videoPlayer.play();
            imagen.src="/assets/img/IconoPausa.svg";
            imagen.play=1;
        }
    });
}