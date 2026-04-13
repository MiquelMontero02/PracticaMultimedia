async function cargarMenuHeader(){
    const menuHeader = await fetchContent('./assets/templates/menuHeader.html');
    const header = document.querySelector('header');
    const menuHeaderContainer = document.createElement('div');

    menuHeaderContainer.id = 'menuHeader';
    menuHeaderContainer.classList.add('container', 'd-flex', 'align-items-center', 'justify-content-end');
    menuHeaderContainer.innerHTML = menuHeader;
    header.appendChild(menuHeaderContainer);
}