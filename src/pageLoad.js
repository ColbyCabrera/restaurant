import home from "./home";
export default pageLoad;

function pageLoad() {
  const body = document.getElementsByTagName("body")[0];
  const content = document.createElement("div");
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const navList = document.createElement("ul");
  const homeTab = document.createElement("li");
  const menuTab = document.createElement("li");
  const contactTab = document.createElement("li");
  content.id = "content";
  header.id = "header";
  homeTab.id = "home";
  menuTab.id = "menu";
  contactTab.id = "contact";

  homeTab.textContent = "Home";
  menuTab.textContent = "Menu";
  contactTab.textContent = "Contact";

  body.appendChild(header);
  body.appendChild(content);
  header.appendChild(nav);
  nav.appendChild(navList);
  navList.appendChild(homeTab);
  navList.appendChild(menuTab);
  navList.appendChild(contactTab);

  home();
}
