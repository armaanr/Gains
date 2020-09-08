export const createUpdateSeconds = (timerStateVar) => {
    return (newSeconds) => {
        const timerState = timerStateVar();
        timerState['seconds'] = newSeconds;
        timerStateVar(timerState);
    }
}