
import { storeOPside } from "./stores"
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "./actionType"
import { storScrollLock } from "./stores"
import { SCROLL_LOCK, SCROLL_UNLOCK } from "./actionType"
// ----------------------------------------------

export const actionOParoowSidbar = () => {
    if (storeOPside.getState()) {
        storeOPside.dispatch(CLOSE_SIDEBAR())
    } else {
        storeOPside.dispatch(OPEN_SIDEBAR())
    }
}

// ----------------------------------------------
export const actionScrollLock = () => {
    if (!storScrollLock.getState()) {
        storScrollLock.dispatch(SCROLL_LOCK())
    }
}
export const actionScrollUnlock = () => {
    if (storScrollLock.getState()) {
        storScrollLock.dispatch(SCROLL_UNLOCK())
    }
}

// ----------------------------------------------





// ----------------------------------------------
