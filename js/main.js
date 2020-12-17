var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener('click', function(){
    document.querySelector(".header__menu").classList.add('header__menu--visible');
    document.querySelector(".header__overlay").classList.add('header__overlay--visible');
    document.body.style.overflow = "hidden";
  });

document.addEventListener('keyup', closeMenu);
document.body.querySelector(".header__overlay").addEventListener('click', closeMenu);
document.body.querySelector(".header__close").addEventListener('click', closeMenu);

function closeMenu(e) {
    if (e.key === "Escape" || e.type === 'click') {
      document.querySelector(".header__menu").classList.remove("header__menu--visible");
      document.querySelector(".header__overlay").classList.remove("header__overlay--visible");
      document.body.style.overflow = "auto";
    };
    event.preventDefault();
}

var tabsItem = document.querySelectorAll(".trends__tab");
var contentsItem = document.querySelectorAll(".trends__content");

for (var i = 0 ; i < tabsItem.length; i++) {
  tabsItem[i].addEventListener('click' , function() {    
    contentsItem.forEach(function(element){
      element.classList.remove('trends__content--active')
    });
    tabsItem.forEach(function(element){
      element.classList.remove('trends__tab--active')
    });
    this.classList.add('trends__tab--active');
    var activeContent = document.querySelector('#' + this.getAttribute('data-target'));
    activeContent.classList.add('trends__content--active');
  }) ; 
}

var mySwiper = new Swiper('.reviews__slider', {
  loop: true,
  spaceBetween: 100,
  autoHeight: true,
  resistance: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})

var mySwiper2 = new Swiper('.stories__slider', {
  spaceBetween: 22,
  autoHeight: true,
  resistance: true,
  
  navigation: {
    nextEl: '.stories__button--next',
    prevEl: '.stories__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  on: {
    slideChange: function () {
      var count = document.querySelectorAll('.stories__slide').length;
      if (this.realIndex == 0) {
        document.querySelector('.stories__button--prev').src = 'img/svg/button-prev.svg';
        document.querySelector('.stories__button--next').src = 'img/svg/button-next.svg';
      }else if (this.realIndex == count-1) {
        document.querySelector('.stories__button--next').src = 'img/svg/button-next-a.svg';
        document.querySelector('.stories__button--prev').src = 'img/svg/button-prev-a.svg';
      }else {
        document.querySelector('.stories__button--next').src = 'img/svg/button-next.svg';
        document.querySelector('.stories__button--prev').src = 'img/svg/button-prev-a.svg';
      }
    },
  }
})

document.querySelector(".reviews__slider").addEventListener("mouseover", function() {
    mySwiper.autoplay.stop();
});

document.querySelector(".reviews__slider").addEventListener("mouseout", function() {
    mySwiper.autoplay.start();
});