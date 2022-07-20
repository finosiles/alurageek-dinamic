//backticks
const crearNuevoProducto = (url,categoria,nombre,precio, descripcion) => {
  const linea = document.createElement("tr");
  const contenido = `


    <td class="td" data-td>
      ${nombre}
    </td>
    <td>${categoria}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
          >
            Editar
          </a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button">
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  `;
  linea.innerHTML = contenido;
  return linea;
};

const table = document.querySelector("[data-table]");

//Abrir http (método,url)

// CRUD   - Métodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE

const listaClientes = () => {
  const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open("GET", "http://localhost:3000/perfil");

    http.send();

    http.onload = () => {
      const response = JSON.parse(http.response);
      if (http.status >= 400) {
        reject(response);
      } else {
        resolve(response);
      }
    };
  });
  return promise;
};

listaClientes()
  .then((data) => {
    data.forEach((perfil) => {
      const nuevoProducto = crearNuevoProducto(perfil.url,perfil.categoria,perfil.nombre,perfil.precio, perfil.descripcion);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error"));

// console.log(data);
//