import "./index.css";
import {homePage} from "./home.js";
import {menu} from "./menu.js";
import {about} from "./about.js";

homePage();

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", () => {
    homePage();
});

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
    menu();
})

const aboutBtn = document.getElementById("aboutBtn");
aboutBtn.addEventListener("click", () => {
    about();
})