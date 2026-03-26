const products = [
  {
    name:"Men Black Hoodie",
    sub:"Premium cotton hoodie",
    price:999,
    rating:"4.5 (1.2k)",
    offer:"-40%",
    category:"men",
    img:"https://i.pinimg.com/736x/bf/41/5f/bf415f5aac2383dc5a5a1f7514dbdb6a.jpg"
  },
  {
    name:"Men Street Jacket",
    sub:"Urban winter style",
    price:1499,
    rating:"4.8 (2.1k)",
    offer:"-30%",
    category:"men",
    img:"https://i.pinimg.com/736x/5f/e4/bc/5fe4bcb195b6bc7e7b8e02a5cb1bf75f.jpg"
  },
  {
    name:"Women Dress",
    sub:"Elegant party wear",
    price:1299,
    rating:"4.6 (900)",
    offer:"-50%",
    category:"women",
    img:"https://i.pinimg.com/736x/39/fa/bd/39fabde536d0176b2f846c8576ede5db.jpg"
  },
  {
    name:"Women Top",
    sub:"Casual summer wear",
    price:699,
    rating:"4.4 (700)",
    offer:"-20%",
    category:"women",
    img:"https://i.pinimg.com/736x/3e/7a/42/3e7a4220b2dd59c04e5efde2098b7126.jpg"
  },
  {
    name:"Nike Shoes",
    sub:"Running comfort shoes",
    price:1999,
    rating:"4.9 (5k)",
    offer:"-35%",
    category:"shoes",
    img:"https://i.pinimg.com/736x/83/27/9b/83279bc6dda339a963de80f2f4709b5e.jpg"
  },
  {
    name:"Sneakers Pro",
    sub:"Street sneakers",
    price:2499,
    rating:"4.7 (3k)",
    offer:"-25%",
    category:"shoes",
    img:"https://i.pinimg.com/736x/06/c7/4e/06c74e19badedb5845e59a2a0eeae61e.jpg"
  },
  {
    name:"Luxury Watch",
    sub:"Premium gold watch",
    price:4999,
    rating:"5.0 (1k)",
    offer:"-60%",
    category:"watch",
    img:"https://i.pinimg.com/736x/ea/81/84/ea8184a8ef15bca71c1fd1039e4cef6f.jpg"
  },
  {
    name:"Smart Watch",
    sub:"Fitness tracker",
    price:2999,
    rating:"4.6 (2k)",
    offer:"-45%",
    category:"watch",
    img:"https://i.pinimg.com/1200x/37/a8/ae/37a8ae2095512429d5d0ffa5d8675378.jpg"
  }
];



const grid = document.getElementById("productGrid");

function render(){
  grid.innerHTML = "";

  products.forEach(p=>{
    grid.innerHTML += `
      <div class="card">
        <div class="offer">${p.offer}</div>
        <img src="${p.img}" />
        <div class="info">
          <div class="title">${p.name}</div>
          <div class="sub">${p.sub}</div>
          <div class="rating">⭐ ${p.rating}</div>
          <div class="price">₹${p.price}</div>
          <div class="delivery">Free Delivery</div>
        </div>
      </div>
    `;
  });
}

render();