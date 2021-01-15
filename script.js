'use strict';

const btns = document.querySelectorAll('.show-modal');
const ovrly = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');

const hideMsg = function () {
  modal.classList.add('hidden');
  ovrly.classList.add('hidden');
};

const showMsg = function () {
  modal.classList.remove('hidden');
  ovrly.classList.remove('hidden');

  // document.addEventListener('keydown', function (e) {
  //   if (e.key === 'Escape') {
  //     hideMsg();
  //   }
  // });
};

// click buttons to popup the modal
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', showMsg);
}

// Show up the popup window when DOM loaded
window.addEventListener('DOMContentLoaded', function (e) {
  showMsg();
});

// 3 ways to close the popup
btnCloseModal.addEventListener('click', hideMsg);

ovrly.addEventListener('click', hideMsg);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideMsg();
  }
});
