//Json file
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
  
  buildAllShoppingItems();
  
  function buildAllShoppingItems(){
    const retrievedData = JSON.parse(sessionStorage.getItem("ShoppingCart"));
    const totalContentBox = document.getElementById('shoppingBag');
    const totalSum = document.getElementById('totalSum')
    console.log(retrievedData) // Log out data from sessionStorage
  
    //check if the array is not empty, then do nothing
    if(retrievedData === null || retrievedData === undefined){
      totalContentBox.innerHTML += `
      <h3>List Item</h3>
      <div class="itemsContainer">
          <div class="itemImage">
              <img class="imageDisplayed" alt="Picture of Shoes" src="https://axiomoptics.com/wp-content/uploads/2019/08/placeholder-images-image_large.png">
          </div>
          <div class="descriptionForImage" id="descriptionParagraph">
              <p class="descriptionParagraph">No Shoes has been chosen</p>
              <p>Size: N/A</p>
              <p><img id="removeTrash" src="/icons/trash.svg" alt="trash icon"> Remove | <img id="emptyheart" src="icons/emptyheart.svg" alt="wish heart icon" onclick="likeIconChanger()">Like!</p>
          </div>
          <div class="amountBox">
              <select>
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
              </select>
          </div>
      </div>`
      } else {
          // We have data, lets build
          for (const item of retrievedData){
              // For each item, lets get some html
              itemHtml = buildShoppingList(item);
              totalContentBox.innerHTML += itemHtml; // Add the item html to some div or container
              sumHtml = buildTotalSumList(item);
              totalSum.innerHTML += sumHtml; // Add the item in the sum calculator
          }  
      }
  };

function buildTotalSumList(item){
    let dataItem = data.find(obj => obj.id === item.id)// Fetch item with more info
    dataItem.size = item.size;
    let discountPrice = Math.round(dataItem.price / 100 *75)
    console.log(discountPrice);
    let html = `<h4>Total Sum</h4>
    <div class="leftInfoColumn">
        <p>Price:</p><span class="detail">$${dataItem.price}</span>
        <p>Discount:</p><span class="detail" style="color: red;">25%</span>
        <p>Shipping:</p><span class="detail">Free</span>
    </div>
    <hr id="hr">
    <div class="totalPriceSummary">
        <p id="totalPrice">Total sum:</p><span id="toatlPriceSum">(25%) - $${discountPrice}</span>
    </div>
    <div class="btnContainerPurchase">
        <button id="purchase">Checkout</button>
    </div>`

    return html
}
  
function buildShoppingList(item){
    let dataItem = data.find(obj => obj.id === item.id) // Fetch item with more info
    dataItem.size = item.size; // Add size into the mix
    console.log(dataItem);
    let html = `<h3>List Item</h3>
    <div class="itemsContainer">
    <div class="itemImage">
        <img class="imageDisplayed" alt="Picture of Shoes" src="${dataItem.imageUrl}">
    </div>
    <div class="descriptionForImage" id="descriptionParagraph">
        <p class="descriptionParagraph">${dataItem.name} - $${dataItem.price}</p>
        <p>Size: ${dataItem.size}</p>
        <p><img id="removeTrash" src="/icons/trash.svg" alt="trash icon" onclick="removeTrash(${dataItem.id})"> Remove | <img id="emptyheart" src="icons/emptyheart.svg" alt="wish heart icon" onclick="likeIconChanger()"> Like!</p>
        </div>
        <div class="amountBox">
            <select>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
            </select>
        </div>
    </div>  
        `
    return html
}

//program to change the like icon
function likeIconChanger(){
    let img1 = document.getElementById('emptyheart');
    let img2 = "icons/fullheart.svg";
    let imgElement = document.getElementById('emptyheart');

    // if the heart icon is empty, set it to full heart on click
    if (imgElement === img1){
        console.log('changed successfully')
        imgElement.src = img2
        //Setting back img1 to its original since it changed above
        img1 = "icons/emptyheart.svg"
        //console log to verify img1
        console.log(img1 + " equals img1")
        console.log(img2 + " equals img2")
        //Else If img element is equal to full heart
    } else if (imgElement === img2){
        //Then set it equal to empty heart
        imgElement.src = img1
        console.log(img1)
    }
        
};

//Remove list item
function removeTrash(id){

    const retrievedData = JSON.parse(sessionStorage.getItem("ShoppingCart")); //get data from session storage
    console.log(retrievedData)

    const selectedElement = data.find(obj => obj.id === id); //Find the clicked element matching json

    for (let i = 0; i < retrievedData.length; i++) //Loop through index of session storage array
    console.log(i)
    
    if (selectedElement !== null || selectedElement !== undefined){ //Check if the session storage is not empty
        //Remove the selected Item
        sessionStorage.removeItem("ShoppingCart" + selectedElement.id);
        console.log('successfully removed ' + selectedElement.i)
    } else {
        //Log back to see if it was not removed
        console.log('item not removed');
    }
    //not working?
};