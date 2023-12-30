const slides = [
    {
        image: "slide1.jpg",
        tagLine:
            "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine:
            "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];

// Liste des variables //
const dots = document.querySelector(".dots");
const ArrowRight = document.querySelector(".arrow_right");
const ArrowLeft = document.querySelector(".arrow_left");
const img = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
let index = 0;

// Affichage des dots //
function displayDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dots.appendChild(dot);
        if (i == index) {
            dot.classList.add("dot_selected");
        }
    }
}
displayDots();

// Action click droit //
function clickRight() {
    ArrowRight.addEventListener("click", () => {
        changeSlide(1);
    });
}
clickRight();

// Action click gauche //
function clickLeft() {
    ArrowLeft.addEventListener("click", () => {
        changeSlide(-1);
    });
}
clickLeft();

// Fonction pour changer de diapositive //
function changeSlide(direction) {
    const slidesDots = document.querySelectorAll(".dot");
    slidesDots[index].classList.remove("dot_selected");

    // Assure que le carrousel est infini //
    index = (index + direction + slides.length) % slides.length;

    img.src = "./assets/images/slideshow/" + slides[index].image;
    tagLine.innerHTML = slides[index].tagLine;
    slidesDots[index].classList.add("dot_selected");
}
