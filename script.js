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

    if ( el.target.classList.contains('swiper__expand') 
    || el.target.classList.contains('swiper__expand__arrow') 
    || el.target.classList.contains('swiper__expand__text') ) {
        
        let expand = document.querySelector('.swiper__expand__text');

        if ( expand.innerText == 'Показать все' ) {
            let showCell = document.querySelectorAll('.swiper__hidden');
            showCell.forEach( function(elem) {
                elem.style.display = 'flex';
            })

            expand.innerText = 'Скрыть';

            let arrow = document.querySelector('.swiper__expand__arrow');
            arrow.style.transform = 'scale(1, -1)';
        } else {
            let showCell = document.querySelectorAll('.swiper__hidden');
            showCell.forEach( function(elem) {
                elem.style.display = 'none';
            })

            expand.innerText = 'Показать все';

            let arrow = document.querySelector('.swiper__expand__arrow');
            arrow.style.transform = 'none';
            
            if ( window.innerWidth >= 1120 ) {
                showCell[0].style.display = 'flex';
                showCell[1].style.display = 'flex';
            }
        }
    }
})

if ( window.innerWidth <= 768 ) {
    const swiper = new Swiper('.swiper', {
        mousewheel: true,
        keyboard: true,
        pagination: {
          el: '.swiper-pagination',
        },
    });
}