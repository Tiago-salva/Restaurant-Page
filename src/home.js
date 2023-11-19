import { createMenuPage } from "./menu";

export function createHomePage() {
    const contentDiv = document.getElementById("content");
    const mainSection = document.querySelector(".main-section");
    
    contentDiv.classList.remove("menu-checked");

    // Home container
    mainSection.classList.remove("menu-container");
    mainSection.classList.remove("contact-container");
    mainSection.classList.add("home-container");

    // Hero
    const hero = document.createElement("div");
    hero.classList.add("hero");
    mainSection.appendChild(hero);

    // Headline
    const headLine1 = document.createElement("h1");
    headLine1.textContent = "The";
    hero.appendChild(headLine1);

    const highLight = document.createElement("span");
    highLight.textContent = "best";
    headLine1.appendChild(highLight);

    const headLine2 = document.createElement("h1");
    headLine2.textContent = "hamburgers!";
    headLine1.appendChild(headLine2);

    // Paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = "Come to visit us or...";
    hero.appendChild(paragraph);

    // Go to menu button
    const toMenuBtn = document.createElement("button");
    toMenuBtn.textContent = "Order now";
    hero.appendChild(toMenuBtn);

    // Event for the menu btn
    toMenuBtn.addEventListener("click", () => {
        mainSection.innerHTML = "";
        createMenuPage();
        contentDiv.classList.add("menu-checked");
    })
};