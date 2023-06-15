document.addEventListener('click', function(el) {
    if ( el.target.classList.contains('menu__item') ) { 
        let menuAll = document.querySelectorAll('.menu__item');
        menuAll.forEach( function(elem) {
            elem.classList.remove('item_active');
        })
        el.target.classList.add('item_active');
    }

    if ( el.target.id == 'menu-open' || el.target.id == 'menu_img-open' ) {
        let menuMobile = document.querySelector('.menu-mobile');
        menuMobile.classList.add('menu-active');
    }

    if ( el.target.id == 'menu-close' || el.target.id == 'menu_img-close' ) {
        let menuMobile = document.querySelector('.menu-mobile');
        menuMobile.classList.remove('menu-active');
    }
})