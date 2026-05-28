const ul = document.querySelector("#ul");

const arrayElementos = ["Rio Tercero", "Cordoba Capital", "Corralito"];

const fragment = document.createDocumentFragment(); // new DocumentFragment()

arrayElementos.forEach((ciudad) => {
  const li = document.createElement("li");
  li.classList.add("list");

  const bold = document.createElement('b');
  bold.textContent = 'ciudad: ';

  const span = document.createElement('span');
  span.textContent = ciudad;

  li.appendChild(bold);
  li.appendChild(span);
  fragment.appendChild(li);
});

ul.appendChild(fragment);

const form = document.querySelector('#form_cities');
const cityName = document.querySelector("input[name='city']");

console.log(form);
console.log(cityName);

form.addEventListener("submit" , (e) => {
  e.preventDefault();


  const newElement = document.createDocumentFragment(); // new DocumentFragment()

  const li = document.createElement("li");
  li.classList.add("list");

  const bold = document.createElement('b');
  bold.textContent = 'ciudad: ';

  const span = document.createElement('span');
  console.log(cityName.value);
  span.textContent = cityName.value;

  li.appendChild(bold);
  li.appendChild(span);
  newElement.appendChild(li);

  ul.appendChild(newElement);
  cityName.value = '';
})