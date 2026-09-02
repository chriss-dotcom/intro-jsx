// importo libreria de react para crear elementos
import React from "https://esm.sh/react@18.2.0";
//importo libreria de react para manipular el DOM
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

// busco el contenedor donde voy a trabajar con react en mi DOM actual
const rootElement = document.getElementById("root");
// configuro el root de react pasando el elemento anterior al gestionador
// del DOM de React (ReactDOM)
const root = ReactDOM.createRoot(rootElement);

// creo un elemento cualquiera
//const elemento = React.createElement("elemento", "atributos", "hijos","hijo2","hijoN...");


const header = React.createElement("header", null,
    React.createElement("h1", null, "Bienvenido a Mi Sitio Web"),
    React.createElement("p", { className: "subtitle" }, "Una página de ejemplo creada con HTML y CSS")
);

const content = React.createElement("div", { className: "content" },
    React.createElement("main", { className: "main-content" }),
    React.createElement("aside", { className: "sidebar" },
        React.createElement("h3", null, "Información Adicional"),
        React.createElement("p", null, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti."),
        React.createElement("h3", null, "Lista de Elementos"),
        React.createElement("ul", null,
            React.createElement("li", null, "Primer elemento importante"),
            React.createElement("li", null, "Segundo elemento relevante"),
            React.createElement("li", null, "Tercer elemento destacado"),
            React.createElement("li", null, "Cuarto elemento esencial")
        ),
        React.createElement("div", { className: "card" },
            React.createElement("h3", null, "Dato Curioso"),
            React.createElement("p", null, "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."),
        ),
    )
);

const footer = React.createElement("footer", { className: "footer-text" }, "© 2025 Mi Sitio Web. Página creada con HTML puro y CSS.");

const container = React.createElement("div", { className: "container" }, header, content, footer);

//dibujo el elemento en el gestionador del DOM de react con render()
root.render(container);