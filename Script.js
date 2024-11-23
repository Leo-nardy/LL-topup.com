// Gestion de l'envoi du formulaire
document.getElementById("recharge-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const userId = document.getElementById("user-id").value;
    const service = document.getElementById("service").value;
    const amount = document.getElementById("amount").value;

    alert(`Rechargement demandé :\nID : ${userId}\nService : ${service}\nMontant : ${amount}`);
});