const dishes = [
    {
      category: 'vegetarian',
      image: 'dish1.jpg',
      name: 'Vegetarian Dish 1',
      price: '$9.99'
    },
    // Add more dish objects for each category
  ];
  
  dishes.forEach(dish => {
    const dishElement = document.createElement('div');
    dishElement.classList.add('dish');
  
    const imageElement = document.createElement('img');
    imageElement.src = dish.image;
    imageElement.alt = dish.name;
  
    const nameElement = document.createElement('h3');
    nameElement.textContent = dish.name;
  
    const priceElement = document.createElement('p');
    priceElement.textContent = dish.price;
  
    const orderButton = document.createElement('button');
    orderButton.textContent = 'Order';
  
    dishElement.appendChild(imageElement);
    dishElement.appendChild(nameElement);
    dishElement.appendChild(priceElement);
    dishElement.appendChild(orderButton);
  
    document.querySelector(`#${dish.category} .dish-container`).appendChild(dishElement);
  });