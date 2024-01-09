



// ------------------------------------------------------

export const reducerOPside = (state = false, action) => {

    switch (action.type) {

        case 'OPEN_SIDEBAR':
            state = true
            return state
            break;

        case 'CLOSE_SIDEBAR':
            state = false
            return state
            break

        default:
            return state

    }

}


// ------------------------------------------------------


export const reducerScrollLock = (state = false, action) => {
    switch (action.type) {
        case 'SCROLL_LOCK':
            state = true
            return state
            break;

        case 'SCROLL_UNLOCK':
            state = false
            return state
            break

        default:
            return state
    }
}







// ------------------------------------------------------
