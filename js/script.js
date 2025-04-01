'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')

    // * 1. Начало
    // * 2. Получаем все элменты (изображение или текст).
    // * 3. Для каждого изображения (проверяем есть ли такие изображения):
    // *    3.1. Добавляем обработчик наведедния курсора на изображение:
    // *        3.1.1. Да:
    // *            3.1.1.1 увеличиваем картинку при наведении.
    // *            3.1.2. Нет: продолжаем.
    // *    3.2. Добавляем обработчик курсор уходит с изображения:
    // *        3.3.1 Да:
    // *            3.3.1.1. Скрываем элемент с увеличением.
    // *        3.3.2. Нет: продолжаем.
    // * 4. Конец

    const serviceImg = document.querySelectorAll(".section__service-image");

    serviceImg.forEach((item, index) => {

        item.addEventListener('mouseover', () => {
            console.log('Мышка наведена на изображение можно ее увеличить');
            item.style.transform= 'scale(1.5)';
        });
        item.addEventListener('mouseleave', () => {
            // Изображение делаем стандартного размера
            item.style.transform= 'scale(1)';
            
        });
        
    });
});