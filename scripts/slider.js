document.querySelectorAll('.card__slider').forEach((slider) => {
    const imgs = slider.querySelectorAll('.card__slider-main-img');
    const btns = slider.querySelectorAll('.card__slider-button');

    const showSlide = (index) => {
        imgs.forEach((img, i) => {
            img.classList.toggle('card__slider-main-img--active', i === index);
        });
        btns.forEach((btn, i) => {
            btn.classList.toggle('card__slider-button--active', i === index);
        });
    };

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            showSlide(+(btn.dataset.index));
        });
    });
});