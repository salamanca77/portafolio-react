export function Contacto() {
    return (
        <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="py-4 text-4xl font-bold text-[001b5e]">Contacto</h1>
            <form action="" method="POST" encType="multipart/form-data"></form>
            <div className="">
                <div className="">
                    <label>Name</label>
                    <input type="text" name="name" className="" />
                </div>

                <div className="">
                    <label htmlFor="" className="">Phone Number</label>
                    <input type="text" name="phone" />
                </div>
            </div>

            <div className="">
                <label>Email</label>
                <input type="email" name="email" className="" />
            </div>
            <div className="">
                <label htmlFor="" className="" ></label>
                <input type="text" className="" />
            </div>

            <div className="">
                <label htmlFor="" className="" >Message</label>
                <textarea rows='10' type="text" name="message" className="" />
            </div>

            <div className="">
                <label htmlFor="" className="" ></label>
                <input type="text" className="" />
            </div>

        </div>
    )
} 