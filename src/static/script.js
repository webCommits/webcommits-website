function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    // sidebar.style.display = 'flex'
    sidebar.classList.add("open");
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar')
    // sidebar.style.display = 'none'
    sidebar.classList.remove("open");
}

function showTopButton() {
    console.log("Loaded");

    const toTop = document.querySelector('.totop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add('active')
        } else {
            toTop.classList.remove('active')
        }
    })
}

document.addEventListener('DOMContentLoaded', function() {
    showTopButton();
})

const observer = new IntersectionObserver((entries => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}));

document.addEventListener('DOMContentLoaded', function() {
    const hiddenElements = document.querySelectorAll(".animate");
    hiddenElements.forEach((el) => observer.observe(el));
    startConfigurator();
});

function toggleconf() {
    const configurator = document.querySelector(".configurator");
    if (configurator.style.display === "none") {
        configurator.style.display = "flex";
    } else {
        configurator.style.display = "none";
    }
}

const looks = [
    "Classic",
    "Mascara",
    "Volumen"
];

const eyes = [
    "Natural",
    "Cat",
    "Doll",
    "Open"
];

const questions = [
    "Möchtest du einen natürlichen Look?",
    "Welche Länge bevorzugst du?",
    "Hast du eher runde oder spitze Augen?",
    "Wie groß ist dein Augenabstand?"
];

const answers = [
    ["Ja", "Nein"],
    ["Kurz", "Lang"],
    ["Rund", "Spitz"],
    ["Kurz", "Weit"]
];

const images = [
    ["long.png", "unnatural.png"],  // Stage 0
    ["short.png", "long.png"],         // Stage 1
    ["round.png", "spitz.png"],        // Stage 2
    ["close.png", "wide.png"]          // Stage 3
];

const resultImages = [
    "natural.png",  // Natural Look
    "cat.png",      // Cat Eyes
    "doll.png",     // Doll Eyes
    "open.png"      // Open Eyes
];

let erg_look = 0;
let erg_eyes = 0;
let stage = 0;

function startConfigurator() {
    const question = document.querySelector("#question");
    const answerdiv = document.querySelector("#answers");
    const imageDiv = document.querySelector("#images");

    function loadNextQuestion() {
        question.textContent = questions[stage];
        answerdiv.innerHTML = "";
        imageDiv.innerHTML = "";
        
        if (stage >= questions.length) {
            question.textContent = "";
            showResult();
            return;
        }

        // Load corresponding images for the current stage
        const img1 = document.createElement("img");
        const img2 = document.createElement("img");
        img1.src = `/static/images/${images[stage][0]}`;
        img2.src = `/static/images/${images[stage][1]}`;
        img1.alt = answers[stage][0];
        img2.alt = answers[stage][1];
        imageDiv.appendChild(img1);
        imageDiv.appendChild(img2);

        answers[stage].forEach((answerText, index) => {
            const answerButton = document.createElement("button");
            answerButton.textContent = answerText;
            answerdiv.appendChild(answerButton);

            answerButton.addEventListener("click", () => {
                handleAnswerClick(answerText);
                console.log(erg_look);
                console.log(erg_eyes);
                stage += 1;
                loadNextQuestion();
            });
        });
    }

    loadNextQuestion();
}

function handleAnswerClick(answerText) {
    if (stage === 0) {
        // Frage 1: Natürlicher Look?
        erg_look = (answerText === "Ja") ? 0 : 1;
    } else if (stage === 1) {
        // Frage 2: Länge
        if (answerText === "Kurz") {
            erg_look = (erg_look === 0) ? 0 : 1;
        } else if (answerText === "Lang") {
            erg_look = (erg_look === 0) ? 1 : 2;
        }
    } else if (stage === 2) {
        // Frage 3: Augenform (Nur speichern)
        erg_eyes = (answerText === "Rund") ? 0 : 1;
    } else if (stage === 3) {
        // Frage 4: Augenabstand (Hier kombinieren wir Augenform mit Abstand)
        if (answerText === "Weit") {
            erg_eyes = (erg_eyes === 0) ? 0 : 2;
        } else if (answerText === "Kurz") {
            erg_eyes = (erg_eyes === 0) ? 1 : 3;
        }
    }
}

function showResult() {
    const result = document.querySelector(".result");
    result.innerHTML = `
        <h2>Ich empfehle dir:</h2>
        <p>${looks[erg_look]} Look mit ${eyes[erg_eyes]} Augenform</p>
        <img src="/static/images/${resultImages[erg_eyes]}" alt="${eyes[erg_eyes]} Look">
        <p>Preise und Terminbuchungen findest du <a href="#kontakt">hier</a></p>
    `;
    result.style.display = "flex";
}
