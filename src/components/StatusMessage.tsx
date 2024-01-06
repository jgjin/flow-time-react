import React from "react"

import "./StatusMessage.css"
import { Status } from "../lib/status"

export interface StatusMessageProps {
    status: Status
}
function StatusMessage({ status }: StatusMessageProps) {
    return (
        <p className="StatusMessage">{getMessage(status)}</p>
    )
}

function getMessage(status: Status): string {
    switch(status) {
        case Status.Working:
            return "Let's work! 🧐"
        case Status.Resting:
            return "Let's rest! 😌"
        case Status.Awaiting:
            return "Let's get to work! 🙌"
    }    


}

export default StatusMessage
