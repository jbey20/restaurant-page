const loadMenu = () => {
  const content = document.getElementById('content');
  content.innerHTML = `
  <div id="menu" class="">
    <h1 class="menu-title">THE MENU</h1>
    <div class="menu-header">
    <a class="menu-section" href="#starters">Starters</a>
    <a class="menu-section" href="#salads">Salads</a>
    <span id="starters"></span>
    <a class="menu-section" href="#entrees">Entrees</a>
    </div>
    
    <h1 class="section-title">Starters</h1>
    <div class="">
      <h1><b>Today's Soup</b> <span class="right">$5.50</span></h1>
      <p class="">Rotating, seasonal soup. Ask your waiter for details.</p>
      <hr>
      
      <h1><b>Nachos</b> <span class="right">$8.50</span></h1>
      <p class="w3-text-grey">The fully loaded kind. Like the ones with the beef and the cheese and the beans. Share at your own discretion...</p>
      <hr>
      <span id="salads"></span>
      <h1><b>Garlic bread</b> <span class="right">$9.50</span></h1>
      <p class="w3-text-grey">Grilled ciabatta, garlic butter, onions</p>
      </div>
    
    
    <h1 class="section-title">Salads</h1>
      <div class="">
      
      <h1><b>Caesar</b> <span class="right">$8.50</span></h1>
      <p class="w3-text-grey">Romaine lettuce with freshly made croutons and our world famous dressing.</p>
      <hr>
      
      <h1><b>Cobb</b> <span class="right">$7.50</span></h1>
      <span id="entrees"></span>
      <p class="">Garden salad with tomato, crisp bacon, fried chicken breast, eggs, avocado, chives, blue cheese, and red-wine vinaigrette.</p>
      <hr>
    
    <h1 class="section-title">Entrees</h1>
      <div class="">
    
      <h1><b>Cosmic Gumbo</b> <span class="right">$12.50</span></h1>
      <p class="">It's a cosmic mix, the action of the 90s combined with the exploitation films of the 70s, but with modern touches. It's hyper violent, but it knows what it is. It's a little bit Tarantino, it's definitely a little bit Micheal Mann, it's kind of a cosmic gumbo. It almost moves to the beat of jazz.</p>
      <hr>
      
      <h1><b>"You Can't Skip Lunch" Hot Dog</b> <span class="right">$10.50</span></h1>
      <p class="">In case your boss scheduled a meeting during lunch (I'm not sure that you can DO that...), take on this foot long dog.</p>
      <hr>
      
      <h1><b>Sloppy Steak</b> <span class="right">$18.50</span></h1>
      <p class="">We tried to fight it, but now it's here to stay. A beautiful, big, rare cut of meat with water dumped all over it.</p>
    </div>
  </div> 
  `
}

export {loadMenu};