export default menu;

function menu() {
  const content = document.getElementById("content");
  const pageTitle = document.createElement("h1");
  const menu = document.createElement("ul");
  const menuItem1 = document.createElement("li");
  const menuItem2 = document.createElement("li");
  const menuItem3 = document.createElement("li");
  const menuItemTitle1 = document.createElement("h3");
  const menuItemDesc1 = document.createElement("p");
  const menuItemPrice1 = document.createElement("p");
  const menuItemTitle2 = document.createElement("h3");
  const menuItemDesc2 = document.createElement("p");
  const menuItemPrice2 = document.createElement("p");
  const menuItemTitle3 = document.createElement("h3");
  const menuItemDesc3 = document.createElement("p");
  const menuItemPrice3 = document.createElement("p");

  document.title = "Weenie Hut Jr's";
  pageTitle.textContent = "Our Menu";
  menuItemTitle1.textContent = "Krabby Patty for Babies";
  menuItemDesc1.textContent = "A normal Krabby Patty but for wimps like you!";
  menuItemPrice1.textContent = "$9.99";
  menuItemTitle2.textContent = "Hot Dog";
  menuItemDesc2.textContent = "A delicious meal built in your image!";
  menuItemPrice2.textContent = "$5.99";
  menuItemTitle3.textContent = "Bucket of Chum";
  menuItemDesc3.textContent = "So incredibly nutritious it might make you less lame!";
  menuItemPrice3.textContent = "$20.99";
  content.appendChild(pageTitle);
  content.appendChild(menu);
  menu.appendChild(menuItem1);
  menu.appendChild(menuItem2);
  menu.appendChild(menuItem3);
  menuItem1.appendChild(menuItemTitle1);
  menuItem1.appendChild(menuItemDesc1);
  menuItem1.appendChild(menuItemPrice1);
  menuItem2.appendChild(menuItemTitle2);
  menuItem2.appendChild(menuItemDesc2);
  menuItem2.appendChild(menuItemPrice2);
  menuItem3.appendChild(menuItemTitle3);
  menuItem3.appendChild(menuItemDesc3);
  menuItem3.appendChild(menuItemPrice3);
}
