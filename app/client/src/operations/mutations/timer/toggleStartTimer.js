export const createToggleStartTimer = (timerStateVar) => {
    return () => {
        const timerState = timerStateVar();
        timerState['startTimer'] = !timerState['startTimer'];
        timerStateVar(timerState);
    }
}