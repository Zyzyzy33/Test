function startRecipe() {
    document.getElementById("landing").style.display = "none";
    document.getElementById("recipe").style.display = "block";
    document.body.classList.add("recipe-mode");
    goToStep(1);
}

function goToStep(num) {
    // Hide all steps
    for (let i = 1; i <= 7; i++) {
        document.getElementById("step" + i).style.display = "none";
    }
    // Show the current step
    document.getElementById("step" + num).style.display = "block";
}

function goHome() {
    document.getElementById("recipe").style.display = "none";
    document.getElementById("landing").style.display = "flex";
    document.body.classList.remove("recipe-mode");
}