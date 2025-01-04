import "./home-style.css";
import hotChocolateImage from "./images/hot-chocolate.jpg";

export function homePage() {

    const content = document.getElementById("content");
    const home = document.createElement("div");

    home.id = "home";
    const hotChocolate = document.createElement("img");
    hotChocolate.src = hotChocolateImage;
    hotChocolate.alt = "Cozy Hot Chocolate with Cookies";
    hotChocolate.id = "hotChocolate";

    const homeText = document.createElement("div");
    homeText.id = "homeText";

    const rank = document.createElement("h4");
    rank.id = "rank";
    rank.textContent = "text";

    const mainMessage = document.createElement("h1");
    mainMessage.id = "mainMessage";
    mainMessage.textContent = "text";

    const article = document.createElement("p");
    article.id = "article";
    article.textContent = "text";

    homeText.append(rank, mainMessage, article);

    home.append(hotChocolate, homeText);
    document.body.appendChild(home);
    
}