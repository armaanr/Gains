export const createUpdateMinutes = (timerStateVar) => {
    return (newMin) => {
        const timerState = timerStateVar();
        timerState['minutes'] = newMin;
        timerStateVar(timerState);
    }
}