const integrantes = [
  {
    nombre: "Nombre:Juan Pablo",
    rol: "Rol: Líder"
  },
  {
    nombre: "Nombre:Carlos Jacobo",
    rol: "Rol: Diseñador CSS"
  },
  {
    nombre: "Nombre:Nayeli",
    rol: "Rol: Redactor HTML"
  }
];

const contenedorEquipo = document.getElementById("equipo");
const anio = document.getElementById("anio");

integrantes.forEach((integrante) => {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("card");

  tarjeta.innerHTML = `
    <h3>${integrante.nombre}</h3>
    <p>${integrante.rol}</p>
  `;

  contenedorEquipo.appendChild(tarjeta);
});

anio.textContent = new Date().getFullYear();
