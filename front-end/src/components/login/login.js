import React, {useState} from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Login = ({setLoginUser}) => {

    const navigate = useNavigate();

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate("/");
        })
    }

    return (
        <div className="login">
            {/* <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/register")}>Register</div> */}
            {/* <section className="login">
                <div className="login_box">
                    <div className="left">
                        <div className="top_link"><a href="#"><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="" ></img>Return home</a></div>
                        <div className="contact">
                            <form action="">
                                <h3>SIGN IN</h3>
                                <input type="text" placeholder="USERNAME" ></input>
                                <input type="text" placeholder="PASSWORD"></input>
                                <button className="submit">LET'S GO</button>
                            </form>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right-text">
                            <h2>LONYX</h2>
                            <h5>A UX BASED CREATIVE AGENCEY</h5>
                        </div>
                        <div className="right-inductor"><img src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft" alt=""></img></div>
                    </div>
                </div>
            </section> */}
            <div className="box-form">
                <div className="left">
                    <div className="overlay">
                    <h1>Cab Booking.</h1>
                    <p>Why drive, when you can sit back and relax.
                    Let us find the best driver for you</p>
                    <span>
                        <p type="submit" onClick={() => navigate("/register")}>Register</p>
                    </span>
                    </div>
                </div>
                
                
                    <div className="right">
                        <br></br><br></br>
                    <h5>Login</h5>
                    <br></br><br></br>
                    <br></br><br></br>
                    <p>Don't have an account? <a href="#" onClick={() => navigate("/register")}>Creat Your Account</a> it takes less than a minute</p>
                    <div className="inputs">
                        <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                        <br></br>
                        <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
                    </div>
                        
                        <br></br><br></br>
                        
                        <br></br>
                        <button onClick={login}>Login</button>
                </div>
                
            </div>
        </div>
    )
}

export default Login