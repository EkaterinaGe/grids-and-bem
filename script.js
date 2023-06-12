document.addEventListener('click', function(el) {
    if ( el.target.classList.contains('menu__item') ) { 
        let menuAll = document.querySelectorAll('.menu__item');
        menuAll.forEach( function(elem) {
            elem.classList.remove('item_active');
        })
        el.target.classList.add('item_active');
    }

    if ( el.target.classList.contains('button__menu') || el.target.classList.contains('menu__img') ) {
        let menuMobile = document.querySelector('.menu-mobile');
        menuMobile.classList.add('menu-active');
    }

    if ( el.target.classList.contains('button__close') || el.target.classList.contains('close__img') ) {
        let menuMobile = document.querySelector('.menu-mobile');
        menuMobile.classList.remove('menu-active');
    }
})