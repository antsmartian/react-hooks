import { useState, useReducer } from 'react'

const useHistory = initialState => {
    const [versions, setVersions] = useState([initialState]);
    const [ currentVersion, setCurrentVersion ] = useState(0);

    const hasUndo = currentVersion !== 0
    const hasRedo = currentVersion !== versions.length - 1;

    const createVersion = version => {
        const nextVersions = hasRedo
            ? versions.slice(0, currentVersion + 1)
            : versions

        console.log(versions)
        setVersions([ ...nextVersions, version ])
        setCurrentVersion(nextVersions.length)
    }

    const undo = () => {
        console.log(currentVersion)
        setCurrentVersion(Math.max(currentVersion - 1, 0))
    }

    const redo = () => {
        console.log(currentVersion)
        setCurrentVersion(Math.min(currentVersion + 1, versions.length - 1))
    }

    return [
        versions[currentVersion],
        createVersion,
        {
            undo,
            redo,
            hasUndo,
            hasRedo
        }
    ]
};


const useHistoryReducer = initialState => {

    function reducer(state, action) {
        switch (action.type) {
            case 'reset':
                return state;
            case 'redo':
                // state.state.pop();
                return {
                    ...state,
                    version : (Math.max(state.version - 1, 0))
                };
            case 'undo':
                // state.state.splice(-1,1);
                return {
                    ...state,
                    version : Math.min(state.version + 1, state.state.length - 1)
                };

            case 'createVersion':
                // console.log("create version", action.data);
                const hasRedo = state.version !== action.data.length - 1;
                const versions = action.data;


                const nextVersions = hasRedo
                    ? state.state.slice(0, state.version + 1)
                    : versions;

                console.log("current state", action.data);
                console.log("state ", state)
                const s = {
                    state : [...state.state, [...action.data]],
                    version : nextVersions.length
                };

                console.log("next versions are ", s)
                return s;
            default:
                // A reducer must always return a valid state.
                // Alternatively you can throw an error if an invalid action is dispatched.
                return state;
        }
    }

    return useReducer(reducer, initialState)
};

export default useHistoryReducer
