import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function useRandomNames(initialValue) {
    const [inputValue, setInputValue] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(false);
    const [names, setNames] = useState([]);

    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://uinames.com/api/?amount=10&region=${inputValue}`)
            .then(response => response.json())
            .then(data => {
                setNames(data);
                setIsLoading(false);
            })
    }, [inputValue]);

    return {
        inputValue,
        onChange : handleInputChange,
        names,
        isLoading
    }
}

function App() {

    let randomNames = useRandomNames('Romania');

    return (
        <div>
            <p>
                Enter the region : {' '}
                <input value={randomNames.inputValue}
                       onChange={randomNames.onChange} />
            </p>

            {randomNames.isLoading ? <p>Loading....</p> :
                <div>
                    {
                        randomNames.names.length >=0 &&
                            randomNames.names.map((items, i) => (
                                <div key={i}>
                                    {items.name} {items.gender}
                                </div>
                            ))
                    }
                </div>
            }
        </div>
    )

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
