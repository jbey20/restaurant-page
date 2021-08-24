const loadPage = () => {
  const content = document.getElementById('content');
  
  const header = document.createElement('header');
  const navList = document.createElement('ul');
  navList.textContent = "Truffoni's";
  const item1 = document.createElement('li');
  item1.textContent = 'Make a Reservation';
  const item2 = document.createElement('li');
  item2.textContent = 'Menu';
  const item3 = document.createElement('li');
  item3.textContent = 'About Us';

  const main = document.createElement('main');
  const title = document.createElement('h1');
  title.textContent = "Truffoni's Steakhouse";
  const subtitle = document.createElement('h2');
  subtitle.textContent = 'Home of the original Sloppy Steak';
  const copy = document.createElement('p');
  copy.textContent = "If you USED to be a piece of s@#!, you'll love it here!";
  const background = document.createElement('img');
  background.src = '/src/images/background.jpg';
  background.alt = 'Man pouring a big glass of water over a steak.'

  
  content.appendChild(header);
  header.appendChild(navList);
  navList.appendChild(item1);
  navList.appendChild(item2);
  navList.appendChild(item3);
  content.appendChild(main);
  main.appendChild(title);
  main.appendChild(subtitle);
  main.appendChild(copy);
  main.appendChild(background);
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