'use strict';
// tabs
const tabs = document.querySelectorAll(".preview__item--click");
const tabsContent = document.querySelectorAll(".tabs__conteiner");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabsContent.forEach((item, i) => {
      item.classList.remove("active");
    });
    tabs.forEach((tab, i) => {
      tab.classList.remove("active");
    });
    tabsContent[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});

//burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('.navigation');
const overlay = document.querySelector('.overlay');

const toggleMenu = () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
  overlay.classList.toggle('active');
};
const closeMenu = () => {
  nav.classList.remove('active');
  burger.classList.remove('active');
  overlay.classList.remove('active');
}
burger.addEventListener('click', toggleMenu);
nav.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Input search vizible
const showBtn = document.querySelector('.top__form-btn');
const inputSearch = document.querySelector('.top__form-input');
showBtn.addEventListener('click', (e) => {
  e.preventDefault();
  inputSearch.classList.toggle('active');
  inputSearch.value = '';
});

// thumb positive vs negative

function changeNumber() {
  const positives = document.querySelectorAll('.thumb--pos');
  const negatives = document.querySelectorAll('.thumb--neg');
  const numbers = document.querySelectorAll('.info__num-value');
  const signs = document.querySelectorAll('.info__num-sign');
  let numberValue = 1;
  let summury;
  let val;

  const changeColor = () => {
    numbers.forEach((num, i) => {
      val = Number.parseFloat(numbers[i].innerHTML);
      num.style.color = val < 0 ? num.style.color = '#ff4f52' : '#3dc47e';
    });
  };
  const addSign = () => {
    numbers.forEach((num, i) => {
      val = Number.parseFloat(numbers[i].innerHTML);
      signs.forEach(sign => {
        val > 0 ? signs[i].innerHTML = '+' : signs[i].innerHTML = '';
      });
    });
  };

  //changeSign();
  positives.forEach((pos, index) => {
    pos.addEventListener('click', () => {
      numbers.forEach((num, i) => {
        val = Number.parseFloat(numbers[index].innerHTML);
        summury = val + numberValue;
      });
      numbers[index].innerHTML = ` ${summury}`;
      changeColor();
      addSign();
    });
  });
  negatives.forEach((neg, index) => {
    neg.addEventListener('click', () => {
      numbers.forEach((num, i) => {
        val = Number.parseFloat(numbers[index].innerHTML);
        summury = val - numberValue;
      })
      numbers[index].innerHTML = `${summury}`;
      changeColor();
      addSign();
    });
  });
}
changeNumber();

// checked
const checkBox = document.querySelectorAll('.card__label');

const toggleCheckboxChecked = () => {
  checkBox.forEach((item) => {
    item.addEventListener('touchmove', (event) => {
      let target = event.target;
      target.toggleAttribute('checked');
    });
    item.addEventListener('click', (event) => {
      let target = event.target;
      target.toggleAttribute('checked');
    })
  });
};
toggleCheckboxChecked();

// slick slider
import $, { event, fn } from "jquery";
import "slick-carousel";

$('.slider').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  speed: 400,
  responsive: [{

    breakpoint: 600,
    settings: {
      dots: true,
      swipe: true,
      touchMove: true,
    },
    breakpoint: 500,
    settings: {
      dots: false,
      speed: 200,
    }
  }]
});

$('.carusel').slick({
  dots: false,
  arrows: true,
  autoplay: true,
  speed: 300,
  responsive: [{

    breakpoint: 375,
    settings: {
      swipe: true,
      touchMove: true,
      autoplay: false,

    },

  }]
})

