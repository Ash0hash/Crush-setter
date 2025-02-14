
  // Handle "Yes" button click to redirect to another page
document.getElementById("btn-yes").addEventListener("click", function () {
    window.location.href = "successHOD.html";  // Redirect to the success page
});

// Handle "No" button to move it randomly on the screen
document.getElementById("btn-no").addEventListener("mouseover", function () {
    let btnNo = document.getElementById("btn-no");
    btnNo.style.position = "absolute";
    btnNo.style.left = Math.floor(Math.random() * 80) + "%";
    btnNo.style.top = Math.floor(Math.random() * 80) + "%";
});