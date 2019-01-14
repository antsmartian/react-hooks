import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/layout';
import useHistory from './lib/use-history';
import Grid from "./components/grid";

const App = () => {

    const [ drawing, setDrawing, drawingHistory ] = useHistory([])

    const draw = coord => setDrawing([ ...drawing, coord ])

    return (
        <Layout>
            <button onClick={e => {
                e.preventDefault();
                drawingHistory.undo();
            }} disabled={!drawingHistory.hasUndo}>
                {`<= undo`}
            </button>
            <button onClick={e => {
                e.preventDefault();
                drawingHistory.redo()
            }} disabled={!drawingHistory.hasRedo}>
                {`redo =>`}
            </button>
            <br /><br />
            <Grid count={5} drawing={drawing} draw={draw}/>
        </Layout>
    )
};

ReactDOM.render(<App />, document.getElementById('root'))
