import { type CurrentMode, Mode } from "./mode"

export enum Status {
    Working,
    Resting,
    Awaiting
}

export interface CurrentStatus {
    status: Status
    seconds?: number
}

export function getCurrentStatus(
    currentMode: CurrentMode,
): CurrentStatus {
    const secondsSince = Math.floor(
        (new Date().getTime() - currentMode.started.getTime()) / 1_000
    )

    if (currentMode.mode === Mode.Working) {
        return {
            status: Status.Working,
            seconds: secondsSince,
        }
    }

    if (secondsSince < currentMode.allowanceSeconds) {
        return {
            status: Status.Resting,
            seconds: currentMode.allowanceSeconds - secondsSince,
        }
    }

    return {
        status: Status.Awaiting,
    }
}
