function generateSwiperItems( data) {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    data.forEach(item => {
        const swiperSlide = document.createElement('div');

        const swiperTittle = document.createElement('h3');
        const swiperDescription = document.createElement('p');
        const swiperDate = document.createElement('div');
        
        swiperSlide.classList.add('swiper-slide','d-flex','flex-column','justify-content-end','event-item');
        swiperDate.classList.add('price','align-self-start');
        swiperDescription.classList.add('description');
        
        swiperTittle.textContent = item.tittle;
        swiperDescription.textContent = item.description;
        swiperDate.textContent = item.startDate;

        swiperSlide.style.backgroundImage = `url(${item.image})`;
        swiperSlide.setAttribute('data-image', item.image);
        

        swiperSlide.appendChild(swiperDate);
        swiperSlide.appendChild(swiperTittle);
        swiperSlide.appendChild(swiperDescription);

        swiperWrapper.appendChild(swiperSlide);
    });
}