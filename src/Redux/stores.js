import { legacy_createStore } from "redux";
import { reducerOPside } from "./reducers";
import { reducerScrollLock } from "./reducers";


// -----------------------------------------------------------
export const storeOPside = legacy_createStore(reducerOPside)
// -----------------------------------------------------------

export const storScrollLock = legacy_createStore(reducerScrollLock)


// -----------------------------------------------------------

