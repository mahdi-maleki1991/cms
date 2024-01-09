import React from 'react'
import './error404.css'
import { Link } from 'react-router-dom'
import UseTestHook from '../../myHooks/UseTestHook'




export default function Error404() {

    window.addEventListener('load', ()=>{
        UseTestHook(0)
    })



    // ---------------------------------------------------------
    return (
        <>

            <div className="divMain404">
                <Link to={'/'} className='link'>
                    <div className="BTNbackHome">BACK HOME</div>
                </Link>
                <img src="./Files/404-errors-fb.png" />
            </div>


        </>
    )
}
