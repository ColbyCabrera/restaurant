export default pageLoad;
import restaurantImg from './weenieHutJr.webp';

function pageLoad() {
    const body = document.getElementsByTagName('body')[0];
    const content = document.createElement('div');
    const header = document.createElement('h1');
    const restaurantImage = new Image();
    const restaurantDescription = document.createElement('p');

    document.title = "Weenie Hut Jr's";
    content.id = 'content';
    header.textContent = "Weenie Hut Jr's";
    restaurantImage.src = restaurantImg;
    restaurantDescription.textContent = 'The best restaurant for weenies and nerds';
    
    body.appendChild(content);
    content.appendChild(header);
    content.appendChild(restaurantImage);
    content.appendChild(restaurantDescription);
}