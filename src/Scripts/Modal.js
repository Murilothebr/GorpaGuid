function openModal(restaurante) {
    var modal = document.getElementById(`modal-${restaurante}`);
    modal.classList.add("active");
  }
  
  function closeModal(restaurante) {
    var modal = document.getElementById(`modal-${restaurante}`);
    modal.classList.remove("active");
  }
  