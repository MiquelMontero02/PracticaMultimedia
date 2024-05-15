    let form=document.getElementById("Formulario");
    let boton=document.getElementById("botonEnviar");
    form.addEventListener('submit',function(event){
        event.preventDefault();
        if(!form.elements['Permisos'].checked){
            alert('Se deben aceptar los terminos y condiciones');
        }
        else{
            alert("El seu correu ha estat enviat correctament");
            boton.setAttribute('data-bs-dismiss', 'modal');
            boton.click();
            resetFormulario();
        }    
    });

function resetFormulario(){
    let form=document.getElementById("Formulario");
    form.innerHTML=`
    <p>Escribe tu correo electronico y recibe notificaciones sobre nuevas ferias y contenido relacionado!</p>
    <label for="email">Correo Electronico</label>
    <input id="email" type="email" required><br><br>
    <label for="Permisos">Acepta los <a href="">terminos y condiciones</a></label>
    <input name="Permisos" id="Permisos" type="checkbox"><br><br>
    <button id="botonEnviar" type="submit" class="btn btn-primary">Enviar Inscripción</button>`;
    boton=document.getElementById("botonEnviar");   
}
