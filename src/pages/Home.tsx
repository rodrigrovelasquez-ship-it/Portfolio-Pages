import homeData from "../data/home.json"

const { items } = homeData

export default function Home() {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gray-900 px-6 py-14 sm:px-10 sm:py-20">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />

      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Informacion personal</h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
          Estudiante de de primero de ASIR, aprendiendo poco a poco e implementando lo aprendido en tareas o proyectos.
          Trabajos realizados para amigos o personales.
        </p>

        <div className="mt-12 rounded-2xl border-0 bg-slate-950/70 p-6">
          <h3 className="text-2xl font-semibold text-white">Biografia</h3>
          <div className="mt-6 space-y-4">
            {/* Items es el json de home , que le puse el nombre de items */}
            {items.map((item) => (
              <article key={item.id} className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-lg font-semibold text-cyan-200">{item.nombre}</p>
                <p className="mt-1 text-sm text-slate-400">{item.date}</p>
                {item.description && <p className="mt-3 text-slate-300">{item.description}</p>}
                {/* Para imagenesurl*/ }
                {item.author?.imgurl && (
                  <img
                    src={item.author.imgurl}
                    alt={item.nombre}
                    className="mt-4 h-28 w-28 rounded-xl border border-white/10 object-cover"
                    referrerPolicy="no-referrer"
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
