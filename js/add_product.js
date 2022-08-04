const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = document.querySelector("[data-url]").value;
  const categoria = document.querySelector("[data-categoria]").value;
  const nombre = document.querySelector("[data-name]").value;
  const precio = document.querySelector("[data-price]").value;
  const descripcion = document.querySelector("[data-desc]").value;
 
  
  crearCliente(url, categoria,nombre, precio, descripcion)
    .then(() => {
      console.log("Enviado");
    })
    .catch((err) => console.log(err));
});


const crearCliente = (url, categoria, nombre, precio, descripcion) => {
  return fetch('http://localhost:3000/posts', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url, categoria,nombre, precio, descripcion }),
  });
};


