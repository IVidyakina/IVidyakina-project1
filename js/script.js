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
            item.style.transform = 'scale(1.5)';
        });
        item.addEventListener('mouseleave', () => {
            // Изображение делаем стандартного размера
            item.style.transform = 'scale(1)';

        });

    });
    //задание 3.4
    const masterContainer = document.querySelector(".master");
    if (masterContainer) {
        const dataTitleMasters = [
            "Наталья Кузнецова",
            "Марина Илюшкина",
            "Татьяна Васильева",
            "Елизавета Ефремова",
        ];
        const titleMasters = masterContainer.querySelectorAll(".slider__master");
        titleMasters.forEach((item, index) => {
            item.textContent = dataTitleMasters[index];
        });
    }

    // появление модальной формы
    const headerLoginButton = document.querySelector(".header__login-button");
    const modalPopup = document.querySelector(".dialog");
    if (headerLoginButton && modalPopup) {
        headerLoginButton.addEventListener("click", () => {
            modalPopup.removeAttribute("hidden");
        });
    }
    window.addEventListener("click", (event) => {

        if (event.target === modalPopup) {
            modalPopup.setAttribute("hidden", true);
        }
    });
    const closeModalButton = document.querySelector(".popup__close");
    closeModalButton.addEventListener("click", () => {
        modalPopup.setAttribute("hidden", true);
    });
    // 3.5 Динамический вывод карточек
        const cardsReviews = document.querySelector('.reviews');
    if (cardsReviews) {
        const reviewsList = cardsReviews.querySelector('.reviews__list');
   
        const cardsReviewsData = {
            reviews1: {
                subtitle: 'Екатерина',
                text: 'Была на массаже, могу написать только положительные впечатления ☺️'
            },
            reviews2: {
                subtitle: 'Анастасия',
                text: 'Хорошее место, приятный персонал, сервис салонный, обстановка располагает на релакс'
            },
            reviews3: {
                subtitle: 'Анна',
                text: 'Хороший спа, уютная атмосфера и кабинеты , разнообразные программы, можно выбрать на любой вкус '
            },
            reviews4: {
                subtitle: 'Мария',
                text: 'Хороший спа, уютная атмосфера и кабинеты , разнообразные программы, можно выбрать на любой вкус '
            }
        }

    
        const createCard = (subtitle, text) => {
          
            const card = `
            <li class="reviews__item">
            <h3 class="reviews__subtitle">${subtitle}</h3>
                        <p class="reviews__text"> ${text} </p>

            </li>
        `;
            return card;
        }
        for (const cardKey in cardsReviewsData) {
            const card = cardsReviewsData[cardKey];
            const cardElement = createCard(card.subtitle, card.text);
            reviewsList.insertAdjacentHTML('beforeend', cardElement);
        }
    }





});