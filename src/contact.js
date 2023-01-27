export default contact;

function contact() {
  const content = document.getElementById("content");
  const pageTitle = document.createElement("h1");
  const phoneNumber = document.createElement("p");
  const address = document.createElement("p");

  document.title = "Weenie Hut Jr's";
  pageTitle.textContent = "Contact Us";
  phoneNumber.textContent =
    "372-423-3243";
    address.textContent =
    "4320 Wimp Street BB";

  content.appendChild(pageTitle);
  content.appendChild(phoneNumber);
  content.appendChild(address);
}
