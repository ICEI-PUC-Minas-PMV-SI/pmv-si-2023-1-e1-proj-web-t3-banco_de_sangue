//MODAL DE EDITAR CONTA

var openModalButton = document.getElementById("open-modal");
var modal = document.getElementById("modal-edit-account");

openModalButton.addEventListener("click", function() {
  modal.style.display = "block";
});
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

//MODAL DE ENCERRAR CONTA

var openModalButtonDelete = document.getElementById("open-modal-delete-account");
var modalDelete = document.getElementById("modal-delete-account");

var closeButtonDelete = document.getElementById("close-delete-modal-cancel");
var closeButtonDeleteAndConfirm = document.getElementById("close-delete-modal-confirm");


openModalButtonDelete.addEventListener("click", function() {
  modalDelete.style.display = "block";
});


closeButtonDelete.addEventListener("click", function() {
  modalDelete.style.display = "none";
});
closeButtonDeleteAndConfirm.addEventListener("click", function() {
  modalDelete.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modalDelete) {
    modalDelete.style.display = "none";
  }
});


//MODAL ABRIR MENU DE NAVEGAÇÃO
var openModalNavegate = document.getElementById("open-modal-navigate");
var modalNavigate = document.getElementById("modal-navigate");

openModalNavegate.addEventListener("click", function() {
  modalNavigate.style.display = "block";
});

var closeNavigate = document.getElementsByClassName("lateral-menu-content__close")[0];
closeNavigate.addEventListener("click", function() {
  modalNavigate.style.display = "none";
});


window.addEventListener("click", function(event) {
  if (event.target === modalNavigate) {
    modalNavigate.style.display = "none";
  }
});