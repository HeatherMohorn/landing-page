document.addEventListener('DOMContentLoaded', (event) => {
    addNavText();
    //testListener();
});

document.addEventListener("scroll", (event) =>{

    activeClassUpdate();
});




function addNavText(){
  navNames = getNavNames();
  sections = getSections();
  var navList= document.getElementById("navbar__list");
  for (let i = 0; i < getSections().length; i++){
    var listItem = document.createElement("li");
    var link = document.createElement("a");
    link.href = "#"+sections[i].id;
    link.innerText = navNames[i];
    listItem.appendChild(link);
    navList.appendChild(listItem);
  }
}

function addNavListeners(){
  var listItems = document.querySelectorAll('li');
  var sections = getSections();
  for (let i = 0; i < listItems.length; i++){
    var element = sections[i];
    var link = listItems[i];
    }
}

//function testListener(){
//  var listItems = document.querySelectorAll('li');
//  var sections = getSections();
//  listItems[0].addEventListener("onclick", tester(), false);
//}
//function tester(){
//  console.log("test worked");
//}







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
function getSections(){
  return document.querySelectorAll("section");
}

//returns an array of the section labels
function getNavNames(){
  var navNames = [];
  var sections = getSections();
  for (let i = 0; i < sections.length; i++){
    navNames.push(sections[i].getAttribute("data-nav"));
  }
  return navNames;
}

//determine which section is at the top
function activeSection(){
  var sections = getSections();
  var positions = [];
  for (let i = 0; i < sections.length; i++){
    rect = sections[i].getBoundingClientRect();
    positions[i] = rect.top;
    if (positions[i] < 0){
      positions[i] *= -1;
    }
  }
  var min = positions[0];
  var minSection = sections[0];

  for (let i = 0; i < sections.length; i++){
    if (positions[i] < min){
      min = positions[i];
      minSection = sections[i];
    }
  }
  return minSection;
}

//changes the classes of all sections to update active class
function setActiveClass(section){
  sections = getSections();
  for (let i = 0; i < sections.length; i++){
      if (sections[i] == section){
        if(sections[i].classList.contains("your-active-class")==false){
            sections[i].classList.add("your-active-class");
        }
      }
      else{
        if (sections[i].classList.contains("your-active-class")){
          sections[i].classList.remove("your-active-class");
        }
      }
  }
}

//find active section and update classes of all sections accordingly
function activeClassUpdate(){
  section = activeSection();
  setActiveClass(section);
}

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
