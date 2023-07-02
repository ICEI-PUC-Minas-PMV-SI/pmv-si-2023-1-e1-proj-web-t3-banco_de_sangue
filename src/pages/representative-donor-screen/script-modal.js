//MODAL ABRIR MENU DE NAVEGAÇÃO
var openModalNavegate = document.getElementById("open-modal-navigate");
var modalNavigate = document.getElementById("modal-navigate");

openModalNavegate.addEventListener("click", function() {
  modalNavigate.style.display = "block";
});

var closeNavigate = document.getElementsByClassName("lateral-menu-content__close")[0];
closeNavigate.addEventListener("click", function() {
  modalNavigate.style.display = "none";
  window.location.reload();
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
