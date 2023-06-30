import datos from "../assets/datos.json"
import { TrabajoLista } from "./TrabajoLista"

export function Trabajo(){
    return (
        <div>
            <ul>
                {datos.map((dato) => <TrabajoLista key={dato.id} dato={dato} />
                )}
            </ul>
        </div>
    )
}