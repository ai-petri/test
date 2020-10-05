import React from "react";

import Menu from "./Menu";
import Scroll from "./Scroll"


function Section(props)
{
    return <div id={props.n} className={"section "+ (props.n==1? "home": "")} >
    <Menu n={props.n}/>
    <div className="content">
        {props.children}
    </div>
    <Scroll n={props.n} style={{
        position: "absolute",
        bottom: "110px"
    }}/>
    </div>
}


export default  Section;