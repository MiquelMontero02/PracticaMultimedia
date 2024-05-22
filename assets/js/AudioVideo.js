function asociarAudio(){
    var audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.controls=false;
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
function instanciarContenedorAudio(id,ficheroAudio){
    let contAudio=document.createElement('div');
    let padre=document.getElementById(id);
    contAudio.innerHTML=`<audio id="audioPlayer" controls="false">
                            <source src="/assets/multimedia/${ficheroAudio}" type="audio/aac">
                            Tu navegador no admite la reproducción de audio.
                        </audio>
                        <div>
                            <button id="botonAudio" class="btn btn-multi"><img id="imgAudio" src="assets/img/iconoAudioInicio.svg" data-play="0"></button>
                        </div>`
    padre.appendChild(contAudio);
    asociarAudio();
}

function ponerVideoMarga(){
    let modal=document.getElementById("contenedorModal");
    modal.innerHTML=`
    <video id="videoPlayer" width="480" height="240">
    <source id="videoMP4" src="assets/multimedia/QSM_MARGA.mp4" type="video/mp4">
    <source id="videoWEBM" src="assets/multimedia/QSM_MARGA.webm" type="video/webm">
      Tu navegador no admite la reproducción de video.
  </video>
  <div>
  <button id="botonVideo" class="btn btn-multi"><img id="imgVideo" src="assets/img/IconPlay.svg" data-play="0"></button>
</div>`
asociarVideo();
}
function ponerVideoMontero(){
    let modal=document.getElementById("contenedorModal");
    modal.innerHTML=`
    <video id="videoPlayer" width="480" height="240">
    <source id="videoMP4" src="assets/multimedia/QSM_Montero.mp4" type="video/mp4">
    <source id="videoWEBM" src="assets/multimedia/QSM_Montero.webm" type="video/webm">
      Tu navegador no admite la reproducción de video.
  </video>
  <div>
  <button id="botonVideo" class="btn btn-multi"><img id="imgVideo" src="assets/img/IconPlay.svg" data-play="0"></button>
</div>`
asociarVideo();
}