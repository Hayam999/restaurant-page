import aboutUsImage from "./images/about-us.jpg";

const content = document.getElementById("content");


export function about() {
    content.textContent = "";

     const aboutUs = document.createElement("div");
        aboutUs.id = "about-us-container";
    
        const aboutUsHeader = document.createElement("h2");
        aboutUsHeader.id = "aboutUsHeader";
        aboutUsHeader.textContent = "About us";
        aboutUs.appendChild(aboutUsHeader);
    
        const aboutUsInnerDiv = document.createElement("div");
        aboutUsInnerDiv.id = "aboutUsInnerDiv";
    
        const aboutUsTextDiv = document.createElement("div");
        aboutUsTextDiv.id = "about-us-text-container";
      
        const welcomeMessage = document.createElement("p");
        welcomeMessage.textContent =
        "Welcome to ChocoHaven, where chocolate isn't just a" +
        " treat—it's a passion, a story, and a warm hug in every bite." + 
        " At our imaginary chocolate paradise, we believe that every piece" +
        " of chocolate holds a little magic, capable of turning an ordinary" +
        " moment into a sweet memory. From velvety truffles to luscious" +
        " chocolate cascades, we craft each recipe with love, joy," +
        " and just the right amount of whimsy. " +
        "Step into a world where chocolate dreams come true," + 
        "and let your imagination savor the sweetness!" 
        aboutUsTextDiv.appendChild(welcomeMessage);
    
        const aboutUsBtn = document.createElement("button");
        aboutUsBtn.id = "about-us-button";
        aboutUsBtn.textContent = "About Us";
        aboutUsBtn.addEventListener("click", () => {
            about();
        })
        aboutUsTextDiv.appendChild(aboutUsBtn);
    
        const aboutUsImg = document.createElement("img");
        aboutUsImg.src = aboutUsImage;
        aboutUsImg.id = "about-us-image";
        aboutUsInnerDiv.append(aboutUsTextDiv, aboutUsImg);
        aboutUs.appendChild(aboutUsInnerDiv);
        content.appendChild(aboutUs);
    
}