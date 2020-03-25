import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"

function Navigation (){
    return <div className="gnb">
        <Link exact="ture" to="/">Home</Link>
        <Link to={{pathname:"/about",state:{ fromNavigation: true}}}>about</Link>        
    </div>

}

export default Navigation;