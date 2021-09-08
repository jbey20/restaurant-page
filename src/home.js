const loadHome = () => {
  const content = document.getElementById('content');
  
  const main = document.createElement('main');
  main.setAttribute('id', 'main-home');
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
  main.innerHTML +=
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/buK45NW_ikI?start=248&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  ;

  // const html = document.querySelector('html');
  // html.style.overflow = "hidden";
}
export {loadHome};