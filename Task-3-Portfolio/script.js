// ---------- Say Hello Button ----------

function showMessage() {
    alert("Hello! Thank you for visiting my portfolio.");
}


// ---------- Active Navigation Link ----------

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.style.color = "white";
        });

        this.style.color = "#667eea";

    });

});
