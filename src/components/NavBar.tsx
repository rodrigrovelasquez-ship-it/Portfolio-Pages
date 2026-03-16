import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        // Menu principal para navegar entre paginas sin recargar el navegador.
        <nav> 
            {/* Link lleva a la pagina de inicio */}
            <Link to="/">Home</Link>
            {/* Link lleva al listado de trabajos */}
            <Link to="/trabajos">Trabajos</Link> 
            {/* Link lleva a la pagina de contacto */}
            <Link to="/contacto">Contacto</Link>
        </nav>
    )
}   