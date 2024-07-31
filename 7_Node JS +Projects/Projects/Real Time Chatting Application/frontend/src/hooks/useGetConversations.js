import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";


 function useGetConversations() {
    const[loading,setLoading]=useState(false);
    const[conversation,setConversation]=useState([]);
    const{selectedConversation}=useConversation();

    
    useEffect(()=>{
        const getConversation=async()=>{
            setLoading(true)
            try{
                const res=await fetch("/api/users");
                const data=await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                setConversation(data);
            }catch(error){
                toast.error(error.message)
            }finally{
                setLoading(false);
            }
        }
        getConversation();
    },[])

    return {loading,conversation}
}

export default useGetConversations