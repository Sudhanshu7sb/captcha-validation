import React, { useState } from 'react';
// import { useLogin } from "../hooks/useLogin";
import {getCode} from '../hooks/createCaptcha';

function Login() {

    // eslint-disable-next-line
    const [captcha, setCaptcha] = useState(getCode());
    const [inputedcaptcha, setInputedCatcha] = useState("");




    return (
        <section className=" flex justify-center items-center">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-gray-600 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign up with a new account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col items-start gap-4">
                                    <div className="flex  items-center h-5">
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Captcha</label>
                                        <h4 className='border-2 border-black p-1 ml-4'>{captcha?captcha:""}</h4>
                                    </div>
                                    <div className="ml-3  text-sm">
                                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type Captcha</label>
                                        <input type="text" name="captcha" id="input-captcha" placeholder="type the above captcha" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} onChange={(e)=> setInputedCatcha(e.target.value)} />
                                    </div>
                                </div>

                            </div>
                           
                            <button type="submit" className={(captcha !== inputedcaptcha) ? "w-full disabled hover:cursor-not-allowed " : "w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"} >Sign up</button>


                            <p className="text-sm font-light text-white dark:text-gray-400">
                                Don't have an account yet? <a href="##" className="">Log In</a>
                            </p>
                        </form>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Login