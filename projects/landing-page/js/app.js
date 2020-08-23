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
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.top < window.innerHeight && rect.left >= 0
    );
}


function addToNav(section) {
    const listItem = document.createElement("li");

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

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


