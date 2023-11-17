//-----------------БУРГЕР МЕНЮ---------------------------
let iconMenu = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');

if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

document.addEventListener('click', (event) => {
   if (!event.target.closest('.menu__body') && !event.target.closest('.menu__icon')) {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
   }
});

//-----------------ПЕРЕНОС БЛОКА КНОПОК---------------------------
// Получаем ссылки на элементы
var headerButtons = document.querySelector('.header__buttons');

// Функция для перемещения кнопок внутрь блока menu__body
function moveButtons() {
   menuBody.appendChild(headerButtons);
}

// Проверяем ширину экрана и вызываем функцию при необходимости
function checkScreenWidth() {
   if (window.innerWidth <= 767) {
      moveButtons();
   }
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.onload = checkScreenWidth;
window.onresize = checkScreenWidth;


/*--------------------------------------------SUBMENU---------------------------------------------*/
function toggleSubmenu(event, submenuId, arrowId) {
   event.preventDefault();
   var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

   // Проверка ширины экрана
   if (screenWidth < 768) {
      var submenu = document.getElementById(submenuId);
      var arrow = document.getElementById(arrowId);
      submenu.classList.toggle("active");
      arrow.classList.toggle("rotated");
   }
}

/*--------------------------------------------Gallery sidebar---------------------------------------------*/
const galleries = document.querySelectorAll('.lightgallery-int');

// Проходим через каждый элемент галереи и инициализируем его
galleries.forEach(function (gallery) {
   lightGallery(gallery, {
      plugins: [lgZoom],
      speed: 500,
      download: false,
      closeOnTap: true,
      loop: false,
      hideControlOnEnd: true,
      alignThumbnails: 'middle',
   });
});