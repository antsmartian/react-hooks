import { useState } from 'react'

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

export default useHistory
