import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
    const { authUser, setAuthUser } = useAuthContext();
    const [loading, setLoading] = useState(false);

    const logout = async () => {
        if (!authUser) {
            toast.error('You need to login first');
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            // If the user logs out
            localStorage.removeItem("log-user");
            setAuthUser(null);
            toast.success('Logged out successfully');

        } catch (error) {
            toast.error(error.message);

        } finally {
            setLoading(false);
        }
    }
    return { loading, logout }
}
export default useLogout;
