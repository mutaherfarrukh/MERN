import React, { useState } from "react";

const Tabs = (props) => {
    const [selectedIdx, setSelectedIdx] = useState(1);
    //we can put if statement if our object/array is changing but in our case in this project we are giving tabs info ourselves so no need.
    // if(props.tabItems.length === 0) {
    //     return "No Tabs!!";
    // }

    console.log(props);

    return (
        <div style={{marginTop: 40}}>
            <header>
            { props.tabItems.map((tab, i) => {
                    return ( 
                    <span key={i} onClick={(event) => { setSelectedIdx(i) }}
                    style={{
                        padding: 20, 
                        marginRight: 10, 
                        border:"1px solid black",
                    }}> 
                        {tab.label} 
                    </span> 
                    );
                })}
                </header>

                <main style={{marginTop: 40}}>
                    <h3>{props.tabItems[selectedIdx].content}</h3>
                </main>

        </div>
    );
};

export default Tabs;