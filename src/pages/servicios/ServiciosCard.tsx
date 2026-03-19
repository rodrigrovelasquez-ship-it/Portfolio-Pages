import { ServicioCard } from "../servicios/ServicioCard";
import type { IServicio } from "../servicios/ServicioCard"; 

interface Props {
    servicios: IServicio[];
}

export const Servicios = ({ servicios }: Props) => {
    return (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {servicios.map((servicio) => (
                <ServicioCard 
                key={servicio.id} 
                servicio={servicio} />
            )
            )
            }
        </div>
    );
};