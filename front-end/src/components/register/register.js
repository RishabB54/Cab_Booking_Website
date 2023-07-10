import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate();

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message);
                navigate('/login');
            })
        } else {
            alert("invlid input");
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            {/* <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/login")} >Login</div> */}

            <div class="signup__container">
            <div class="container__child signup__thumbnail">
                <div class="thumbnail__logo">
                     <h1 class="logo__text">CabBooking</h1>
                </div>
                <div class="thumbnail__content text-center">
                <h1 class="heading--primary">Sit back and Relax.</h1>
                <h2 class="heading--secondary">While we handle the city traffic for you</h2>
                </div>
                <div class="thumbnail__links">
                <ul class="list-inline m-b-0 text-center">
                    <li><a href="https://github.com/activelearner7" target="_blank"><i class="fa fa-github"></i></a></li>
                    <li><a href="https://twitter.com/pratham1455" target="_blank"><i class="fa fa-twitter"></i></a></li>
                </ul>
                </div>
                <div class="signup__overlay"></div>
            </div>
            <div class="container__child signup__form">
                <form action="#">
                <div class="form-group">
                    <div class="label username">Username</div>
                    {/* <input class="form-control" type="text" name="username" id="username" placeholder="pratham.gupta" required /> */}
                    <input class="form-control" type="text" name="name" value={user.name} placeholder="pratham.gupta" onChange={ handleChange } required></input>
                </div>
                <div class="form-group">
                    <div class="label email">Email</div>
                    {/* <input class="form-control" type="text" name="email" id="email" placeholder="prathamgupta@cabbooking.com" required /> */}
                    <input class="form-control" type="text" name="email" value={user.email} placeholder="prathamgupta@cabbooking.com" onChange={ handleChange } equired></input>
                </div>
                <div class="form-group">
                    <div class="label password">Password</div>
                    {/* <input class="form-control" type="password" name="password" id="password" placeholder="********" required /> */}
                    <input class="form-control" type="password" name="password" value={user.password} placeholder="********" required onChange={ handleChange }></input>
                </div>
                <div class="form-group">
                    <div class="label repeat password">Repeat Password</div>
                    {/* <input class="form-control" type="password" name="passwordRepeat" id="passwordRepeat" placeholder="********" required /> */}
                    <input class="form-control" type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="********" required onChange={ handleChange }></input>
                </div>
                <div class="m-t-lg">
                    <ul class="list-inline">
                    <li>
                        <input class="btn btn--form" type="submit" value="Register" onClick={register}/>
                    </li>
                    <li>
                        <a class="signup__link" type="submit" onClick={() => navigate("/login")}>I am already a member</a>
                    </li>
                    </ul>
                </div>
                </form>  
            </div>
            </div>
        </div>
    )
}

export default Register