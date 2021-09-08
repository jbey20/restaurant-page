import { removeAllChildNodes } from "./index";

const loadReservation = () => {
  const content = document.getElementById('content');
  content.innerHTML = `
    <body>
      <form onsubmit="return false">
        <h1>Make a Reservation</h1>
        <label for='fname'>First Name</label>
        <input type="text" id="fname" name="fname">
        <label for='lname'>Last Name</label> 
        <input type='text' id='lname' name='fname'>
        <label for='email'>Email</label>
        <input type='email' id='email' name='email'>
        <label for='number'>Number of Guests</label>
        <input type='number' id='number' name='number' min='1' max='10'>
        <label for="date">Reservation Date</label>
        <input type="date" id="date" name="date">
        <label for="time">Reservation Time</label>
        <input type="time" id="time" name="time">
        <input type="submit" id="submit" name="submit">
      </form>
    </body> 
  `
  const html = document.querySelector('html');
  html.style.overflow = "hidden";

  const submit = document.getElementById('submit');
  submit.addEventListener('click', () => {
  removeAllChildNodes(content);
  loadConfirmation();
});
}

const loadConfirmation = () => {
  content.innerHTML = `
    <main>
      <h1>Thank You!</h1>
      <h2>Your reservation has been received. You'll get a confirmation via email once we've confirmed your reservation.</h2>
    </main>
  `
}

export {loadReservation};