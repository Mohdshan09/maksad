document.addEventListener("DOMContentLoaded", function() {
    let timerElement = document.getElementById("timer");
    let explosionElement = document.getElementById("explosion");
    let countdown = 5;

    let interval = setInterval(() => {
        countdown--;
        timerElement.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(interval);
            timerElement.style.display = "none";
            explosionElement.style.display = "flex";
        }
    }, 1000);
});
