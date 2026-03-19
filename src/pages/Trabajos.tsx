import trabajos from "../data/trabajos.json"

const { Data } = trabajos


// Componente que renderiza el bloque de trabajos.
export const Trabajos = () => {
    const getIniciales = (nombre: string) => {
        const partes = nombre.trim().split(" ").filter(Boolean)
        if (partes.length === 0) return "?"
        if (partes.length === 1) return partes[0][0].toUpperCase()
        return `${partes[0][0]}${partes[1][0]}`.toUpperCase()
    }

    return (
        // Contenedor principal de la pagina de proyectos.
        <section id="formacion" className="scroll-mt-16 rounded-3xl border border-white/10 bg-slate-900/60 px-6 py-14 sm:px-10 sm:py-20">
                <div className="mx-auto max-w-7xl">
                    {/* Encabezado de la seccion. */}
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200 "> Proyectos recientes</p>
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Proyectos y practicas</h2>

                    </div>
                    {/* Grid responsive de tarjetas de proyectos. */}
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 border-t border-white/10 pt-10 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
                        {/* Titulo - data es como llamamos al json de trabajos */}
                        {Data.map((Titulo) => (
                            <article key={Titulo.id}
                                className="group flex max-w-xl flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/70 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-xl hover:shadow-cyan-500/10">
                                {/* Fecha y categoria del proyecto. */}
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={Titulo.datetime} className="text-slate-400">
                                        {Titulo.date}
                                    </time>
                                    <a
                                        href={Titulo.category.href}
                                        className="relative z-10 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200"
                                    >
                                        {Titulo.category.title}
                                    </a>
                            
                                
                                </div>
                                {/* Titulo */}
                                <div className="relative grow">
                                    <h3 className="mt-4 text-lg font-semibold leading-7 text-white group-hover:text-cyan-200">
                                        <a href={Titulo.href} className="relative z-10">
                                            {Titulo.title}
                                        </a>
                                    </h3>
                                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-400">{Titulo.description}</p>
                                </div>
                                {/* Entidad y rol. */}
                                <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                                    <div className="grid size-14 shrink-0 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-100">
                                        {getIniciales(Titulo.author.name)}
                                    </div>
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-white">
                                            <a href={Titulo.author.href} className="relative z-10">
                                                {Titulo.author.name}
                                            </a>
                                        </p>
                                        
                                        {/* Esto es para link de la pagina web del autor */}

                                        <p className="text-slate-400">{Titulo.author.role}</p>
                                                {Titulo.author.url && (
                                                <a href={Titulo.author.url} className="relative z-10 text-cyan-200 underline" target="_blank" rel="noreferrer">
                                                    Ver web
                                                </a>

                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
                
            </section>
    )
}