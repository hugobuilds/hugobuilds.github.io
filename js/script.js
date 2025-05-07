// Section pour la modale (à supprimer à l'avenir)
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("close-btn");

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
});