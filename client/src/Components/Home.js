import React from "react";
import {Link} from "react-router-dom";
import "../index.css"

const Home = () =>{
    return(
<div className="   test d-flex flex-row justify-content-center align-items-center">
    <div className=" welcome text-center   ">
        <h1 className="text" >Welcome message</h1>
        <Link to="/login">
        <button type="button" className="  mx-4 btn btn-primary rounded-pill">log in</button>
        </Link>
        <Link to="/register">
        <button type="button" className=" mx-4 btn btn-primary rounded-pill">Register</button>
        </Link>
    </div>
</div>
    )}

export default Home