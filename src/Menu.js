import React from "react";

function Menu(props)
{


    var links = ["home", "about me", "portfolio", "contact"];

    
    return <>  
        <nav style={{
             display: "flex",
             justifyContent: "center" 
        }}>
            {links.map((link,index)=>
            <a key={index}  href={"#"+(index+1)} style={{
                textDecoration: "none",
                margin: "40px 30px",
                fontSize: "20px",
                color: "unset"
            }}> {link.toUpperCase()} </a>)}
        </nav>
        <svg style={{
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            width: "max(93vw, 600px)",
            height: "1px",
            margin: "0"
        }}>
            <rect width="100%" height="1"/>
        </svg>
    </>
}

export default Menu;