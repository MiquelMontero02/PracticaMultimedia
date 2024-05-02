function asociarAudio(){
    var audioPlayer = document.getElementById("audioPlayer");
    var imagen=document.getElementById("imgAudio");
    document.getElementById("botonAudio").addEventListener('click',function(){
        if(imagen.play==1){
            audioPlayer.pause();
            imagen.src="/assets/img/iconoAudioInicio.svg";
            imagen.play=0;    
        }else{
            audioPlayer.play();
            imagen.src="/assets/img/IconoPausa.svg";
            imagen.play=1;
        }
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