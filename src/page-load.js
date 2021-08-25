const loadPage = () => {
  const head = document.head;
  const style = document.createElement('link');
  head.appendChild(style);
  style.rel = 'stylesheet';
  style.href = '/src/stylesheets/home-style.css';

  const content = document.getElementById('content');
  
  const header = document.createElement('header');
  header.classList.add('header');
  const navList = document.createElement('ul');
  navList.classList.add('header-list');
  navList.classList.add('header-right');

  
  const item0 = document.createElement('a');
  item0.classList.add('logo');
  item0.textContent = `Truffoni's`;
  const item1 = document.createElement('a');
  item1.textContent = 'Home';
  item1.classList.add('active');
  const item2 = document.createElement('a');
  item2.textContent = 'Menu';
  const item3 = document.createElement('a');
  item3.textContent = 'Make a Reservation';

  for (let i = 0; i <= 3; i++) {
    eval(`item${i}.classList.add('header-list-item')`);
  };

  const main = document.createElement('main');
  const title = document.createElement('h1');
  title.textContent = "Truffoni's Steakhouse";
  const subtitle = document.createElement('h2');
  subtitle.textContent = 'Home of the original Sloppy Steak';
  const copy = document.createElement('p');
  copy.textContent = "If you USED to be a piece of s@#!, you'll love it here!";
  const background = document.createElement('img');
  // background.src = '/src/images/background.jpg';
  // background.alt = 'Man pouring a big glass of water over a steak.';
  // background.classList.add('background-image');

  
  content.appendChild(header);
  header.appendChild(item0);
  header.appendChild(navList);

  
  for (let i = 1; i <= 3; i++) {
    eval(`navList.appendChild(item${i})`);
  };
  
  // navList.appendChild(item1);
  // navList.appendChild(item2);
  // navList.appendChild(item3);
  content.appendChild(main);
  main.appendChild(title);
  main.appendChild(subtitle);
  main.appendChild(copy);
  // main.appendChild(background);
};

export {loadPage};



/* <header>
       <ul> Truffoni's
         <li>Book a Table</li>
         <li>Menu</li>
         <li>About Us</li>
       </ul>
     </header>
     <main>
      <h1>Truffoni's Steakhouse</h1>
      <h2>Home of the Original Sloppy Steak</h2>
      <p>If you USED to be a piece of s@#!, you'll love it here!</p>
      <img src="/src/images/background.jpg" alt="Man pouring a big glass of water over a steak">
     </main> */