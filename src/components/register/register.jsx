import { Link, useNavigate } from 'react-router-dom';
//import { DatePicker } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export function Register() {
    const [formulario, setFormulario] = useState({
        name: '',
        email: '',
        birthday: '',
        phone: '',
        password: '',
        userInstagram: '',
        rol: '',
    });

    const navigate = useNavigate();

    const handleChange = (x) => {
        setFormulario({ ...formulario, [x.target.name]: x.target.value })
    };

    const handleSubmit = async (x) => {
        x.preventDefault();
        try {
            const response = await fetch('https://eleink-openapi.onrender.com/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formulario)
            });

            if (response.ok) {
                toast.success('Registro correcto');
                navigate('/login')

                const datos = await response.json();
                console.log(datos);

            } else {
                toast.error('No has introducido ningún campo.');
            }
        } catch (error) {
            console.error('Error:', error);
            navigate('/signin')
        }
    };

    return (
        <section className="mb-8">
            <div className="flex flex-col items-center justify-center bg-white rounded-tl-lg rounded-bl-lg m-0">
                <div className="w-full">
                    <form>
                        {/*NOMBRE*/}
                        <div className="flex justify-center">
                            <div className="relative w-72 mt-5 ">
                                <input type="text" name="name" id="name" placeholder="Correo electrónico" onChange={handleChange}
                                    className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                    autoComplete="off" required />
                                <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                                    Nombre
                                </label>
                            </div>
                        </div>

                        {/*EMAIL*/}
                        <div className="flex justify-center">
                            <div className="relative w-72 mt-5 ">
                                <input type="email" name="email" id="email" placeholder="Correo electrónico" onChange={handleChange}
                                    className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                    autoComplete="off" required />
                                <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                                    Correo electrónico
                                </label>
                            </div>
                        </div>

                        {/*FECHA NACIMIENTO*/}
                        <div className="flex justify-center">
                            <div className="relative w-72 mt-5 ">
                                <input type="text" name="birthday" id="birthday" placeholder="Correo electrónico" onChange={handleChange}
                                    className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                    autoComplete="off" required />
                                <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                                    Fecha nacimiento
                                </label>
                            </div>
                        </div>

                        {/*TELÉFONO*/}
                        <div className="flex justify-center">
                            <div className="relative w-72 mt-5 ">
                                <input type="phone" name="phone" id="phone" placeholder="Correo electrónico" onChange={handleChange}
                                    className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                    autoComplete="off" required />
                                <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                                    Teléfono
                                </label>
                            </div>
                        </div>

                        {/*USUARIO INSTAGRAM*/}
                        <div className="flex justify-center">
                            <div className="relative w-72 mt-5 ">
                                <input type="text" name="userInstagram" id="userInstagram" placeholder="Correo electrónico" onChange={handleChange}
                                    className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                    autoComplete="off" required />
                                <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                                    Usuario instagram
                                </label>
                            </div>
                        </div>

                        {/*CONTRASEÑA*/}
                        <div className="flex justify-center  mb-6">
                            <div className="relative w-72 mt-5 ">
                                <input type="password" name="password" id="password" placeholder="Correo electrónico" onChange={handleChange}
                                    className="peer w-full max-w-md rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                    autoComplete="off" required />
                                <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 
                                        ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 
                                        peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
                                    Contraseña
                                </label>
                            </div>
                        </div>

                        <div className="w-56 max-w-md mx-auto mb-3">
                            <button type="submit" onClick={handleSubmit} className="w-56 lg:w-full bg-gray-200 py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-600 hover:text-white transition-colors">
                                Regístrate
                            </button>
                        </div>
                    </form>
                </div>

                <div>
                    <span className="text-gray-800">
                        ¿Ya tienes cuenta?{" "}
                        <Link to="/login" className="text-gray-900 hover:underline transition-all">
                            Inicia sesión
                        </Link>
                    </span>
                </div>
            </div>
            {/* ALERTAS */}
            <ToastContainer position="top-center" />
        </section>
    )
}