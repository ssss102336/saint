function showCategory(category) {

    const categories = document.querySelectorAll(".category");

    categories.forEach(function(section) {

        section.style.display = "none";

    });


    const selected = document.getElementById(category);

    if (selected) {

        selected.style.display = "block";

        selected.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}



function showDescription(text) {

    const box = document.getElementById("description");

    box.innerHTML = text;

    box.classList.add("show");


    setTimeout(function() {

        box.classList.remove("show");

    }, 5000);

}



/* 페이지가 처음 열렸을 때 */

window.addEventListener("DOMContentLoaded", function() {

    const hash = window.location.hash;


    if (hash) {

        const category = hash.substring(1);

        showCategory(category);

    }

});