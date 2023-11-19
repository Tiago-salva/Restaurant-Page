export function createMenuPage() {    
    const contentDiv = document.getElementById("content");
    const mainSection = document.querySelector(".main-section");

    contentDiv.classList.add("menu-checked");

    // Menu container
    mainSection.classList.remove("home-container");
    mainSection.classList.remove("contact-container");
    mainSection.classList.add("menu-container");

    // Menu title
    const title = document.createElement("h1");
    title.textContent = "Menu";
    mainSection.appendChild(title);
    
    // allFoodContainer
    const allFoodContainer = document.createElement("div");
    allFoodContainer.classList.add("all-food-container");
    mainSection.appendChild(allFoodContainer);

    // Food container
    const menu = [
        {
            name: "Classic FastBurger",
            img: "/Restaurant-Page/src/img/hamburger1.png",
            description: "A simple burger with mayonnaise and ketchup",
            price: "$10.99",
        },
        {
            name: "Fish FastSandwich",
            img: "../../src/img/hamburger2.png",
            description: "A double fish sandwich with cheddar",
            price: "$12.99",
        },
        {
            name: "Big Triple FastBite",
            img: "../src/img/hamburger3.png",
            description: "A triple burger with cheddar, bacon, tomato and lettuce",
            price: "$20.99",
        },
        {
            name: "FastNuggets X 10",
            img: "/src/img/nuggets.png",
            description: "10 chicken nuggets with 2 sauces",
            price: "$5.99",
        },
        {
            name: "FastSalad",
            img: "../../src/img/salad.png",
            description: "A salad with chicken, tomatoes and caramelized onion",
            price: "$10.99",
        },
        {
            name: "FastFries",
            img: "../../src/img/cheddar-fries.png",
            description: "French fries with cheddar or ketchup",
            price: "$6.99",
        },
        {
            name: "Vainilla FastCone",
            img: "../../src/img/vainilla-icecream.png",
            description: "A vanilla ice cream cone",
            price: "$3.99",
        },
        {
            name: "Chocolate FastCream",
            img: "../../src/img/choco-icecream.png",
            description: "An ice cream with cream and a chocolate sauce",
            price: "$5.99",
        },
    ];

    // Create the cards
    menu.forEach(item => {
        // Card
        const foodContainer = document.createElement("div");
        foodContainer.classList.add("food-container");
        allFoodContainer.appendChild(foodContainer);

        // Card title
        const foodTitle = document.createElement("h3");
        foodTitle.textContent = item.name;

        // Card image
        const foodImg = document.createElement("img");
        foodImg.src = item.img;
        foodImg.alt = item.nombre;

        // Card description
        const foodDescription = document.createElement("p");
        foodDescription.textContent = item.description;

        // Card price
        const foodPrice = document.createElement("h3");
        foodPrice.textContent = item.price;
        
        foodContainer.appendChild(foodTitle);
        foodContainer.appendChild(foodImg);
        foodContainer.appendChild(foodDescription);
        foodContainer.appendChild(foodPrice);
    });

};