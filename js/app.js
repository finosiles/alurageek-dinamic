const cards = document.getElementById('cards');
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded",(e)=>{
  fetchData();
});
const consolas =[];
let  datos;

const fetchData = async () => {
 
    const res = await fetch('api.json');
    const data = await res.json();
    datos = data;
    console.log(data);
    pintarCards(data);
 
};


const pintarCards = data => {
  data.forEach(item => {
    
    templateCard.querySelector('img').setAttribute('src', item.url);
    templateCard.querySelector('h5').textContent = item.nombre;
    templateCard.querySelector('p').textContent = item.precio;
      
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};
