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
        let back = document.querySelector('.back');
        back.classList.add('back__active');
    }

    if ( el.target.id == 'menu-close' || el.target.id == 'menu_img-close' ) {
        let menuMobile = document.querySelector('.menu-mobile');
        menuMobile.classList.remove('menu-active');
        let back = document.querySelector('.back');
        back.classList.remove('back__active');
    }

    if ( el.target.classList.contains('feedback-open') ) { 
        let feedback = document.querySelector('.feedback');
        feedback.classList.add('feedback__active');
        let back = document.querySelector('.back');
        back.classList.add('back__active');
    }

    if ( el.target.id == 'feedback-close' || el.target.id == 'feedback_img-close' ) {
        let menuMobile = document.querySelector('.feedback');
        menuMobile.classList.remove('feedback__active');
        let back = document.querySelector('.back');
        back.classList.remove('back__active');
    }

    if ( el.target.classList.contains('equipment-types__swiper__expand') 
    || el.target.classList.contains('equipment-types__swiper__expand__arrow') 
    || el.target.classList.contains('equipment-types__swiper__expand__text') ) {
        
        let expand = document.querySelector('.equipment-types__swiper__expand__text');

        if ( expand.innerText == 'Показать все' ) {
            let showCell = document.querySelectorAll('.equipment-types__swiper__hidden');
            showCell.forEach( function(elem) {
                elem.style.display = 'flex';
            })

            expand.innerText = 'Скрыть';

            let arrow = document.querySelector('.equipment-types__swiper__expand__arrow');
            arrow.style.transform = 'scale(1, -1)';
        } else {
            let showCell = document.querySelectorAll('.equipment-types__swiper__hidden');
            showCell.forEach( function(elem) {
                elem.style.display = 'none';
            })

            expand.innerText = 'Показать все';

            let arrow = document.querySelector('.equipment-types__swiper__expand__arrow');
            arrow.style.transform = 'none';
            
            if ( window.innerWidth >= 1120 ) {
                showCell[0].style.display = 'flex';
                showCell[1].style.display = 'flex';
            }
        }
    }

    if ( el.target.classList.contains('appliances-types__swiper__expand') 
    || el.target.classList.contains('appliances-types__swiper__expand__arrow') 
    || el.target.classList.contains('appliances-types__swiper__expand__text') ) {
        
        let expand = document.querySelector('.appliances-types__swiper__expand__text');

        if ( expand.innerText == 'Показать все' ) {
            let showCell = document.querySelectorAll('.slide__hidden');
            showCell.forEach( function(elem) {
                elem.style.display = 'block';
            })

            expand.innerText = 'Скрыть';

            let arrow = document.querySelector('.appliances-types__swiper__expand__arrow');
            arrow.style.transform = 'scale(1, -1)';
        } else {
            let showCell = document.querySelectorAll('.slide__hidden');
            showCell.forEach( function(elem) {
                elem.style.display = 'none';
            })

            expand.innerText = 'Показать все';

            let arrow = document.querySelector('.appliances-types__swiper__expand__arrow');
            arrow.style.transform = 'none';
            
            if ( window.innerWidth >= 1120 ) {
                showCell[0].style.display = 'flex';
                showCell[1].style.display = 'flex';
            }
        }
    }
})

let swiper = undefined;
let swiper2 = undefined;
let swiper3 = undefined;
addEventListener('resize', function() {
    if ( window.innerWidth <= 768 ) {
        swiper = new Swiper('.swiper1', {
            mousewheel: true,
            keyboard: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
        });
        swiper2 = new Swiper('.swiper2', {
            mousewheel: true,
            keyboard: true,
            pagination: {
              el: '.swiper-pagination',
            },
        });
        swiper3 = new Swiper('.swiper3', {
            mousewheel: true,
            keyboard: true,
            pagination: {
              el: '.swiper-pagination',
            },
        });
    } else {
        swiper.destroy();
        swiper = undefined;
        document.querySelector('.swiper-pagination').innerHTML = '';
    }
})
