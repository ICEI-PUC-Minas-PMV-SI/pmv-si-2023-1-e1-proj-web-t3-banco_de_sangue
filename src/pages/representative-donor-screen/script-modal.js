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

//MODAL ABRIR AGENDAMENTO
var openModalSchedule = document.getElementById("open-modal-schedule-donation");
var modalSchedule = document.getElementById("modal-schedule-donation");

openModalSchedule.addEventListener("click", function() {
  modalSchedule.style.display = "block";
});

var closeScheduleCancel = document.getElementsByClassName("register-section__button-div__cancel-schedule")[0];
var closeScheduleConfirm = document.getElementsByClassName("register-section__button-div__confirm-schedule")[0];

closeScheduleCancel.addEventListener("click", function() {
  modalSchedule.style.display = "none";
});
closeScheduleConfirm.addEventListener("click", function() {
  modalSchedule.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modalSchedule) {
    modalSchedule.style.display = "none";
  }
});

// MODAL EDITAR AGENDAMENTO
var openModalEditSchedule = document.getElementById("open-modal-edit-schedule");
console.log(openModalEditSchedule)
var modalEditSchedule = document.getElementById("modal-edit-schedule");

openModalEditSchedule.addEventListener("click", function() {
  modalEditSchedule.style.display = "block";
});

var closeScheduleClose = document.getElementById('schedule-modal-close__close')
var closeScheduleConfirm = document.getElementById('schedule-modal-close__confirm')
var closeScheduleCancel = document.getElementById('schedule-modal-close__cancel')
closeScheduleClose.addEventListener("click", function() {
  modalEditSchedule.style.display = "none";
});
closeScheduleConfirm.addEventListener("click", function() {
  modalEditSchedule.style.display = "none";
});
closeScheduleCancel.addEventListener("click", function() {
  modalEditSchedule.style.display = "none";
});
window.addEventListener("click", function(event) {
  if (event.target === modalEditSchedule) {
    modalEditSchedule.style.display = "none";
  }
});
