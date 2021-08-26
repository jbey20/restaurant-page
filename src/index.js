import {loadPage} from './page-load';
import {loadHome} from './home';
import './stylesheets/home-style.css'

loadPage();
loadHome();

const content = document.getElementById('content');

document.querySelectorAll('.header-list-item').forEach(item => {
  item.addEventListener('click', e => {
    if (e.target.textContent == 'Home' || e.target.textContent == `Truffoni's`) {
      removeAllChildNodes(content);
      loadHome();
    }
    else if (e.target.textContent == 'Make a Reservation') {

    }
    else if (e.target.textContent == 'Menu') {

    }
  });
});

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
};