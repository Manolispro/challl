import React, {useContext} from "react";
import {Link} from "react-router-dom";
import AuthService from "../Services/AuthService";
import {AuthContext} from "../Context/AuthContext";

const Navbar = props =>{
    const{isAuthenticated, user, setIsAuthenticated, setUser} = useContext(AuthContext);
    const onClickLogoutHandler= ()=>{
        AuthService.logout().then(data=>{
           if (data.sucess){
               setUser(data.user);
               setIsAuthenticated(false);
           } 
        });
    }
    const unauntheticatedNavBar = ()=>{
        return (
        <> 
        <Link to="/">
            <li className="nav-item nav-link">HOME</li>
        </Link>
        <Link to="/login">
            <li className="nav-item nav-link">LOGIN</li>
        </Link>
        <Link to="/register">
            <li className="nav-item nav-link">REGISTER</li>
        </Link>
        
        
        </>
     )
    }
    const auntheticatedNavBar = ()=>{
        return (
        <> 
            <Link to="/">
                <li className="nav-item nav-link">HOME</li>
            </Link>
            <Link to="/profile">
                <li className="nav-item nav-link">My profile</li>
            </Link>
           
            {
                user.role === "admin" ?
                <Link to="/admin">
                <li className="nav-item nav-link">admin</li>
            </Link> : null
            }
         
        <button type = "button" className="btn btn-link nav-item nav-link" 
        onClick = {onClickLogoutHandler}>Log out</button>
        
        </>
     )
    }



return(
<nav className="navbar   navbar-expand-lg navbar-light bg-light">
    <Link to ="/">
    <img width="130px" height="70px"src="http://challedu.com/wp-content/uploads/2018/11/logo-new.jpg" alt="logo"/>
        
    </Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarText">
  <ul className="navbar-nav mr-auto">
    {  !isAuthenticated ? unauntheticatedNavBar(): auntheticatedNavBar()}
  </ul>
</div>
</nav>)
}

export default Navbar;