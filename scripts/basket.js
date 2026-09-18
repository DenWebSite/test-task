document.querySelectorAll('.card__bascet-item').forEach((item) => {
    const plus = item.querySelector('.card__bascet-plus');
    const minus = item.querySelector('.card__bascet-minus');
    const total = item.querySelector('.card__bascet-total');

    if (!plus || !minus || !total) return;

    const min = 0;

    const render = (value) => {
        const next = Math.min(Math.max(value, min));
        total.textContent = next;
        minus.disabled = next <= min;
    };

    plus.addEventListener('click', () => {
        render(+(total.textContent) + 1);
    });

    minus.addEventListener('click', () => {
        render(+(total.textContent) - 1);
    });

    render((total.textContent) || 0);
});