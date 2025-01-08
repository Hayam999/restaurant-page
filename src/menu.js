import "./home.css"

import cakeImg from "./images/cake.jpg";
import chipsImg from "./images/chips.jpg";
import chockBallsImg from "./images/chock-balls.jpg";
import chockCoffeeImg from "./images/chock-coffe-beans.jpg";
import coffeImg from "./images/coffe.jpg";
import crispyImg from "./images/crispy.jpg";
import strawberryImg from "./images/strawberry.jpg";
import tartImg from "./images/tart.jpg";
import drinkImg from "./images/chock-drink.jpg";

const ImageSources = [cakeImg, chipsImg, chockBallsImg, chockCoffeeImg,
    coffeImg, crispyImg, strawberryImg, tartImg, drinkImg
]

const Names = ["Chocolate Cake", "Chocolate Chips",
    "Chocolate Balls", "Coffee Chocolate","Coffee",
    "Crispy Balls", "Chocolate Tart", "Chocoberry",
    "Hot Chocolate"
]

const menuDiv = document.createElement("div");
menuDiv.id = "menu-div";

function makeMenuDiv(img, name) {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-divs";

    const menuImg = document.createElement("img");
    menuImg.src = img;
    menuImg.className = "menu-images";

    const menuName = document.createElement("h5");
    menuName.className = "menu-names";
    menuName.textContent = name;

    
    const price = document.createElement("h6");
    price.className = "price";
    price.textContent = "0$";
    const cartBtn = document.createElement("button");
    cartBtn.className = "cart-btn";
    cartBtn.textContent = "buy";

    menuItem.append(menuImg, menuName, price, cartBtn);
    menuDiv.appendChild(menuItem);
}

export function menu() {

    const content = document.getElementById("content");
    content.textContent = "";

 

    const len = ImageSources.length;
    for (let i = 0; i < len; i++) {
        const itemDiv = makeMenuDiv(ImageSources[i], Names[i]);
    }

    content.appendChild(menuDiv);
    document.body.appendChild(content);

}