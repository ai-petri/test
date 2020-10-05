import React from "react";

function Menu(props)
{

    function goTo(id)
    {
        var element = document.getElementById(id);
        if(element)
        {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    var links = ["home", "about me", "portfolio", "contact"];

    var style = props.n==1?{color: "white", fill: "white"}:{};
    
    return <>  
        <nav className="menu">
            {links.map((link,index)=>
            <span key={index} style={style} onClick={()=>goTo(index + 1)}>
                {link.toUpperCase()} 
            </span>)}
    </nav>
    <svg className="centered line" style={style}>
    <rect width="100%" height="1"/>
        </svg>
    </>
}

export default Menu;