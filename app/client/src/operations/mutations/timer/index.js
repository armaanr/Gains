import {createUpdateMinutes} from './updateMinutes'
import {createUpdateSeconds} from './updateSeconds'
import {createUpdateSetCount} from './updateSetCount'
import {createToggleStartTimer} from './toggleStartTimer'
import { timerState } from "../../../cache";

export const timerMutations = {
    updateMinutes: createUpdateMinutes(timerState),
    updateSeconds: createUpdateSeconds(timerState),
    updateSetCount: createUpdateSetCount(timerState),
    toggleStartTimer: createToggleStartTimer(timerState),
};