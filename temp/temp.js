const form = document.getElementById('form');

form.onsubmit = (event) => {
  event.preventDefault();
  console.dir(form[0].value);
};
