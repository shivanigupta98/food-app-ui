import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <h5>Online Status: {onlineStatus ? "✅" : "🔴"}</h5>
                    </li>
                    <li>
                        <Link to="/"> Home</Link>
                    </li>
                    <li>
                        <Link to="/about"> About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                     <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                    <button className="login-btn" onClick={() => {
                        btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
                    }}>{btnName}</button>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Header;