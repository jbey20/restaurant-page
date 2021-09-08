import {loadPage} from './page-load';
import {loadHome} from './home';
import './stylesheets/home.css';
import './stylesheets/menu.css';
import './stylesheets/reservation.css';
import './stylesheets/fonts.css';
import {loadMenu} from './menu';
import {loadReservation} from './reservation';


loadPage();
loadHome();

const content = document.getElementById('content');

document.querySelectorAll('.header-list-item').forEach(item => {
  item.addEventListener('click', e => {
    document.querySelectorAll('.header-list-item').forEach(item => {
      item.classList.remove('active');
    });
    if (e.target.textContent == 'Home') {
      e.target.classList.add('active');
      removeAllChildNodes(content);
      loadHome();
    }
    if (e.target.textContent == `Truffoni's`) {
      document.getElementById('home').classList.add('active');
      removeAllChildNodes(content);
      loadHome();
    }
    else if (e.target.textContent == 'Make a Reservation') {
      e.target.classList.add('active');
      removeAllChildNodes(content);
      loadReservation();
    }
    else if (e.target.textContent == 'Menu') {
      e.target.classList.add('active');
      removeAllChildNodes(content);
      loadMenu();
    }
  });
});

const bars = document.querySelector('.hamburger');
console.log(bars);
bars.addEventListener('click', showNavbar);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
};

function showNavbar() {
  console.log('showing');
  const x = document.querySelector(".header-list");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
};

export {removeAllChildNodes};