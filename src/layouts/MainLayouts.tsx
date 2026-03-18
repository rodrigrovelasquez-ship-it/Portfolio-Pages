import { NavBar } from "../components/NavBar";
import { Outlet } from "react-router-dom";

export const MainLayouts = ()  => {
    // Se usa para mantener el ano del footer actualizado automaticamente.
    const year = new Date().getFullYear()

    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden text-white">
            {/* Fondo decorativo suave para toda la web */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
            </div>

            {/* Cabecera común para todas las vistas que usan este layout */}
            <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
                <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
                    <div className="flex items-center gap-3">
                        <span className="inline-block h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px] shadow-cyan-300/60" />
                        <p className="text-sm font-semibold tracking-wide text-slate-100">Rodrigo | ASIR Portfolio</p>
                    </div>
                    <NavBar />
                </div>
            </header>

            {/* Aquí React  Router renderiza la página de la ruta activa */}
            <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
                <Outlet />
            </main>

            {/* Pie común para todas las vistas que usan este layout */}
            <footer className="border-t border-white/10 bg-slate-950/50">
                <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 text-sm text-gray-400 sm:px-6">
                    <p className="text-slate-300">Portfolio personal</p>
                    <p>Copyright {year}</p>
                </div>
            </footer>

        </div>
    )
}   