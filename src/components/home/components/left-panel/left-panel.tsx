import Logout from "../logout/logout";
import "./left-panel.scss";

const LeftPanel = () => {
    return (
        <div className="left-panel">
            <div className="menu-item active">
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
            </div>
            <div className="menu-item">
                <i className="fa-solid fa-hashtag"></i>
                <span>Explore</span>
            </div>
            <div className="menu-item">
                <i className="fa-regular fa-bell"></i>
                <span>Notifications</span>
            </div>
            <div className="menu-item">
                <i className="fa-regular fa-envelope"></i>
                <span>Messages</span>
            </div>
            <div className="menu-item">
                <i className="fa-regular fa-bookmark"></i>
                <span>Bookmarks</span>
            </div>
            <div className="menu-item">
                <i className="fa-solid fa-user-group"></i>
                <span>Communities</span>
            </div>
            <div className="menu-item">
                <i className="fa-brands fa-x-twitter"></i>
                <span>Premium</span>
            </div>
            <div className="menu-item">
                <i className="fa-regular fa-user"></i>
                <span>Profile</span>
            </div>
            <div className="menu-item">
                <i className="fa-solid fa-ellipsis"></i>
                <span>More</span>
            </div>
            <Logout/>
        </div>
    );
};

export default LeftPanel;
