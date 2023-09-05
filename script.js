function imgSlider(e) {
    document.querySelector('#phone').src = e;
}

function mudarCor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}