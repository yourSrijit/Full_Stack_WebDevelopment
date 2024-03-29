import React from 'react';

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
           <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
           <h1 className='text-3xl font-semibold text-center txtgra'>Login🧑‍🚀</h1>

            <form>
                <div>
                    <lable  className="label p-2">
                    <span className='text-base label-text'>Username</span>
                    </lable>
                    <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <lable  className="label">
                    <span className='text-base label-text'>Password</span>
                    </lable>
                    <input type='text' placeholder='Enter password' className='w-full input input-bordered h-10'/>
                </div>

                <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 mb-2 inline-block' > {"Dont't"} have an account ?</a>
                <div className='flex items-center justify-center'>
                    <button className='btn btn-sm mt-2 text-center w-20 '>Login</button>
                </div>
            </form>
           </div>
        </div>
    );
}

export default Login;

/*
import React from 'react';

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
           <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
           <h1 className='text-3xl font-semibold text-center txtgra'>Login🧑‍🚀</h1>

            <form>
                <div>
                    <lable  className="label p-2">
                    <span className='text-base label-text'>Username</span>
                    </lable>
                    <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <lable  className="label">
                    <span className='text-base label-text'>Password</span>
                    </lable>
                    <input type='text' placeholder='Enter password' className='w-full input input-bordered h-10'/>
                </div>

                <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 mb-2 inline-block' > {"Dont't"} have an account ?</a>
                <div className='flex items-center justify-center'>
                    <button className='btn btn-sm mt-2 text-center w-20 '>Login</button>
                </div>
            </form>
           </div>
        </div>
    );
}

export default Login;

*/