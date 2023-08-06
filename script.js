window.addEventListener('scroll', function () {
    var menu__item1 = document.querySelector('.menu__item1');
    var menu__item2 = document.querySelector('.menu__item2');
    var menu__item3 = document.querySelector('.menu__item3');
    var threshold1 = 0;
    var threshold2 = 400;
    var threshold3 = 800;
    var scrollHeight = window.pageYOffset;

    if (scrollHeight >= threshold1 && scrollHeight < threshold2) {
        menu__item1.classList.add('active');
        menu__item2.classList.remove('active');
        menu__item3.classList.remove('active');
    } else if (scrollHeight >= threshold2 && scrollHeight < threshold3) {
        menu__item1.classList.remove('active');
        menu__item2.classList.add('active');
        menu__item3.classList.remove('active');
    } else if (scrollHeight >= threshold3) {
        menu__item1.classList.remove('active');
        menu__item2.classList.remove('active');
        menu__item3.classList.add('active');
    } else {
        menu__item1.classList.remove('active');
        menu__item2.classList.remove('active');
        menu__item3.classList.remove('active');
    }
});
