import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserLoginActionHandler } from "../../Redux/Actions/UserLogin";
import { useForm } from "react-hook-form";

 const SignIn=()=>{
    let dispatch=useDispatch()
    const {register, handleSubmit } = useForm({
        mode:onchange,
    });
    const onSubmit = (data) => {
        dispatch(UserLoginActionHandler(data))
        }

    return(
        <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md  shadow-xl shadow-rose-600/40 lg:max-w-xl w-4/12  ">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Sign in
                </h1>
                <form className="mt-6 " onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2 ">
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
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                            placeholder="????????????????????????"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href=""
                        className="text-xs text-purple-600 hover:underline"
                    >
                        <Link to="/ureset-password">Forget Password?</Link>
                    </a>
                    <div className="mt-6">
                    {/* <Link to="/dashboard"> */}
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            SignIn
                        </button>
                        {/* </Link> */}
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href=""
                        className="font-medium text-purple-600 hover:underline"
                    >
                       <Link to="/usignup">SignUp</Link>
                    </a>
                </p>
            </div>
        </div>
   
        </>
    )
}

export default SignIn;