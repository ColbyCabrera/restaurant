import home from "./home";
import menu from "./menu";
import contact from "./contact";
import pageLoad from "./pageLoad";

pageLoad();

const homeTab = document.getElementById("home");
const menuTab = document.getElementById("menu");
const contactTab = document.getElementById("contact");
  

function newTab(e) {
    const body = document.getElementsByTagName("body")[0];
    const content = document.createElement("div");
    const oldContent =  document.getElementById("content");
    content.id = "content";
  
    oldContent.remove();
    body.appendChild(content);
    
    if (e.target.id === 'home') {
        home();
        console.log(e.target.id); 
    } else if (e.target.id === 'menu') {
        menu();
    } else {
        contact();
    }
  };
  
  
  homeTab.addEventListener("click", newTab);
  menuTab.addEventListener("click", newTab);
  contactTab.addEventListener("click", newTab);
  