import { NavBar } from "../components/NavBar";
import { Outlet } from "react-router-dom";

export const MainLayouts = ()  => {
    return (
        <>
            {/* Cabecera fija con la navegación principal */}
            <header>
                <NavBar />
            </header>

            {/* Aquí React Router renderiza la página de la ruta activa */}
            <main>
                <Outlet />
            </main>

            {/* Pie común para todas las vistas que usan este layout */}
            <footer>
                <p>Copyright 2024</p>
            </footer>

        </>
    )
}   