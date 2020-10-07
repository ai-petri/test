import React from "react";

function Menu(props)
{


    var links = ["home", "about me", "portfolio", "contact"];

    var [width, setWidth] = React.useState(innerWidth);

    React.useEffect(()=>
    {
        function handleResize()
        {
            setWidth(innerWidth);
        }
        addEventListener("resize", handleResize);

        return () => removeEventListener("resize", handleResize);
        
    }, []);

    var linkStyle = {
        textDecoration: "none",
        margin: "40px 30px",
        fontSize: "20px",
        color: "unset"
    }
    
    var menu1 = links.map((link,index)=><a key={index}  href={"#"+(index+1)} style={linkStyle}> {link.toUpperCase()} </a>);

    var menu2 = <span style={linkStyle}>&infin;Menu</span>;

    var menu = width>600? menu1 : menu2;

    var navStyle1 = 
    {
        display: "flex",
        justifyContent: "center" 
    }

    var navStyle2 =
    {
        display: "block"
    }

    var navStyle = width>600? navStyle1 : navStyle2;


    return <>  
        <nav style={navStyle}>{menu}</nav>
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