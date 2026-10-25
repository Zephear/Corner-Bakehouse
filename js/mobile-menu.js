const modal = document.querySelector(".mobile-menu");
const modalBtnOpen = document.querySelector(".menu-btn-open");
const modalBtnClose = document.querySelector(".menu-btn-close");

const toggleModal = () => modal.classList.toggle("is-open");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);
