export function Contacto() {
    return (
        <div id="contacto" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="py-4 text-4xl font-bold text-[001b5e] text-center text-[#001b5e]">Contacto</h1>
            
            <form action="" method="POST" encType="multipart/form-data">
            
            <div className="grid md:grid-cols-2 gap-2 w-full py-2">
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input className="border-2 rounded-lg p-3 border-gray-300" type="text" name="name" />
                </div>

                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone</label>
                    <input className="border-2 rounded-lg p-3 border-gray-300" type="text" name="phone" />
                </div>
            </div>

            <div className="flex flex-col">
                <label className="uppercase text-sm py-2" >Email</label>
                <input className="border-2 rounded-lg p-3 border-gray-300" type="email" name="email"  />
            </div>
            
            <div className="flex flex-col">
                <label className="uppercase text-sm py-2" >Subject</label>
                <input type="text" name="Subject" /> 
            </div>
 
            <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2" >Message</label>
                <textarea rows='10' type="text" name="message" className="border-2 rounded-lg p-3 border-gray-300" />
            </div>
            <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
                Enviar
            </button>
            </form>
        </div>
    )
} 