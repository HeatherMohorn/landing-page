
function getSections(){
  return document.querySelectorAll("section");
}

function getNavNames(){
  var navNames = [];
  var sections = getSections();
  for (let i = 0; i < sections.length; i++){
    navNames.push(sections[i].getAttribute("data-nav"));
  }
  return navNames;
}


document.addEventListener('DOMContentLoaded', (event) => {
    addNavText();
    addNavListeners();
});

function addNavText(){
  navNames = getNavNames();
  var navList= document.getElementById("navbar__list");
  for (let i = 0; i < getSections().length; i++){
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(navNames[i]));
    navList.appendChild(listItem);
  }
}

function addNavListeners(){
  var listItems = document.querySelectorAll('li');
  for (let i = 0; i < listItems.length; i++){
    var element = listItems[i];
    element.addEventListener("click", jump(element.getAttribute("data-nav")));
  }
}

function jump(location){
  var str = "index.html#" + location;
  window.location = str;
}


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


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


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
