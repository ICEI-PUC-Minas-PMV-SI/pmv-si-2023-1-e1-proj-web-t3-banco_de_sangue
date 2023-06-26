//MODAL DE EDITAR CONTA
const buttonSubmitProfileChanges = document.getElementById('button-confirm-edit-profile')
buttonSubmitProfileChanges.addEventListener('click', function() {
  const inputEditName = document.getElementById('edit-profile-name').value
  const inputEditEmail = document.getElementById('edit-profile-email').value
  const inputEditCellphone = document.getElementById('edit-profile-cellphone').value
  const inputEditWeight = Number(document.getElementById('edit-profile-weight').value)
  const inputEditBornAt = document.getElementById('edit-profile-born-at').value
  const inputEditBloodType = document.getElementById('edit-profile-blood-type').value
  const inputEditCity = document.getElementById('edit-profile-city').value

  const verifyAndReplace = (newValue, currentValue) => {
    const wrongValues = ['', 0, null]
    if (wrongValues.includes(newValue)) {
      return currentValue
    }
    return newValue
  }
  newProfile.name = verifyAndReplace(inputEditName, newProfile.name)
  newProfile.email = verifyAndReplace(inputEditEmail, newProfile.email)
  newProfile.cellphone = verifyAndReplace(inputEditCellphone, newProfile.cellphone)
  newProfile.weight = verifyAndReplace(inputEditWeight, newProfile.weight)
  newProfile.bornAt = verifyAndReplace(inputEditBornAt, newProfile.bornAt)
  newProfile.bloodType = verifyAndReplace(inputEditBloodType, newProfile.bloodType)
  newProfile.city = verifyAndReplace(inputEditCity, newProfile.city)

  if(newProfile.bornAt.includes('-')) {
    const splitData = newProfile.bornAt.split('-');
    const formatedBornAt = splitData[2] + '/' + splitData[1] + '/' + splitData[0];
    newProfile.bornAt = formatedBornAt 
  }
  editUser(user.id, newProfile)
  location.reload();
})

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
