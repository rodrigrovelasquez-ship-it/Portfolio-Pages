export interface IServicio {
  id: number;
  title: string;
  categoria: string;
  description: string;
  img: string;
  tecnologias: string[];
}

interface Props {
  servicio: IServicio;
}

export const ServicioCard = ({ servicio }: Props) => {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/60">
      <img src={servicio.img} alt={servicio.title} className="h-48 w-full object-cover" />
      <div className="space-y-3 p-5">
        <p className="inline-block rounded-full bg-slate-700 px-3 py-1 text-xs text-slate-200">
          {servicio.categoria}
        </p>
        <h3 className="text-xl font-semibold text-white">{servicio.title}</h3>
        <p className="text-sm text-slate-300">{servicio.description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {servicio.tecnologias.map((tecnologia) => (
            <span
              key={tecnologia}
              className="rounded-md border border-slate-600 px-2 py-1 text-xs text-slate-200"
            >
              {tecnologia}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
