import React from 'react';

const Grid = ({className, count, drawing, draw}) => {

    const style = {
        display: 'grid',
        background: 'white',
        'gridTemplateColumns': 'repeat(auto-fit, minmax(200px, 1fr))',
        'gridAutoRows' : '4rem',
        width : '1000px'
    };

    let cells = [];

    for (let colIdx = 0; colIdx < count; colIdx++) {
        for(let rowIdx=0; rowIdx < count; rowIdx++) {
            const cellCoords = [ colIdx, rowIdx ];

            console.log("render..")
            const isActive = drawing.some(coords =>
                cellCoords[0] === coords[0] && cellCoords[1] === coords[1])
            cells.push(
                <Cell
                    onClick={() => draw(cellCoords)}
                    isActive={isActive}
                />
            )
        }
    }

    return (
        <div style={style}>
            {cells}
        </div>
    )
}

const Cell = ({onClick, isActive}) => {

    const cell = {
        border: '1px solid black',
        background: '#ececec',
        height : '4rem',
        position: 'relative',
        cursor: 'crosshair',
        backgroundColor: isActive ? '#000' : 'inherit',
        borderColor : isActive ? '#a92314' : 'inherit',
        borderWidth: isActive ? '2px' : '1px',
    };


    return (
        <div onClick={onClick} isActive={isActive} style={cell}></div>
    )
}

export default Grid
