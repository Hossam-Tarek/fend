/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const list = document.querySelector("#navbar__list");
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Check if an element in in the viewport or not.
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.top < window.innerHeight && rect.left >= 0
    );
}

// Add header to navbar for each section in the html file.
function addToNav(section) {
    const listItem = document.createElement("li");

    // Listener for scrolls to detect what element is active and what's not.
    document.addEventListener("scroll", function() {
        const sectionName = section.getAttribute("data-nav");
        if (isInViewport(section)) {
            section.classList.add("highlighted");
        } else {
            section.classList.remove("highlighted");
        }
    });

    listItem.textContent = section.getAttribute("data-nav");
    listItem.className = "menu__link";
    listItem.addEventListener("click", function() {
        section.scrollIntoView({behavior: "smooth", block: "end"});
    });

    fragment.appendChild(listItem);
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach(addToNav);
list.appendChild(fragment);
