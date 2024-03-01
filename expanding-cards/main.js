const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click',() => {
        removeClassActive();
        card.classList.add('active');
    });
});

const removeClassActive = () => {
    cards.forEach(card => {
        card.classList.remove('active');
    })
}