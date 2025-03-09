import React from "react";
import "./logout.scss";
import { useUser } from "../../../../contexts/user.context";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useUser();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <div>
            {user ? 
            <div className="logout-container" onClick={handleLogout}>
                <div className="user-data">
                    <img src="/default-avatar.jpeg" alt="Profile" className="profile-pic" />
                    <div className="user-info">
                        <span className="name">{user?.name}</span>
                        <span className="username">@{user?.username}</span>
                    </div>
                </div>
                <div className="logout-icon">⏻</div>
            </div> : ''
            }
        </div>
        
    );
};

export default Logout;
