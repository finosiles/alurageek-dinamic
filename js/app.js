const cards = document.getElementById('cards');
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded",(e)=>{
  fetchData();
});

let  datos;

const fetchData = async () => {
 
    const res = await fetch('http://localhost:3000/posts');
    const data = await res.json();
    datos = data;
    console.log(data);
    pintarCards(data);
 
};


const pintarCards = data => {
  data.forEach(item => {

    if(item.categoria == "star wars"){
      templateCard.querySelector('img').setAttribute('src', item.url);
      templateCard.querySelector('h5').textContent = item.nombre;
      templateCard.querySelector('p').textContent = item.precio;
      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
    }else if (item.categoria == "consolas"){
      templateCard.querySelector('img').setAttribute('src', item.url);
      templateCard.querySelector('h5').textContent = item.nombre;
      templateCard.querySelector('p').textContent = item.precio;
      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone)}else if (item.categoria == "diversos"){
      templateCard.querySelector('img').setAttribute('src', item.url);
      templateCard.querySelector('h5').textContent = item.nombre;
      templateCard.querySelector('p').textContent = item.precio;
      const clone = templateCard.cloneNode(true);
	fragment.appendChild(clone)};
	
    
    
  });
  cards.appendChild(fragment);
};
