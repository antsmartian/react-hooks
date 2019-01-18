import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/layout';
import useHistory from './lib/use-history';
import Grid from "./components/grid";
import Button from "./components/Button"

const App = () => {

    const [ drawing, setDrawing, drawingHistory ] = useHistory([])

    const draw = coord => setDrawing([ ...drawing, coord ])

    return (
        <Layout>
            <Button onClick={drawingHistory.undo}
                    disabled={!drawingHistory.hasUndo}
                    text={'<= Undo'} />

            <Button onClick={drawingHistory.redo}
                    disabled={!drawingHistory.hasRedo}
                    text={'Redo =>'} />

            <br /><br />
            <Grid count={5} drawing={drawing} draw={draw}/>
        </Layout>
    )
};

ReactDOM.render(<App />, document.getElementById('root'))
