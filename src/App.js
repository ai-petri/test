import React from "react";

import Section from "./Section.js";



function App()
{
    return <>
        <Section n={1}/> 
        <Section n={2}>
        
            <img  src="assets/Jason_Wood.jpg" alt="Jason Wood" width="100%"/>
     
            <h2>ABOUT ME</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br/>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <span style={{"fontSize": "20px"}}>Jason Wood</span>
        </Section>
    </>
}

export default App;
