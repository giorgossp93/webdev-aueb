function toggleMenu() {
    let slider = document.querySelector('.slider');
    let menuToggle = document.querySelector('.toggle-menu');
    let menuToggleDisplay = window.getComputedStyle(menuToggle).getPropertyValue('display');

    if (menuToggleDisplay === 'none') {
        slider.style.display = 'none';
        menuToggle.style.display = 'block';
    } else {
        slider.style.display = 'block';
        menuToggle.style.display = 'none';
    }
}