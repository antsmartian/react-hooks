import React from 'react'


const Button = ({onClick, disabled, text}) => {
    return (
        <button style ={{
            width: '120px',
            height: '2em',
            backgroundColor: '#5cb85c',
            border: 'none',
            borderRadius: '12px',
            fontWeight : '20px'
        }} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button;
