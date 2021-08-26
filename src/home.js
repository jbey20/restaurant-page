const loadHome = () => {
  const content = document.getElementById('content');
  
  const main = document.createElement('main');
  const title = document.createElement('h1');
  title.textContent = "Truffoni's Steakhouse";
  const subtitle = document.createElement('h2');
  subtitle.textContent = 'Home of the original Sloppy Steak!';
  const copy = document.createElement('p');
  copy.textContent = "If you USED to be a piece of s@#!, you'll love it here!";
  
  content.appendChild(main);
  main.appendChild(title);
  main.appendChild(subtitle);
  main.appendChild(copy);

}
export {loadHome};