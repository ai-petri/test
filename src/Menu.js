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
        color: "unset",
        display: "inline-block",
        cursor: "pointer"
    };

    
    var menu1 = links.map((link,index)=><a key={index}  href={"#"+(index+1)} style={linkStyle}> {link.toUpperCase()} </a>);

    var menu2 = <span style={linkStyle}>&infin;Menu</span>;

    var menu = width>650? menu1 : menu2;

    var navStyle1 = 
    {
        display: "flex",
        justifyContent: "center" 
    }

    var navStyle2 =
    {
        display: "block"
    }

    var navStyle = width>650? navStyle1 : navStyle2;


    return <div className="menu">
    <nav style={navStyle}>{menu}</nav>
    </div>

}

export default Menu;