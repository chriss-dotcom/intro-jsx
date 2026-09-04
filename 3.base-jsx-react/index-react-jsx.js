// importo libreria de react para crear elementos
import React from "https://esm.sh/react@18.2.0";
//importo libreria de react para manipular el DOM
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const Header = () => {
    return (
        <header>
            <h1>Bienvenido a mi sitio Web</h1>
            <p className="subtitle">Una página de ejemplo creada con HTML y CSS</p>
        </header>
    )
}

const Footer = () => {
    return (
        <footer className="footer-text">
            <p className="footer-text">© 2025 Mi Sitio Web. Página creada con HTML puro y CSS.</p>
        </footer>
    )

}

const App = () => {
    return (
        <div className="container">
            <Header />
            <Footer />
        </div>
    )
}

//const rootElement = document.getElementById("root");
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);

ReactDOM.createRoot(document.getElementById("root")).render(<App />)