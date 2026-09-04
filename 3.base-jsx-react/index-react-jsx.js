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

const Body = () => {
    return (
        <div className="content">
            <main className="main-content">
                <h2> Contenido Principal</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. <span className="highLight">Ut enim ad minim veniam</span>, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.</p>
                <h3>Características Destacadas</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.</p>
                <div className="card">
                        <h3>Sección Especial</h3>
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem.</p>
                </div>
            </main>
            <aside className="sidebar">
                    <h3>Información Adicional</h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti.</p>
                    <h3>Lista de Elementos</h3>
                    <ul>
                        <li>Primer elemento importante</li>
                        <li>Segundo elemento relevante</li>
                        <li>Tercer elemento destacado</li>
                        <li>Cuarto elemento esencial</li>
                    </ul>
                    <div className="card">
                        <h3>Dato Curioso</h3>
                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
                            quod maxime placeat.</p>
                    </div>
                </aside>
        </div>
        

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
            <Body />
            <Footer />
        </div>
    )
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<App />)
