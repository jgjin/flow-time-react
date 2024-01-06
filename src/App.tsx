import React, { useCallback, useEffect, useState } from "react"

import "./App.css"
import StatusMessage from "./components/StatusMessage"
import Timer from "./components/Timer"
import { type CurrentMode, Mode, toggleCurrentMode } from "./lib/mode"
import { type CurrentStatus, getCurrentStatus } from "./lib/status"

function App() {
    const [currentMode, setCurrentMode] = useState<CurrentMode>({
        mode: Mode.Working,
        started: new Date(),
    })
    const [currentStatus, setCurrentStatus] = useState<CurrentStatus>(
        getCurrentStatus(currentMode)
    )

    const toggleMode = useCallback(() => {
        const newMode = toggleCurrentMode(currentMode)
        const newStatus = getCurrentStatus(newMode)

        setCurrentMode(newMode)
        setCurrentStatus(newStatus)
    }, [currentMode, setCurrentMode, setCurrentStatus])

    useEffect(() => {
        const interval = setInterval(() => {
            const newStatus = getCurrentStatus(currentMode)
            setCurrentStatus(newStatus)
        }, 500)

        return () => { clearInterval(interval) }
    }, [currentMode, setCurrentStatus])

    return (
        <div className="App" onClick={toggleMode}>
            <Timer seconds={currentStatus.seconds} />
            <StatusMessage status={currentStatus.status} />
        </div>
    )
}

export default App
