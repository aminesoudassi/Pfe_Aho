'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btn_SignUp = document.querySelector('.show-modal-SignUp');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// openModalSignUp
// const openModalSignUp = function () {
//   btn_SignUp.classList.remove('hidden');
//   btn_SignUp.classList.add('hidden');

//   const closeModal = function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//   };
// }
// for (let i = 0; i < btnsOpenModal.length; i++)
// btn_SignUp[i].addEventListener('click', openModalSignUp);
