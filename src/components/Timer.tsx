import React from "react"

import "./Timer.css"

export interface TimerProps {
    seconds: number | undefined
}
function Timer({ seconds }: TimerProps) {
    if (seconds === undefined) {
        return null
    }

    return (
        <h1 className="Timer">{formatSeconds(seconds)}</h1>
    )
}

function formatSeconds(seconds: number): string {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)

    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`

    return `${formattedMinutes}:${formattedSeconds}`
}

export default Timer
