export default home;
import restaurantImg from "./weenieHutJr.webp";

function home() {
  const content = document.getElementById("content");
  const restaurantName = document.createElement("h1");
  const restaurantImage = new Image();
  const restaurantDescription = document.createElement("p");

  document.title = "Weenie Hut Jr's";
  restaurantName.textContent = "Weenie Hut Jr's";
  restaurantImage.src = restaurantImg;
  restaurantDescription.textContent =
    "The best restaurant for weenies and nerds";

  content.appendChild(restaurantName);
  content.appendChild(restaurantImage);
  content.appendChild(restaurantDescription);
}
