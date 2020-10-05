import React from "react";


function Scroll(props)
{

     return <div className="scroll-down" >
     <div className="centered" style={props.n==1?{color: "white"}:{}}>
        {props.n%2? "SCROLL DOWN TO SEE MORE": "KEEP SCROLLING, THERE IS STILL MORE TO COME"}
     </div>
     <svg className="centered" width="31" height="31" style={props.n==1?{fill: "white"}:{}}>
         <polygon points="-0.5,1.605 1.5,-0.5 15.042,13.039 28.458,-0.376 30.5,1.688 15.042,16.63 	"/>
         <polygon points="-0.5,15.475 1.5,13.37 15.042,26.909 28.458,13.494 30.5,15.557 15.042,30.5 	"/>
     </svg>
 </div>

}

export default Scroll;