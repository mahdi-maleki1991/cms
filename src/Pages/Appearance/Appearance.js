import React from 'react'
import './appearance.css'
import { themes } from '../../datas'
// import useTheme from '../../myHooks/useTheme'
import UseTestHook from '../../myHooks/UseTestHook'


export default function Appearance() {

    window.addEventListener('load', ()=>{
        UseTestHook(0)
    })


    const setThemePreview = (id) => {
        localStorage.setItem('themeID', JSON.stringify(id))
        UseTestHook(id)
    }






    // -----------------------------------------------------------------------

    return (
        <div className="divConTheme">


            {
                themes.map(them => (

                    <div key={them.id} className='divMainBoxTheme'>
                        <h2>{them.name}</h2>
                        <div className='spanKeeperThem'>

                            {
                                them.colorUsed.map((colors, index) => (
                                    <div key={index}>
                                        <span style={{ backgroundColor: colors }}>{colors}</span>
                                    </div>
                                ))
                            }

                        </div>
                        <div className='btnKeeperBoxThem'>
                            <input type="button" value="Apply" onClick={() => setThemePreview(them.id)} />
                            {/* <input type="button" value="Apply" onClick={() => setThemeApply(them.id)} /> */}
                        </div>
                    </div>

                ))
            }



        </div>
    )
}










