const loadMenu = () => {
  const content = document.getElementById('content');

  // const title = document.createElement('h1');
  // title.classList.add('w3-center');
  // title.textContent = 'Menu';
  // title.setAttribute('id', 'menu-title');
  // content.appendChild(title);
  content.innerHTML = `
  <!-- Menu -->
  <div id="menu" class="w3-container w3-black w3-xxlarge w3-padding-64">
    <h1 class="w3-center w3-jumbo w3-padding-32">THE MENU</h1>
    <div class="w3-row w3-center w3-border w3-border-dark-grey">
    <a href="#starters"><div class="w3-third w3-padding-large w3-blue">Starters</div></a>
    <a href="#salads"><div class="w3-third w3-padding-large w3-hover-blue">Salads</div></a>
    <a href="#entrees"><div class="w3-third w3-padding-large w3-hover-blue">Entrees</div></a>
    </div>
    
    <div id="starters" class="w3-container w3-white w3-padding-32">
      <h1><b>Today's Soup</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$5.50</span></h1>
      <p class="w3-text-grey">Rotating, seasonal soup. Ask your waiter for details</p>
      <hr>
      
      <h1><b>Nachos</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$8.50</span></h1>
      <p class="w3-text-grey">The fully loaded kind. Like the ones with the beef and the cheese and the beans. Share at your own discretion...</p>
      <hr>
      
      <h1><b>Garlic bread</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$9.50</span></h1>
      <p class="w3-text-grey">Grilled ciabatta, garlic butter, onions</p>
      </div>
    
    <h1 id="salads" class="w3-center w3-jumbo w3-padding-32">Salads</h1>
      <div class="w3-container w3-white w3-padding-32">
      
      <h1><b>Lasagna</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$13.50</span></h1>
      <p class="w3-text-grey">Special sauce, mozzarella, parmesan, ground beef</p>
      <hr>
      
      <h1><b>Ravioli</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$14.50</span></h1>
      <p class="w3-text-grey">Ravioli filled with cheese</p>
      <hr>
      
      <h1><b>Spaghetti Classica</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$11.00</span></h1>
      <p class="w3-text-grey">Fresh tomatoes, onions, ground beef</p>
      </div>
      
    <h1 id="entrees" class="w3-center w3-jumbo w3-padding-32">Entrees</h1>
      <div class="w3-container w3-white w3-padding-32">
    
      <h1><b>Today's Soup</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$5.50</span></h1>
      <p class="w3-text-grey">Rotating, seasonal soup. Ask your waiter for details</p>
      <hr>
      
      <h1><b>Nachos</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$8.50</span></h1>
      <p class="w3-text-grey">The fully loaded kind. Like the ones with the beef and the cheese and the beans. Share at your own discretion...</p>
      <hr>
      
      <h1><b>Garlic bread</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$9.50</span></h1>
      <p class="w3-text-grey">Grilled ciabatta, garlic butter, onions</p>
    </div>
    </div> 
  `

}

export {loadMenu};