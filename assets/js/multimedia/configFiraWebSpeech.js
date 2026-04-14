function configureFiraWebSpeech(evento, descripcionEvento) {
    if(evento.location.address.addressLocality=="Manacor"){
        instanciarContenedorAudio("multiContent","AudioFiraManacor.aac");
    }
    else{
        let contMultimedia=document.getElementById("multiContent");
        let button=document.createElement("button");
        button.classList.add("btn-multi","btn");
        button.innerHTML="<img src='assets/img/iconoAudioInicio.svg'>"
        button.id="SpeechButton";
        contMultimedia.appendChild(button);
        asociarWebSpech(button.id,descripcionEvento);
    }
}