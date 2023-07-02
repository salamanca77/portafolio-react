import { ProyectoItem } from "./ProyectoItem"
import ProyectoUno from "../assets/placeholder.jpg"
import "./Proyectos.css"

export function Proyecto(){
    return (
        <div id="proyecto" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">
                Proyectos
            </h1>
            <p className="text-center py-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus excepturi itaque et distinctio consectetur tempore hic, repellendus perspiciatis sunt inventore rem suscipit est corrupti recusandae perferendis quo eligendi mollitia corporis.
            </p>

            <div className="grid grid-cols-fill gap-[50px]">
                <ProyectoItem img={ProyectoUno} title="Proyecto uno"/>
                <ProyectoItem img={ProyectoUno} title="Proyecto dos"/>
                <ProyectoItem img={ProyectoUno} title="Proyecto tres"/>
                <ProyectoItem img={ProyectoUno} title="Proyecto"/>
            </div>
        </div>
    )
}