import React from "react";

import Menu from "./Menu";
import Scroll from "./Scroll"


function Section(props)
{
    return <div id={props.n} className={"section " + props.className} >
    <Menu n={props.n}/>
    <div className="content">
        {props.children}
    </div>
    <Scroll n={props.n} />
    </div>
}


export default  Section;