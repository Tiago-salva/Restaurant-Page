export function createContactPage() {
    const contentDiv = document.getElementById("content");
    const mainSection = document.querySelector(".main-section");

    contentDiv.classList.add("menu-checked");

    // Contact container
    mainSection.classList.remove("menu-container");
    mainSection.classList.remove("home-container");
    mainSection.classList.add("contact-container");

    // Contact title
    const title = document.createElement("h1");
    title.textContent = "Contact Us";
    mainSection.appendChild(title);

    // Contact
    const contact = document.createElement("div");
    contact.classList.add("contact");
    mainSection.appendChild(contact);
    
    // Info container
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");
    contact.appendChild(infoDiv);

    // Phone number container
    const phoneNumberContainer = document.createElement("div");
    phoneNumberContainer.classList.add("phone");
    infoDiv.appendChild(phoneNumberContainer);

    // Phone number icon
    const numIcon = document.createElement("img");
    numIcon.src = "../src/svg/phone-solid.svg"
    phoneNumberContainer.appendChild(numIcon);
    
    // Phone number
    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "1234 5678";
    phoneNumberContainer.appendChild(phoneNumber);

    // Adress container
    const adressContainer = document.createElement("div");
    adressContainer.classList.add("adress");
    infoDiv.appendChild(adressContainer);

    // Adress icon
    const adressIcon = document.createElement("img");
    adressIcon.src = "../src/svg/location-dot-solid.svg"
    adressContainer.appendChild(adressIcon);

    // Adress
    const adress = document.createElement("p");
    adress.textContent = "1024 Oakwood Ave - San Diego, CA 22434";
    adressContainer.appendChild(adress);

    // Hours container
    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("hours");
    infoDiv.appendChild(hoursContainer);

    // Hours icon
    const hoursIcon = document.createElement("img");
    hoursIcon.src = "../src/svg/clock-solid.svg"
    hoursContainer.appendChild(hoursIcon);

    // Hours
    const hours = document.createElement("p");
    hours.textContent = "Mon-Thurs:8am-8pm -  Fri-Sun:8am-11pm";
    hoursContainer.appendChild(hours);

    // iframe
    const iFrame = document.createElement("iframe");
    iFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214758.79711848433!2d-117.2340910766061!3d32.74964580211821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbfe28190f4b67%3A0x92fa4bca315a5951!2sMcDonald's!5e0!3m2!1sen!2sus!4v1601955396977!5m2!1sen!2sus";
    iFrame.classList.add("iframe");
    contact.appendChild(iFrame);
}