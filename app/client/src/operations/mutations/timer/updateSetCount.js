export const createUpdateSetCount = (timerStateVar) => {
    return (newMin) => {
        const timerState = timerStateVar();
        timerState['minutes'] = newMin;
        timerStateVar(timerState);
    }
}