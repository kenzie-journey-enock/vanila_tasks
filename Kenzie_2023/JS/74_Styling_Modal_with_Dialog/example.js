const modalController = document.querySelector("#modalController");
const openModalButton = document.querySelector("#openModal");
const closeModalButton = document.querySelector("#closeModal");

// Function to open the modal
openModalButton.addEventListener("click", () => {
    modalController.showModal();
});

// Function to close the modal
closeModalButton.addEventListener("click", () => {
    modalController.close();
});
