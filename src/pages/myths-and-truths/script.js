var openModalButton = document.getElementById("open-modal");
var modal = document.getElementById("modal");
console.log(modal)
console.log(openModalButton )
openModalButton.addEventListener("click", function() {
  modal.style.display = "block";
});
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});