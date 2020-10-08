import React from "react";

function Menu(props)
{


    var links = ["home", "about me", "portfolio", "contact"];

    var [width, setWidth] = React.useState(innerWidth);
    var [closed, setClosed] = React.useState(true);
    var [visible, setVisible] = React.useState(true);


    var menuRef = React.useRef();

    var y = 0;
    React.useEffect(()=>
    {
        y = menuRef.current.getBoundingClientRect().y;
        if(y>600)
        {
            setVisible(false);
        }

        addEventListener("resize", handleResize);
        addEventListener("scroll", handleScroll);

        return () =>
        {
            removeEventListener("resize", handleResize);
            removeEventListener("scroll", handleScroll);
        } 

    },[])

    function handleResize()
    {
        setWidth(innerWidth);
        handleScroll();
    }

    function handleScroll()
    {
        var currentY = menuRef.current.getBoundingClientRect().y;
        if(currentY<=y && currentY<500) 
        {
            setVisible(true);
        }
        if(currentY>y && currentY>600)
        {
            setVisible(false);
        }
        y = currentY;
    }



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

    return <div ref={menuRef} className={visible?"visible menu":"hidden menu"}>
    <nav style={navStyle}>{menu}</nav>
    </div>

}

export default Menu;