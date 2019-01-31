import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {

    let [names, setNames] = useState([]);

    useEffect(() => {
        fetch("https://uinames.com/api/?amount=10&region=Romania")
            .then(response => response.json())
            .then(data => {
                setNames(data)
            })
    }, []);

    return (
        <div>
            <div>
                {
                    names.map((items, i) => (
                        <div key={i}>
                            {items.name} {items.gender}
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
