import { createHomePage } from "./home.js";
import { createMenuPage } from "./menu.js";
import { createContactPage } from "./contact.js";

import './style.css';

document.addEventListener("DOMContentLoaded", () => {
    initialLoad();
    createHomePage();
});

// Inital load
const header = document.createElement("header");
const nav = document.createElement("nav");
const title = document.createElement("h1");
const footer = document.createElement("footer");
const footerText = document.createElement("p");
const footerLink = document.createElement("a");

function initialLoad() {
    const contentDiv = document.getElementById("content");

    // Title
    title.textContent = "Fast Bites";
    header.appendChild(title);
    
    // Buttons
    const btnLabels = ["Home", "Menu", "Contact us"];

    btnLabels.forEach((label) => {
        const button = document.createElement("button");
        button.textContent = label;
        // button.classList.add("button");
        nav.appendChild(button);
    });

    // Nav
    header.appendChild(nav);

    // Header
    contentDiv.appendChild(header);

    // Footer
    contentDiv.appendChild(footer);
    footer.appendChild(footerText);
    footer.appendChild(footerLink);
    footerText.textContent = "Made by";
    footerLink.textContent = "Tiago-salva";
    footerLink.href = "https://github.com/Tiago-salva";
};