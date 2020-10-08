import React from "react";

function Menu(props)
{


    var links = ["home", "about me", "portfolio", "contact"];

    var [width, setWidth] = React.useState(innerWidth);
    var [closed, setClosed] = React.useState(true);

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
        display: "block",
    };

    
    var menu1 = links.map((link,index)=><a key={index}  href={"#"+(index+1)} style={linkStyle}> {link.toUpperCase()} </a>);

    var menu2 = <>
    <span style={{margin: "40px 30px", fontSize: "20px", display: "inline-block", cursor: "pointer"}} onClick={()=>toggleMenu()}>&infin;Menu</span>
    <div className={closed?"closed":"open"}>{menu1}</div>
    </>

    var menu = width>650? menu1 : menu2;

    var navStyle = width>650? {display: "flex", justifyContent: "center"} : {display: "block"};

    function toggleMenu()
    {
        setClosed(c=>!c);
    }

    return <div className="menu">
    <nav style={navStyle}>{menu}</nav>
    </div>

}

export default Menu;