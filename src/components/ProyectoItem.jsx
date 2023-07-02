export function ProyectoItem({img, title}){
    return(
         <div className="bg-red-500">
            {/* <div className="bg-green-400 w-ful text-center">holas</div> */}
            <img src={img} className="w-full h-[300px] object-cover "/>
         </div>
    )
}