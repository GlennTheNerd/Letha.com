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
      price: 78.99
    },
    {
      name: "Bashful Brogue",
      description:
        "Our Bashful Brogue is one of our most popular shoes. It is perfect as formal wear or for office use. Its comfortable sole makes it perfect for all day wear. The brogue is made from brown or black leather and is studded using our unique pattern.",
      imageUrl:
        "https://images.unsplash.com/photo-1504826023244-4694f7330c73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",
      id: 2,
      sizes: [37, 38, 39, 40, 41, 43, 44, 45],
      price: 69.99
    },
    {
      name: "Nice and Easy",
      description:
        "Perfect for every occasion, Nice and Easy is the perfect all-rounder to ensure you're always looking at the top of your game. It's easy to wear and maintain and will be the perfect accompaniment for after dinner drinks, an interview, or even your next date.",
      imageUrl:
        "https://images.unsplash.com/photo-1534233650908-b471f2350922?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
      id: 3,
      sizes: [41, 39, 37, 42, 43, 44],
      price: 89.99
    },
    {
      name: "Calm and Casual",
      description:
        "The calm and casual shoe is perfect for someone who prioritizes both comfort and style. The shoe is light to wear and perfect for relaxing with friends.",
      imageUrl:
        "https://images.unsplash.com/photo-1548430395-ec39eaf2aa1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
      id: 4,
      sizes: [37, 39, 41],
      price: 79.99
    },
    {
      name: "Urbana",
      description:
        "This boot with its characteristic hard-worn look has a real industrial feel and offers the wearer a stylish and down-to-earth look.",
      imageUrl:
        "https://images.unsplash.com/photo-1460066122679-741dd6c4ad37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      id: 5,
      sizes: [41, 39, 37, 42, 44, 46],
      price: 69.99
    }
  ];
  
  buildAllShoppingItems();
  
  function buildAllShoppingItems(){
    const retrievedData = JSON.parse(sessionStorage.getItem("ShoppingCart"));
    const totalContentBox = document.getElementById('shoppingBag');
    console.log(retrievedData) // Log out data from sessionStorage
  
    //check if the array is not empty, then do nothing
    if(retrievedData === null || retrievedData === undefined){
      totalContentBox.innerHTML += `
      <h3>Shopping Bag</h3>
      <div class="itemsContainer">
          <div class="itemImage">
              <img class="imageDisplayed" alt="Picture of Shoes" src="https://axiomoptics.com/wp-content/uploads/2019/08/placeholder-images-image_large.png">
          </div>
          <div class="descriptionForImage" id="descriptionParagraph">
              <p class="descriptionParagraph">No Shoes has been chosen</p>
              <p>Size: N/A</p>
              <p><img id="removeTrash" src="/icons/trash.svg" alt="trash icon"> Remove | <img id="emptyheart" src="icons/emptyheart.svg" alt="wish heart icon"> Heart It</p>
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