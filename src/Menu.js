import React from "react";

function Menu(props)
{


    var links = ["home", "about me", "portfolio", "contact"];

    var style = props.n==1?{color: "white", fill: "white"}:{};
    
    return <>  
        <nav className="menu">
            {links.map((link,index)=>
            <a key={index} style={style} href={"#"+(index+1)}>
                {link.toUpperCase()} 
            </a>)}
    </nav>
    <svg className="centered line" style={style}>
    <rect width="100%" height="1"/>
        </svg>
    </>
}

export default Menu;