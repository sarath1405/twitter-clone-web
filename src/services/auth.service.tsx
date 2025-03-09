import axios from "axios";
import { environment } from "../enviroment";

const API_URL = `${environment.apiUrl}/auth`;

export const getUserSession = async () => {
    try {
        const response = await axios.get(`${API_URL}/user`, { withCredentials: true });
        if(response.data.data !== null) {
            return response.data.data;
        }
        return null;

    } catch (error: any) {
        console.error("checkUserSession failed", error.message);
        return null;
    }
}

export const logoutUser = async () => {
    try {
        const response = await axios.post(`${API_URL}/logout`, { }, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("logoutUser failed", error);
    }
};