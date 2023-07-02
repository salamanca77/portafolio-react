export function ProyectoItem({ img, title }) {
    return (
        <div className="relative flex items-center justity-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] ">
            <img src={img} alt="/" className="w-full object-cover h-[350px] rounded-xl group-hover:opacity-10" />
            <div className="w-full hidden group-hover:block absolute">
                <h3 className=" text-2xl font-bold text-white tracking-wider text-center">{title}</h3>
                <p className="pb-4 pt-2 text-white text-center">React js</p>
                <a href="/">
                    <p className="text-center p-3 rounded-lg bg-white text-gray-500 font-bold cursor-pointer text-lg">Mas informacion</p>
                </a>
            </div>
        </div>
    )
}