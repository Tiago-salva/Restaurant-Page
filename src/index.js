import { createHomePage } from "./home.js";
import { createMenuPage } from "./menu.js";
import { createContactPage } from "./contact.js";

import './style.css';

document.addEventListener("DOMContentLoaded", () => {
    initialLoad();
    createHomePage();
    tabsFunction();
});

// Inital load
const header = document.createElement("header");
const nav = document.createElement("nav");
const title = document.createElement("h1");
const mainSection = document.createElement("section");
const footer = document.createElement("footer");
const footerText = document.createElement("p");
const footerLink = document.createElement("a");

let allTabs = [];

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
        button.classList.add("tab-btn");
        nav.appendChild(button);
    });

    // Nav
    header.appendChild(nav);

    // Header
    contentDiv.appendChild(header);

    // Main section
    mainSection.classList.add("main-section");
    contentDiv.appendChild(mainSection);

    // Footer
    contentDiv.appendChild(footer);
    footer.appendChild(footerText);
    footer.appendChild(footerLink);
    footerText.textContent = "Made by";
    footerLink.textContent = "Tiago-salva";
    footerLink.href = "https://github.com/Tiago-salva";
};

function tabsFunction() {
    allTabs = document.querySelectorAll(".tab-btn");
    const contentDiv = document.getElementById("content");

    // Tab function
    const tabs = [
        { name: "Home", function: createHomePage },
        { name: "Menu", function: createMenuPage },
        { name: "Contact us", function: createContactPage },
    ];

    function switchTab(tabName) {
        mainSection.innerHTML = "";
        const tab = tabs.find((t) => t.name === tabName);
        tab.function();
    };

    allTabs.forEach((button) => {
    button.addEventListener("click", () => {
        switchTab(button.textContent);
    });
    });
}
