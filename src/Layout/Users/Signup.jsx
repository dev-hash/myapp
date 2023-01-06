import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { UserSignupActionHandler } from "../../Redux/Actions/UserSignup";

 const Signup=()=>{
    let dispatch=useDispatch()
    const {register, handleSubmit } = useForm({
        mode:onchange,
    });
    const onSubmit = (data) => {
        dispatch(UserSignupActionHandler(data))
        }

    return (
       <>
       <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 lg:max-w-xl w-4/12">
                <h1 className="text-3xl font-semibold text-center text-purple-600 underline uppercase ">
                    Sign UP
                </h1>
                <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800 text-left"
                        >
                           Name
                        </label>
                        <input
                             {...register('name')}
                            type="text"
                            placeholder="divine"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800 text-left"
                        >
                            Email
                        </label>
                        <input
                          {...register('email')}
                            type="email"
                            placeholder="name@company.com"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800 text-left"
                        >
                            Password
                        </label>
                        <input
                          {...register('password')}
                            type="password"
                            placeholder="••••••••"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-purple-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800 text-left"
                        >
                         Mobile No.
                        </label>
                        <input
                          {...register('number')}
                            type="text"
                            placeholder="1234567890"
                            className="block w-full px-4 py-2 mt-2 text-purple-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800 text-left"
                        >
                            Profile
                        </label>
                        <input
                          {...register('image')}
                            type="text"
                            placeholder="image.jpg"
                            className="block w-full px-4 py-2 mt-2 text-purple-600 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-600 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <a
                        href="/"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign in
                    </a>
                </p>
            </div>
        </div>
       </>
    );
}

export default Signup