import datos from "../assets/datos.json"
import { TrabajoLista } from "./TrabajoLista"

export function Trabajo(){
    return (
        <div id='trabajo' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
           <h1 className="text-4xl font-bold text-center text-[#001b5e]">Trabajo</h1>
            <ul>
                {datos.map((dato) => <TrabajoLista key={dato.id} year={dato.year} title={dato.title} duration={dato.year} details={dato.details}/>
                )}
            </ul>
        </div>
    )
}