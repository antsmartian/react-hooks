import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/layout';
import useHistory from './lib/use-history';
import Grid from "./components/grid";

// const App = () => {
//
//     const [ drawing, setDrawing, drawingHistory ] = useHistory([])
//
//     const draw = coord => setDrawing([ ...drawing, coord ])
//
//     return (
//         <Layout>
//             <button onClick={e => {
//                 e.preventDefault();
//                 drawingHistory.undo();
//             }} disabled={!drawingHistory.hasUndo}>
//                 {`<= undo`}
//             </button>
//             <button onClick={e => {
//                 e.preventDefault();
//                 drawingHistory.redo()
//             }} disabled={!drawingHistory.hasRedo}>
//                 {`redo =>`}
//             </button>
//             <br /><br />
//             <Grid count={5} drawing={drawing} draw={draw}/>
//         </Layout>
//     )
// };

const App = () => {

    const [ state, dispatch ] = useHistory({state: [[]], version: 0});

    // const draw = coord => setDrawing([ ...drawing, coord ])
    const draw = coord => dispatch({type:'createVersion', data: coord});

    return (
        <Layout>
            <button onClick={e => {
                e.preventDefault();
                dispatch({type: 'undo'})
            }}>
                {`<= undo`}
            </button>
            <button onClick={e => {
                e.preventDefault();
                dispatch({type: 'redo'})
            }}>
                {`redo =>`}
            </button>
            <br /><br />
            {/*<Grid count={5} drawing={drawing} draw={draw}/>*/}
            <Grid count={5} drawing={state.state[state.version]} draw={draw}/>
        </Layout>
    )
};

ReactDOM.render(<App />, document.getElementById('root'))
