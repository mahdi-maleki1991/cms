import React from 'react'
import './default.css'
import UseTestHook from '../../myHooks/UseTestHook'


export default function Default() {

    window.addEventListener('load', ()=>{
        UseTestHook(0)
    })

    return (
        <>


            <div className="divMainDefault"></div>


        </>
    )
}
