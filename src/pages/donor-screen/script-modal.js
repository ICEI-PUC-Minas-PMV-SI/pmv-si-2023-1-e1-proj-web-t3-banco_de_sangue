var openModalButton = document.getElementById("open-modal");
var modal = document.getElementById("modal");

openModalButton.addEventListener("click", function() {
  modal.style.display = "block";
});



window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

var openModalButtonDelete = document.getElementById("open-modal-delete-account");
var modalDelete = document.getElementById("modal-delete-account");
var closeButtonDelete = document.getElementsByClassName("close")[0];

openModalButtonDelete.addEventListener("click", function() {
  modalDelete.style.display = "block";
});

closeButtonDelete.addEventListener("click", function() {
  modalDelete.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modalDelete) {
    modalDelete.style.display = "none";
  }
});