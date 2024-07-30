import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup=()=>{
    const[loading,setLoading]=useState(false);
    const {setAuthUser}=useAuthContext();

    const signup=async({fullName,username,password,confirmPassword,gender})=>{
        const success=handelInputError({fullName,username,password,confirmPassword,gender})
        if(!success) return;

        setLoading(true);
        try{
            const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
			});

            const data=await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            
            toast.success('Successfully Signed in')

            //local Storage 
            localStorage.setItem("log-user",JSON.stringify(data));
            // contaxt api 
            setAuthUser(data);

        }
        catch(error){
            toast.error(error.message)
        }
        finally{
            setLoading(false);
        }
    }
     return {loading,signup}

}

export default useSignup

const handelInputError=({fullName,username,password,confirmPassword,gender})=>{
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please fill all the fields");
        return false;
    }
    if(password !== confirmPassword){
        toast.error("Password don't match");
        return false;
    }
    if(password.length<4){
        toast.error("Password must be atleast 4 characters")
        return false;
    }
    return true;

}