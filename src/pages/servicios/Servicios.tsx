import DatasServicios from './DataServicios';
import { Servicios as ServiciosGrid } from './ServiciosCard';

export default function Servicios() {
  return (
    <section className="space-y-6 py-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Servicios</h1>
        <p className="mt-2 text-slate-300">
          Proyectos y tareas practicas que he desarrollado en redes, sistemas y desarrollo web.
        </p>
      </header>

      <ServiciosGrid servicios={DatasServicios} />
    </section>
  );
}
