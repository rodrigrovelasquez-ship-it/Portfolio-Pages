import { NavLink } from "react-router-dom";

export const NavBar = () => {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
            isActive
                ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/25"
                : "text-slate-200 hover:bg-white/10 hover:text-white"
        }`

    return (
        // Menu principal para navegar entre paginas sin recargar el navegador.
        <nav className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 p-1.5 backdrop-blur-md">
            {/* Link lleva a la pagina de inicio */}
            <NavLink to="/" className={linkClass}>Home</NavLink>
            {/* Link lleva al listado de trabajos */}
            <NavLink to="/trabajos" className={linkClass}>Trabajos</NavLink>
            {/* Link lleva a la pagina de servicios */}
            <NavLink to="/servicios" className={linkClass}>Servicios</NavLink>
            {/* Link lleva a la pagina de contacto */}
            <NavLink to="/contacto" className={linkClass}>Contacto</NavLink>
        </nav>
    )
}   