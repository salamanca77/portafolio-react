import { TypeAnimation } from "react-type-animation"
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa"
export function Inicio() {
    return (
        <div id="inicio">
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src="/neom-CzwL_vn445k-unsplash.jpg" alt="IMAGEN" />
            <div className="w-full absolute h-screen top-0 lefl-0 bg-white/50">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center  items-center">
                    <h1>Yo soy Jonn Oliver</h1>
                    <h2>Saludos</h2>
                    <TypeAnimation
                        sequence={[
                            'La curiosidad ',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'es el inicio del crecimiento personal',
                            1000,
                        ]}
                        wrapper="span"
                        speed={30}
                        style={{ fontSize: '1.5em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <div className="flex justify-between pt-6 max-w-[200px] w-full">
                        <FaTwitter />
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
        </div>
    )
}