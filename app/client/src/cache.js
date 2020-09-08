import {InMemoryCache, makeVar} from "@apollo/client";

const initialTimerState = {
    minutes: 0,
    seconds: 0,
    setCount: 0,
    startTimer: true,
};
export const timerState = makeVar(initialTimerState);

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                Timer: {
                    read() {
                        return timerState();
                    }
                }
            }
        }
    }
});