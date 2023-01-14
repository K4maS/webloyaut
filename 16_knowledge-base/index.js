// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [48.87231699198812, 2.3542153164246282],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15
  });

  var myPlacemark = new ymaps.Placemark([48.87231699198812, 2.3542153164246282], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/subtract.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);
}


var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999)-999-99-99")
im.mask(selector);


