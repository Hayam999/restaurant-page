import "./home-style.css";
import hotChocolateImage from "./images/hot-chocolate.jpg";
import aboutUsImage from "./images/about-us.jpg";
import ganacheImage from "./images/ganache.jpg";
import darkChocImage from "./images/dark-chocolate.jpg";
import cookiesImage from "./images/cookies.jpg";
import cakeImg from "./images/cake.jpg";
import chipsImg from "./images/chips.jpg";
import chockBallsImg from "./images/chock-balls.jpg";
import chockCoffeeImg from "./images/chock-coffe-beans.jpg";
import coffeImg from "./images/coffe.jpg";
import crispyImg from "./images/crispy.jpg";
import strawberryImg from "./images/strawberry.jpg";
import tartImg from "./images/tart.jpg";
import drinkImg from "./images/chock-drink.jpg";

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
    rank.textContent = "Have a Chocolate cause ..";

    const mainMessage = document.createElement("h1");
    mainMessage.id = "mainMessage";
    mainMessage.textContent = 
    "Chocolate is Happiness that you can Eat";

    const article = document.createElement("p");
    article.id = "article";
    article.textContent = 
    "What's so romantic about hot cocoa, you ask?" +
    "\n \nWhat's not romantic about hot cocoa?" +
    "Just the very thought of cuddling up with my hubby" +
    " on a cold winter day with a cup of hot cocoa is enough" +
    " to make me wish for a winter storm to blow in that shuts" +
    " everything down! ";

    homeText.append(rank, mainMessage, article);
    home.append(hotChocolate, homeText);
    document.body.appendChild(home);
    
    const typesOfChoc = document.createElement("div");
    typesOfChoc.id = "typesOfChoc";

    const typesHeader = document.createElement("h2");
    typesHeader.id = "types-header";
    typesHeader.textContent = "Chocolate Shapes";
    typesOfChoc.appendChild(typesHeader);

    const chocTypesImages = document.createElement("div");
    chocTypesImages.id = "chocolate-types-images"; 

    const ganache = document.createElement("img");
    ganache.src = ganacheImage;
    ganache.class = "types-of-chocolate";

    const darkChoc = document.createElement("img");
    darkChoc.src = darkChocImage;
    darkChoc.class = "types-of-chocolate";

    const cookies = document.createElement("img");
    cookies.src = cookiesImage;
    cookies.class = "types-of-chocolate";

    chocTypesImages.append(ganache, darkChoc, cookies);
    typesOfChoc.appendChild(chocTypesImages);
    document.body.appendChild(typesOfChoc);

    const aboutUs = document.createElement("div");
    aboutUs.id = "about-us-container";
    document.body.appendChild(aboutUs);

    const aboutUsTextDiv = document.createElement("div");
    aboutUsTextDiv.id = "about-us-text-container";
    aboutUs.appendChild(aboutUsTextDiv);

    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent =
    "Welcome to ChocoHaven, where chocolate isn't just a" 
    " treat—it's a passion, a story, and a warm hug in every bite." 
    " At our imaginary chocolate paradise, we believe that every piece"
    " of chocolate holds a little magic, capable of turning an ordinary"
    " moment into a sweet memory. From velvety truffles to luscious"
    " chocolate cascades, we craft each recipe with love, joy,"
    " and just the right amount of whimsy. "
    "Step into a world where chocolate dreams come true," 
    "and let your imagination savor the sweetness!"
    aboutUsTextDiv.appendChild(welcomeMessage);

    const aboutUsBtn = document.createElement("button");
    aboutUsBtn.id = "about-us-button";
    aboutUs.textContent = "About Us";
    aboutUsTextDiv.appendChild(aboutUsBtn);

    const aboutUsImg = document.createElement("img");
    aboutUsImg.src = aboutUsImage;
    aboutUsImg.id = "about-us-image";
    aboutUs.appendChild(aboutUsImg);

    const menuDiv = document.createElement("div");
    menuDiv.id = "menu-div";


    const price = document.createElement("h6");
    price.id = "price";
    price.textContent = "0$";

    const cartBtn = document.createElement("button");
    cartBtn.id = "cart-btn";
    cartBtn.textContent = "buy";

    const menu1Img = document.createElement("img");
    menu1Img.src = cakeImg;
    menu1Img.className = "menu-images";
    const menu1Name = document.createElement("h5");
    menu1Name.className = "menu-names";
    menu1Name.textContent = "Chocolate Cake";
    const menu1Div = document.createElement("div");
    menu1Div.className = "menu-divs";
    menu1Div.append(menu1Img, menu1Name, price, cartBtn);

    const menu2Img = document.createElement("img");
    menu2Img.src = chipsImg;
    menu2Img.className = "menu-images";
    const menu2Name = document.createElement("h5");
    menu2Name.className = "menu-names";
    menu2Name.textContent = "Chocolate Chips";
    const menu2Div = document.createElement("div");
    menu2Div.className = "menu-divs";
    menu2Div.append(menu2Img, menu2Name, price, cartBtn);

    const menu3Img = document.createElement("img");
    menu3Img.src = chockBallsImg;
    menu3Img.className = "menu-images";
    const menu3Name = document.createElement("h5");
    menu3Name.className = "menu-names";
    menu3Name.textContent = "Chocolate Balls";
    const menu3Div = document.createElement("div");
    menu3Div.className = "menu-divs";
    menu3Div.append(menu3Img, menu3Name, price, cartBtn);

    const menu4Img = document.createElement("img");
    menu4Img.src = chockCoffeeImg;
    menu4Img.className = "menu-images";
    const menu4Name = document.createElement("h5");
    menu4Name.className = "menu-names";
    menu4Name.textContent = "Coffee Chocolate";
    const menu4Div = document.createElement("div");
    menu4Div.className = "menu-divs";
    menu4Div.append(menu4Img, menu4Name, price, cartBtn);

    const menu5Img = document.createElement("img");
    menu5Img.src = coffeImg;
    menu5Img.className = "menu-images";
    const menu5Name = document.createElement("h5");
    menu5Name.className = "menu-names";
    menu5Name.textContent = "Coffee";
    const menu5Div = document.createElement("div");
    menu5Div.className = "menu-divs";
    menu5Div.append(menu5Img, menu5Name, price, cartBtn);


    const menu6Img = document.createElement("img");
    menu6Img.src = crispyImg;
    menu6Img.className = "menu-images";
    const menu6Name = document.createElement("h5");
    menu6Name.className = "menu-names";
    menu6Name.textContent = "Crispy Balls";
    const menu6Div = document.createElement("div");
    menu6Div.className = "menu-divs";
    menu6Div.append(menu6Img, menu6Name, price, cartBtn);

    const menu7Img = document.createElement("img");
    menu7Img.src = tartImg;
    menu7Img.className = "menu-images";
    const menu7Name = document.createElement("h5");
    menu7Name.className = "menu-names";
    menu7Name.textContent = "Chocolate Tart";
    const menu7Div = document.createElement("div");
    menu7Div.className = "menu-divs";
    menu7Div.append(menu7Img, menu7Name, price, cartBtn);

    const menu8Img = document.createElement("img");
    menu8Img.src = strawberryImg;
    menu8Img.className = "menu-images";
    const menu8Name = document.createElement("h5");
    menu8Name.className = "menu-names";
    menu8Name.textContent = "Chocoberry";
    const menu8Div = document.createElement("div");
    menu8Div.className = "menu-divs";
    menu8Div.append(menu8Img, menu8Name, price, cartBtn);

    const menu9Img = document.createElement("img");
    menu9Img.src = drinkImg;
    menu9Img.className = "menu-images";
    const menu9Name = document.createElement("h5");
    menu9Name.className = "menue-name";
    menu9Name.textContent = "Hot Chocolate";
    const menu9Div = document.createElement("div");
    menu9Div.className = "menu-divs";
    menu9Div.append(menu9Img, menu9Name, price, cartBtn);

    menuDiv.append(menu1Div, menu2Div, menu3Div, menu4Div,
        menu5Div, menu6Div, menu7Div, menu8Div, menu9Div
    )

    document.body.appendChild(menuDiv)

}