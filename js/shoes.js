var data = [
  {
    name: "Hardy Hiker",
    description:
      "For those who enjoy the outdoors, the Hardy Hiker is for you. This trendy boot is made from strong, durable leather and utilises the latest sole technology to ensure a comfortable fit. The boot is only available in brown leather. Whether you wear it while exploring the city or heading into the hills, this boot is the perfect accessory for the rugged, chic look.",
    imageUrl:
      "https://images.unsplash.com/photo-1493054882428-e4c79a9bfa3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1329&q=80",
    id: 1,
    sizes: [37, 38, 39, 40, 41, 43, 44, 45],
    price: 78.99,
    color: "Brown",
    type: "Boots"
  },
  {
    name: "Bashful Brogue",
    description:
      "Our Bashful Brogue is one of our most popular shoes. It is perfect as formal wear or for office use. Its comfortable sole makes it perfect for all day wear. The brogue is made from brown or black leather and is studded using our unique pattern.",
    imageUrl:
      "https://images.unsplash.com/photo-1504826023244-4694f7330c73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",
    id: 2,
    sizes: [37, 38, 39, 40, 41, 43, 44, 45],
    price: 69.99,
    color: "Brown",
    type: "Boots"
  },
  {
    name: "Nice and Easy",
    description:
      "Perfect for every occasion, Nice and Easy is the perfect all-rounder to ensure you're always looking at the top of your game. It's easy to wear and maintain and will be the perfect accompaniment for after dinner drinks, an interview, or even your next date.",
    imageUrl:
      "https://images.unsplash.com/photo-1534233650908-b471f2350922?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
    id: 3,
    sizes: [41, 39, 37, 42, 43, 44],
    price: 89.99,
    color: "Brown",
    type: "Boots"
  },
  {
    name: "Calm and Casual",
    description:
      "The calm and casual shoe is perfect for someone who prioritizes both comfort and style. The shoe is light to wear and perfect for relaxing with friends.",
    imageUrl:
      "https://images.unsplash.com/photo-1548430395-ec39eaf2aa1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
    id: 4,
    sizes: [37, 39, 41],
    price: 79.99,
    color: "Yellow",
    type: "Sneakers"
  },
  {
    name: "Urbana",
    description:
      "This boot with its characteristic hard-worn look has a real industrial feel and offers the wearer a stylish and down-to-earth look.",
    imageUrl:
      "https://images.unsplash.com/photo-1460066122679-741dd6c4ad37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    id: 5,
    sizes: [41, 39, 37, 42, 44, 46],
    price: 69.99,
    color: "Beige",
    type: "Boots"
  },
  {
    name: "Kal Visuals",
    description: "Take on these new stylish work boots, and bring nature to the urbans. Feel the comfort and robustness in all kinds of settings.",
    imageUrl: "https://images.unsplash.com/photo-1542838687-936f417d2f37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80",
    id: 6,
    sizes: [39, 40, 41, 42, 43, 45, 46],
    price: 119.99,
    color: "Darkened Red",
    type: "Boots"
  },
  {
    name: "Reza Heydar",
    description: "Never hesitate again and give your feet what they deserve with these rock solid, army boots. Bring style to the streets and feel the comfort knowing these shoes are both waterproof and crush-proof",
    imageUrl: "https://images.unsplash.com/photo-1542913269-3230d7bd3a35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    id: 7,
    sizes: [40,41,42,43,44,45,46,47],
    price: 109.99,
    color: "Beige",
    type: "Boots"
  },
  {
    name: "Brandon Bean",
    description: "Perfect for every occasion, Nice and Easy is the perfect all-rounder to ensure you're always looking at the top of your game. It's easy to wear and maintain and will be the perfect accompaniment for after dinner drinks, an interview, or even your next date.",
    imageUrl: "https://images.unsplash.com/photo-1563128234-dd1a56eed05d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    id: 8,
    sizes: [39,40,41,42,43,44,45,46,47],
    price: 99.99,
    color: "Brown",
    type: "Boots"
  },
  {
    name: "Sanoy Saha",
    description: "Our Sanoy Saha is one of our most recent shoes. It is perfect as formal wear or for office use. Its comfortable sole makes it perfect for all day wear. The Sanoy is made from brown or black leather and is studded using our unique pattern.",
    imageUrl: "https://images.unsplash.com/photo-1557870187-4304e2c2b357?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    id: 9,
    sizes: [39,40,41,42,43,44,45,46,47],
    price: 89.99,
    color: "Black",
    type: "Boots"
  }
];

document.addEventListener(
  "DOMContentLoaded",
  function() {
    buildView(data);
  },
  false
);

function buildView(data) {
  const cardcontainer = document.getElementById("card-image");
  //testing to get random likes
  const number = Math.random() + Math.random();
  console.log(number)
  const likes = Math.round(number) * 545;//issues where the same number adds on every card, fix later
  console.log(likes)
  
  // For each element in data
  for (const card of data) {
    // Append element to the innerhtml
    cardcontainer.innerHTML += `<div class="card-container" onclick="buildModal(${card.id})">
            <img class="card-image" id="${card.id}" src="${card.imageUrl}">
            <p class="numberOfLikes"><img class="heart heart-categories" src="icons/heart.svg" alt="heart icon">${likes}</p>
            <h3 class="card-name">${card.name}</h3>
            <p class="card-price">$${card.price}</p>
        </div>
            `;
  }
}

function buildModal(id) {
  const selectedElement = data.find(obj => obj.id === id);
  if (selectedElement) {
    modalBox = document.getElementById("hidden-description-box");
    modalBox.classList.remove("toggleDisplay");
    document.getElementById("pageContainerToggle").classList.add("blur");
    console.log(selectedElement);

    modalBox.innerHTML = `<div id="title">
        <h3>${selectedElement.name}</h3>
        <span onclick="closeBtnModal()" class="closeBtn">&times;</span>
    </div>
    <div id="image">
        <img class="modalImage" src="${selectedElement.imageUrl}">
    </div>
    <div id="addToBasket">
        <div class="basketBox1 boxStyle">
            <span class="DiscountBox">Special Offer Today Only 25% Off</span>
            <p class="box-price">Price: $${selectedElement.price}</p>
        </div>
        <div class="basketBox2 boxStyle">
            <p class="box-color">Color: ${selectedElement.color}</p>
            <div>
                <p class="sizeBox">Size:</p>
                <select id="sizeOptions">
                </select>
            </div>
            <div class="buttonContainer">
                <button class="shoppingBagButton" onclick="addToBasket(${selectedElement.id})">Add to shopping bag</button>
            </div>
            <div class="buttonContainer">
                <a class="seeCartButton" href="shoppingBag.html"><button>See Cart</button></a>
        </div>
        <div class="basketBox3 boxStyle">
            <p>Share</p>
            <ul>
                <li><a href="#"><img src="Images/social media/twitter.png"></a></li>
                <li><a href="#"><img src="Images/social media/face.png"></a></li>
                <li><a href="#"><img src="Images/social media/snapchat.png"></a></li>
            </ul>
        </div>
    </div>
    <div id="description">
        <p>${selectedElement.description}</p>
    </div>`;

    selectedElement.sizes.sort();
    selectSizes = document.getElementById("sizeOptions");
    for (const size of selectedElement.sizes) {
      selectSizes.innerHTML += `<option value="${size}">${size}</option>`;
    }
  } else {
    console.error("No matching cards in data");
  }
}

function addToBasket(id) {
  var shoppingCart = JSON.parse(sessionStorage.getItem("ShoppingCart"));
  if (shoppingCart === null || shoppingCart === undefined) {
    shoppingCart = [];
  }
  selectSizes = document.getElementById("sizeOptions");
  //add the size in the shopping cart
  shoppingCart.push({
    id: id,
    size: selectSizes.options[selectSizes.selectedIndex].text
  });
  sessionStorage.setItem("ShoppingCart", JSON.stringify(shoppingCart));
  numInShoppingCart();
}

function closeBtnModal() {
  document
    .getElementById("hidden-description-box")
    .classList.add("toggleDisplay");
  document.getElementById("pageContainerToggle").classList.remove("blur");
}

function numInShoppingCart() {
  const storageCount = JSON.parse(sessionStorage.getItem("ShoppingCart"))
    .length;
  const basket = document.getElementById("shoppingBasket");
  basket.innerHTML = storageCount;
}

function buildAllShoppingItems(){
  const retrievedData = JSON.parse(sessionStorage.getItem("ShoppingCart"));
  const totalContentBox = document.getElementById('shoppingBag');
  console.log(retrievedData) // Log out data from sessionStorage

  //check if the array is not empty, then do nothing
  if(retrievedData === null || retrievedData === undefined){
    console.log('no data')
    } else {
        // We have data, lets build
        for (const item in retrievedData){
            // For each item, lets get some html
            var itemHtml = buildShoppingList(item);
            totalContentBox.innerHTML += itemHtml; // Add the item html to some div or container
        }  
    }
}

function buildShoppingList(item){
    var dataItem = data.find(obj => obj.id === item.id) // Fetch item with more info
    dataItem.size = item.size; // Add size into the mix
    console.log(dataItem);
    var html = `<h3>Shopping Bag</h3>
      <div class="itemsContainer">
      <div class="itemImage">
          <img class="imageDisplayed" alt="Picture of Shoes" src="${dataItem.imageUrl}">
      </div>
      <div class="descriptionForImage" id="descriptionParagraph">
          <p class="descriptionParagraph">${dataItem.name} - ${dataItem.price}</p>
          <p>Size: ${dataItem.size}</p>
          <p><img id="removeTrash" src="/icons/trash.svg" alt="trash icon"> Remove | <img id="emptyheart" src="icons/emptyheart.svg" alt="wish heart icon"> Heart It</p>
    `
    return html
}