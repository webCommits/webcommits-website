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

function animateHeader() {
    console.log("Loaded");

    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 8) {
            header.classList.add('full')
        } else {
            header.classList.remove('full')
        }
    })
}

document.addEventListener('DOMContentLoaded', function() {
    showTopButton();
    animateHeader();
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
});
