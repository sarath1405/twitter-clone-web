import { createContext, useContext, useEffect, useState } from "react";
import { getUserSession, logoutUser } from "../services/auth.service";
import { useNavigate } from "react-router-dom";

export interface User {
    id: string;
    name: string;
    username: string;
}

export interface UserContextType {
    user: User | null;
    setUser: any;
    logout: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
    const context = useContext(UserContext);
    if(!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const sessionUser = await getUserSession();
            if (sessionUser) setUser(sessionUser);
        };
        fetchUser();
    }, []);

    const logout = async () => {
        const loggedOut = await logoutUser();
        if(loggedOut) {
            setUser(null);
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
};