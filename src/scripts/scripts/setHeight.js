/* Создание переменной vh для задания высоты */
setHeightProperty();
    
window.addEventListener('resize', () => {
    setHeightProperty();
});

function setHeightProperty() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
} 