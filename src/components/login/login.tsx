import './login.scss';
import { environment } from '../../enviroment';
import Navbar from '../navbar/navbar';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/user.context';

export default function Login () {
    const navigate = useNavigate();
    const { user } = useUser();

    useEffect(() => {
        if(user) {
            navigate('/home');
        }
    }, [user]);

    const handleLoginWithTwitter = () => {
        window.location.href = `${environment.apiUrl}/auth/twitter`;
    }

    return (
        <div className="login-container">
            <Navbar />

            <div className="login-wrapper">
                <div className="login-box">
                    <div className="header">Twitter Clone</div>
                    <div className="secondary">Log in to your account</div>
                    <div className="login-btn" onClick={handleLoginWithTwitter}>
                        <div className="x-icon"><i className="fa-brands fa-x-twitter"></i></div>
                        <div className="label">Continue with Twitter</div>
                    </div>
                </div>
            </div>
        </div>
    )
}