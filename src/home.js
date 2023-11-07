export function createHomePage() {
    const contentDiv = document.getElementById("content");

    // Home container
    const homeContainer = document.createElement("section");
    homeContainer.classList.add("home-container");
    contentDiv.appendChild(homeContainer);

    // Information container
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");
    homeContainer.appendChild(infoContainer);

    // Headline
    const headLine1 = document.createElement("h1");
    headLine1.textContent = "The";
    infoContainer.appendChild(headLine1);

    const highLight = document.createElement("span");
    highLight.textContent = "best";
    headLine1.appendChild(highLight);

    const headLine2 = document.createElement("h1");
    headLine2.textContent = "hamburguers!";
    headLine1.appendChild(headLine2);

    // Paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = "Come to visit us or...";
    infoContainer.appendChild(paragraph);

    // Go to menu button
    const toMenuBtn = document.createElement("button");
    toMenuBtn.textContent = "Order now";
    infoContainer.appendChild(toMenuBtn);
};