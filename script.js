'use strict';

const modal = document.getElementById('test');
const overlay = document.querySelector('.overlay');
const btnCloseModalId = document.getElementById('close-modal-id');
const btnsOpenModalId = document.getElementById('show-modal-id');

btnsOpenModalId.onclick = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

btnCloseModalId.onclick = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}



// ##########################
// ##########################
// ##########################
// openModalSignUp
const BtnSignUp = document.getElementById('For-Sign-Up');
const modalSignUp = document.getElementById('test1');
const btnOpenModalIdSignUp = document.getElementById('open-modal-id-SignUp');
const btnCloseModalIdSignUp = document.getElementById('close-modal-id-SignUp');
const btnReturnToSignUp = document.getElementById('return-SignUp-id');

btnOpenModalIdSignUp.onclick = function () {
    modalSignUp.classList.remove('hidden');
}


btnCloseModalIdSignUp.onclick = function () {
  modalSignUp.classList.add('hidden');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnReturnToSignUp.onclick = function () {
  modalSignUp.classList.add('hidden');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
