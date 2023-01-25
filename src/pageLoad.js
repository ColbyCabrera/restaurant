export default pageLoad;
import restaurantImg from "./weenieHutJr.webp";

function pageLoad() {
  const body = document.getElementsByTagName("body")[0];
  const header = document.createElement("header");
  const content = document.createElement("div");
  const restaurantName = document.createElement("h1");
  const restaurantImage = new Image();
  const restaurantDescription = document.createElement("p");

  document.title = "Weenie Hut Jr's";
  content.id = "content";
  restaurantName.textContent = "Weenie Hut Jr's";
  restaurantImage.src = restaurantImg;
  restaurantDescription.textContent =
    "The best restaurant for weenies and nerds";

  body.appendChild(header);
  body.appendChild(content);
  content.appendChild(restaurantName);
  content.appendChild(restaurantImage);
  content.appendChild(restaurantDescription);

  const nav = document.createElement("nav");
  const navList = document.createElement("ul");
  const homeTab = document.createElement("li");
  const menuTab = document.createElement("li");
  const contactTab = document.createElement("li");
  homeTab.id = 'home';
  menuTab.id = 'menu';
  contactTab.id = 'contact';

  homeTab.textContent = "Home";
  menuTab.textContent = "Menu";
  contactTab.textContent = "Contact";

  header.appendChild(nav);
  nav.appendChild(navList);
  navList.appendChild(homeTab);
  navList.appendChild(menuTab);
  navList.appendChild(contactTab);
}
