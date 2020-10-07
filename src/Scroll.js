import React from "react";


function Scroll(props)
{

    function goTo(id)
    {
        var element = document.getElementById(id);
        if(element)
        {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
     return <>
     <div className="scroll-down" style={{
        textAlign:"center",
        position: "absolute",
        bottom: "110px",
        width:"100%"
        }}>
        {props.n%2? "SCROLL DOWN TO SEE MORE": "KEEP SCROLLING, THERE IS STILL MORE TO COME"}
     </div>
     <svg width="31" height="31" 
        onClick={()=>{goTo(props.n + 1)}} 
        style={{
            textAlign:"center",
            position: "absolute",
            bottom: "50px",
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer"
            }}>
         <polygon points="-0.5,1.605 1.5,-0.5 15.042,13.039 28.458,-0.376 30.5,1.688 15.042,16.63 	"/>
         <polygon points="-0.5,15.475 1.5,13.37 15.042,26.909 28.458,13.494 30.5,15.557 15.042,30.5 	"/>
     </svg>
 </>

}

export default Scroll;