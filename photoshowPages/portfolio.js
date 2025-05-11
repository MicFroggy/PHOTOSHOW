$(document).ready(function() {
    // Обработка кликов по фильтрам
    $('.filter-btn').click(function() {
        // Удаляем активный класс у всех кнопок
        $('.filter-btn').removeClass('active');
        // Добавляем активный класс текущей кнопке
        $(this).addClass('active');
        
        // Получаем тип проекта
        const filter = $(this).data('filter');
        
        // Скрываем все секции
        $('.projects-section').removeClass('active').hide();
        
        // Показываем нужную секцию с анимацией
        setTimeout(() => {
            $(`#${filter}`).show().addClass('active');
        }, 300);
    });

    // Кнопка "Наверх"
    $('#backToTop').click(function() {
        $('html, body').animate({scrollTop: 0}, 500);
    });
});

$(document).ready(function(){
    // При наведении мыши на ссылку в меню навигации
    $('.navbar a').hover(
      function() {
        $(this).css("color", "grey");
      },
      function() {
        $(this).css("color", "#fff");
      }
    );
  });