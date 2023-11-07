export function createMenuPage() {
    const contentDiv = document.getElementById(content);

    // Menu container
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    contentDiv.appendChild(menuContainer);

    // Info container
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");
    menuContainer.appendChild(infoContainer);

    // Title
    const title = document.createElement("h3");

}