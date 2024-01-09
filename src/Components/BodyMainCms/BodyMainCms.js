import React, { useRef } from 'react'
import './bodyMainCms.css'
import { storScrollLock } from '../../Redux/stores'



export default function BodyMainCms(prompt) {


    const refDivMainBody = useRef()

    storScrollLock.subscribe(() => {
        if (storScrollLock.getState()) {
            refDivMainBody.current.scroll({ top: 0 })
            refDivMainBody.current.style = 'overflow:hidden'
        } else {
            refDivMainBody.current.style = 'overflow-y: auto;overflow-x: auto;'
        }
    })

    // ----------------------------------------------------------------------------------

    return (
        <>
            <div className="divMainCms" ref={refDivMainBody}>
                {prompt.prompt}
            </div>

        </>
    )

}
