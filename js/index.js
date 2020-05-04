const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let wrapper = document.querySelector(".container");
let header = document.querySelector("header");
let nav = header.querySelector("nav");
let navItems = nav.querySelectorAll("a");
let logoImg = header.querySelector("#logo-img");
let ctaH1 = document.querySelector(".cta .cta-text h1");
let ctaButton = document.querySelector(".cta .cta-text button ");
let ctaImg = document.querySelector("#cta-img");
let mainContent = wrapper.querySelector(".main-content");
let topContentH4s = mainContent.querySelectorAll(".top-content .text-content h4");
let topContentPs = mainContent.querySelectorAll(".top-content .text-content p");
let middleImg = mainContent.querySelector("#middle-img");
let bottomContentH4s = mainContent.querySelectorAll(".bottom-content .text-content h4");
let bottomContentPs = mainContent.querySelectorAll(".bottom-content .text-content p");
let contactSection = wrapper.querySelectorAll(".contact h4, .contact p");
let footer = wrapper.querySelector("footer p");

// console.log(footer);

navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[5].textContent = siteContent.nav["nav-item-6"];

ctaH1.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaImg.setAttribute("src", siteContent.cta["img-src"]);

topContentH4s[0].textContent = siteContent["main-content"]["features-h4"];
topContentH4s[1].textContent = siteContent["main-content"]["about-h4"];
topContentPs[0].textContent = siteContent["main-content"]["features-content"];
topContentPs[1].textContent = siteContent["main-content"]["about-content"];
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
bottomContentH4s[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentH4s[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentH4s[2].textContent = siteContent["main-content"]["vision-h4"];
bottomContentPs[0].textContent = siteContent["main-content"]["services-content"];
bottomContentPs[1].textContent = siteContent["main-content"]["product-content"];
bottomContentPs[2].textContent = siteContent["main-content"]["vision-content"];

contactSection[0]. textContent = siteContent.contact["contact-h4"];
contactSection[1]. textContent = siteContent.contact.address;
contactSection[2]. textContent = siteContent.contact.phone;
contactSection[3]. textContent = siteContent.contact.email;



footer.textContent = siteContent.footer.copyright;


navItems.forEach(item => item.style.color = "green");
let newA1 = document.createElement("a");
let newA2 = document.createElement("a");
nav.prepend("new Link 1", newA1);
nav.append("new Link 2", newA2);




console.log(contactSection);







