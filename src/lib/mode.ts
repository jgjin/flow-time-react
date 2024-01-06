export enum Mode {
    Working,
    Resting
}

export type CurrentMode = {
    mode: Mode.Working
    started: Date
} | {
    mode: Mode.Resting
    started: Date
    allowanceSeconds: number
}

export function toggleCurrentMode(
    currentMode: CurrentMode
): CurrentMode {
    const now = new Date()

    if (currentMode.mode === Mode.Working) {
        return {
            mode: Mode.Resting,
            started: now,
            allowanceSeconds: Math.floor((now.getTime() - currentMode.started.getTime()) / 5_000),
        }
    }

    return {
        mode: Mode.Working,
        started: now,
    }
}
