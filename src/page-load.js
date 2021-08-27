const loadPage = () => {
  const head = document.head;
  const style = document.createElement('link');
  head.appendChild(style);
  // style.rel = 'stylesheet';
  // style.href = "../restuarant-page/src/stylesheets/home-style.css";
  const body = document.querySelector('body');
  
  const header = document.querySelector('header');
  header.classList.add('header');
  const navList = document.createElement('ul');
  navList.classList.add('header-list');
  navList.classList.add('header-right');

  const item0 = document.createElement('a');
  item0.classList.add('logo');
  item0.textContent = `Truffoni's`;
  const item1 = document.createElement('a');
  item1.textContent = 'Home';
  item1.setAttribute('id', 'home');
  item1.classList.add('active');
  const item2 = document.createElement('a');
  item2.textContent = 'Menu';
  const item3 = document.createElement('a');
  item3.textContent = 'Make a Reservation';

  for (let i = 0; i <= 3; i++) {
    eval(`item${i}.classList.add('header-list-item')`);
  };

  header.appendChild(item0);
  header.appendChild(navList);

  for (let i = 1; i <= 3; i++) {
    eval(`navList.appendChild(item${i})`);
  };

  const content = document.getElementById('content');
};

export {loadPage};
