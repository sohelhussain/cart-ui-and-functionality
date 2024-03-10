const card = [
  {
    image:
      "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    head: "lorahed",
    subHead: "un imagble expiriance",
    price: "$ 2500",
  },
  {
    image:
      "https://images.unsplash.com/photo-1596273501899-336404ed1701?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    head: "neopharas",
    subHead: "made with withe silk",
    price: "$ 9000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1593215112122-1e626ee1603d?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    head: "lince",
    subHead: "the adventure are gone",
    price: "$ 4000",
  },
  {
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2023/08/laptopbackpacks-2048px-4023-1.jpg?auto=webp&quality=75&width=1024&dpr=2",
    head: "Troubadour",
    subHead: "It's surprisingly ergonomic.",
    price: "$ 1500",
  },
  {
    image:
      "https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    head: "timber",
    subHead: "no break the limitations",
    price: "$ 4500",
  },
];
const cart = [];
const showCard = (pro) => {
  let clutter = "";
  pro.forEach((card, index) => {
    clutter += `          <div
        class="cards w-80 h-96 bg-blue-300 relative p-1 rounded-lg backdrop-filter backdrop-blur-3xl bg-opacity-90 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
      >
        <div class="image-box rounded-lg w-full h-56 overflow-hidden">
          <img
            class="object-cover object-center w-full h-full"
            src="${card.image}"
            alt=""
          />
        </div>
        <h2 class="ml-4 mt-7 text-2xl uppercase">${card.head}</h2>
        <h4 class="ml-4 mt-0 text-sm text-black/50">${card.subHead}</h4>
        <h4 class="ml-4 mt-4 text-lg text-black/50">${card.price}</h4>
        <button data-index="${index}"
          class="btn true bottom-6 right-6 absolute px-3 py-2 text-2xl rounded-full bg-gradient-to-br from-zinc-50 to-green-400 backdrop-filter backdrop-blur-3xl bg-opacity-50 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] "
        >
          <i data-index="${index}" class="ri-add-fill true"></i>
        </button>
      </div>`;
  });
  document.querySelector(`.inner-body`).innerHTML = clutter;
};
showCard(card);
const addCart = () => {
  document.querySelector(`.inner-body`).onclick = (btn) => {
    if (btn.target.classList.contains("true")) {
      cart.push(card[btn.target.dataset.index]);
    }
  };
};
addCart();
const showCartProduct = () => {
  let flage = true;
  document.querySelector(`.chart`).onclick = (btn) => {
    if (flage) {
      gsap.to(".side-cart", {
        right: "2%",
      });
      flage = false;
    } else {
      gsap.to(".side-cart", {
        right: "-100%",
      });
      flage = true;
    }
    let clutter = "";
    cart.forEach((product, index) => {
      clutter += `          <div
      class="cart-prodects w-full h-24 rounded-2xl relative overflow-hidden flex-wrap flex gap-5 items-center pl-4 bg-cyan-500 backdrop-filter backdrop-blur-3xl bg-opacity-50 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
    >
      <div class="image-side w-16 h-16 rounded-2xl overflow-hidden">
        <img
          class="object-cover object-center w-full h-full"
          src="${product.image}"
          alt=""
        />
      </div>
      <div class="texts">
        <h2 class="mt-1 text-g uppercase">${product.head}</h2>
        <h4 class="mt-0 text-g text-black/50">${product.subHead}</h4>
        <h4 class="mt-0 text-l text-black/50">${product.price}</h4>
      </div>
      <button data-index="${index}"
        class="btn true bottom-2 right-2 absolute px-3 py-2 text-xl rounded-full bg-gradient-to-br from-zinc-50 to-red-400 backdrop-filter backdrop-blur-3xl bg-opacity-50 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
      >
        <i data-index="${index}" class="ri-close-fill true"></i>
      </button>
      <h3>total value</h3>
    </div>`;
    });
    document.querySelector(`.side-cart`).innerHTML = clutter;
  };
};
showCartProduct();
const removeCartProduct = () => {
  document.querySelector(`.side-cart`).onclick = (btn) => {
    if (btn.target.classList.contains("true")) {
      cart.pop(btn.target.dataset.index);
    }
  };
};
removeCartProduct();
const search = () => {
  const input = document.querySelector(`#in`);
  input.oninput = e => {
    const filterd = card.filter(search => search.startsWith(input.value.toLowerCase()));
showCard(filterd);
  };

};
search();
