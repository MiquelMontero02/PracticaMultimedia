function addGoBackBtn(){
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function () {
        cargarMenuHeader();
        cargarContenidoOriginal();
    });
}