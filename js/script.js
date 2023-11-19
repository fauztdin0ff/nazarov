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
document.addEventListener('DOMContentLoaded', function () {
   const galleries = document.querySelectorAll('.lightgallery-int');

   // Проверяем, есть ли галереи на странице
   if (galleries.length > 0) {
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
   } else {
   }
});

/*--------------------------------------------Animation text---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   setTimeout(function () {
      let text = document.getElementById('text');

      if (text) {
         let originalText = text.innerHTML;
         text.innerHTML = '';

         function typeText(index) {
            text.innerHTML = originalText.substr(0, index);
            if (index < originalText.length) {
               setTimeout(function () {
                  typeText(index + 1);
               }, 100); // Скорость печати (в миллисекундах)
            }
         }

         typeText(0);
      }
   }, 100); // Задержка в 1 секунду перед запуском
});

//-------------------------------Прелоадер и плавное появление блоков---------------------------------
if (document.readyState === "complete") {
   init();
} else {
   window.addEventListener("load", init);
}

function init() {
   let preloader = document.querySelector('.preloader');
   if (preloader) {
      preloader.classList.add('hide-preloader');
      preloader.classList.add('hidden-preloader');
   }

   //плавное появление
   function onEntry(entry) {
      entry.forEach(change => {
         if (change.isIntersecting) {
            change.target.classList.add('element-show');
         }
      });
   }
   let options = { threshold: [0.1] };
   let observer = new IntersectionObserver(onEntry, options);
   let elements = document.querySelectorAll('.element-animation');
   for (let elm of elements) {
      observer.observe(elm);
   };
}

