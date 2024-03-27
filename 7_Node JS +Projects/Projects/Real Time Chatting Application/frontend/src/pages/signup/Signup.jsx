import React from 'react';
import GenderCheck from './GenderCheck';

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center txtgra'>Sign Up 👻</h1>

            <form>
                <div>
                    <lable  className="label p-2">
                    <span className='text-base label-text'>Full Name</span>
                    </lable>
                    <input type='text' placeholder='Enter Full name' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <lable  className="label p-2">
                    <span className='text-base label-text'>Username</span>
                    </lable>
                    <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <lable  className="label p-2">
                    <span className='text-base label-text'>Password</span>
                    </lable>
                    <input type='text' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
                </div>

                <div>
                    <lable  className="label p-2">
                    <span className='text-base label-text'>Confirm Password</span>
                    </lable>
                    <input type='text' placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
                </div>

                {/* Gender Checkbox here  */}
                <GenderCheck/>

                <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-4 mb-2 inline-block' > Already have account?</a>
                <div className='flex items-center justify-center'>
                    <button className='btn btn-sm mt-2 text-center w-20 '>Sign Up</button>
                </div>
            </form>

            </div>
        </div>
    );
}

export default SignUp;






// import React from 'react';
// import GenderCheck from './GenderCheck';

// const SignUp = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//             <h1 className='text-3xl font-semibold text-center txtgra'>Sign Up 👻</h1>

//             <form>
//                 <div>
//                     <lable  className="label p-2">
//                     <span className='text-base label-text'>Full Name</span>
//                     </lable>
//                     <input type='text' placeholder='Enter Full name' className='w-full input input-bordered h-10'/>
//                 </div>
//                 <div>
//                     <lable  className="label p-2">
//                     <span className='text-base label-text'>Username</span>
//                     </lable>
//                     <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'/>
//                 </div>
//                 <div>
//                     <lable  className="label p-2">
//                     <span className='text-base label-text'>Password</span>
//                     </lable>
//                     <input type='text' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
//                 </div>

//                 <div>
//                     <lable  className="label p-2">
//                     <span className='text-base label-text'>Confirm Password</span>
//                     </lable>
//                     <input type='text' placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
//                 </div>

//                 {/* Gender Checkbox here  */}
//                 <GenderCheck/>

//                 <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-4 mb-2 inline-block' > Already have account?</a>
//                 <div className='flex items-center justify-center'>
//                     <button className='btn btn-sm mt-2 text-center w-20 '>Sign Up</button>
//                 </div>
//             </form>

//             </div>
//         </div>
//     );
// }

// export default SignUp;
