$(document).ready(function () {
    function checkVisibility() {
        $('.hidden').each(function () {
            const elementTop = $(this).offset().top;
            const viewportBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < viewportBottom - 100) {
                // Анимация: изменение прозрачности и вертикального положения
                $(this).fadeTo(750, 1).animate({ top: 0 }, { duration: 500, queue: false });
                $(this).removeClass('hidden'); // Убираем класс, чтобы не анимировать повторно
            }
        });
    }

    // Изначально прячем элементы
    $('.hidden').css({
        opacity: 0,
        position: 'relative',
        top: '50px', // Начальная позиция
    });

    // Проверка при загрузке страницы
    checkVisibility();

    // Проверка при прокрутке
    $(window).on('scroll', checkVisibility);
});


$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault(); // Отменяем стандартное поведение ссылки
  
      const target = this.hash; // Получаем целевой якорь
      const $target = $(target); // Привязываем к jQuery объекту
  
      $('html, body').animate({
        scrollTop: $target.offset().top
      }, 800, 'swing');
    });
  });

  $(document).ready(function() {
    // При наведении на элемент меню
    $('nav ul li a').hover(
      function() {
        $(this).css("color", "grey");
      },
      function() {
        $(this).css("color", "#fff");
      }
    );
  });