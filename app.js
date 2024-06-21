const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./menu/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./menu/lunch3.jpeg",
    desc: `Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "Snacks",
    price: 6.99,
    img: "./menu/item-6.jpeg",
    desc: `Kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./menu/item-2.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./menu/item-4.jpeg",
    desc: `Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up.`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "Snacks",
    price: 18.99,
    img: "./menu/item-3.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./menu/item-7.jpeg",
    desc: `Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird.`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./menu/item-10.jpeg",
    desc: `On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut.`,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "Snacks",
    price: 16.99,
    img: "./menu/item-8.jpeg",
    desc: `Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./menu/shakes1.jpeg",
    desc: `Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "salmon salad",
    category: "dinner",
    price: 19.99,
    img: "./menu/dinner1.jpeg",
    desc: `Salmon salad with fresh greens, cherry tomatoes, and a light vinaigrette.`,
  },
{
id: 12,
title: "filet mignon",
category: "dinner",
price: 29.99,
img: "./menu/dinner2.jpeg",
desc: `Tender filet mignon served with mashed potatoes and asparagus.`,
},
{
id: 13,
title: "vegetarian sandwich",
category: "dinner",
price: 18.99,
img: "./menu/dinner3.jpeg",
desc: `Delicious vegetarian pasta made with fresh tomatoes, basil, and mozzarella.`,
},
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  sectionCenter.innerHTML = menuItems.map(item => `
    <article class="menu-item">
      <img src=${item.img} alt=${item.title} class="photo" />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">${item.desc}</p>
      </div>
    </article>
  `).join("");
}

function displayMenuButtons() {
  const categories = ['all', ...new Set(menu.map(item => item.category))];
  btnContainer.innerHTML = categories.map(category => `
    <button type="button" class="filter-btn" data-id=${category}>
      ${category}
    </button>
  `).join("");

  btnContainer.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = category === "all" ? menu : menu.filter(item => item.category === category);
      displayMenuItems(menuCategory);
    });
  });
}
