function cargarPartials() {
  fetch("../partials/navbar.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("nav-container").innerHTML = html;
    });

  fetch("../partials/sidemenu.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("sidebar-container").innerHTML = html;
    });
}

window.onload = cargarPartials();
