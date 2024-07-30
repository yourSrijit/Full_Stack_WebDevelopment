import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const handleInputError = ({ username, password }) => {
    if (username.length === 0 || password.length === 0) {
        toast.error("Please fill all the fields");
        return false;
    }
    return true;
}

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async ({ username, password }) => {
        const success = handleInputError({ username, password });
        if (!success) return;

        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            const data = await res.json();
            console.log(data);
            if (data.error) {
                throw new Error(data.error);
            }
            

            toast.success('Successfully Logged in');
            localStorage.setItem("log-user", JSON.stringify(data));
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message);

        } finally {
            setLoading(false);
        }
    }

    return { loading, login };
}

export default useLogin;
