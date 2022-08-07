const cards = document.getElementById('lista');
const items = document.getElementById('items');
const templateLista = document.getElementById('template-lista').content;
const fragment = document.createDocumentFragment();


document.addEventListener("DOMContentLoaded",(e)=>{
  fetchData();
});
let datos;
const fetchData = async () => {
 
    const res = await fetch('http://localhost:3000/posts');
    const data = await res.json();
    datos = data;
    console.log(data);
    pintarCarrito(data);
 
};

const  pintarCarrito =data => {

    data.forEach(producto => {
        templateLista.querySelector('th').textContent = producto.id
        templateLista.querySelectorAll('td')[0].textContent = producto.categoria
        templateLista.querySelectorAll('td')[1].textContent = producto.nombre
        templateLista.querySelectorAll('td')[2].textContent = producto.precio
        templateLista.querySelectorAll('td')[3].textContent = producto.descripcion
     

        const clone = templateLista.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

  
}

