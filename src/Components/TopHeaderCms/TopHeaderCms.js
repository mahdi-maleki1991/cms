import React, { useState, useEffect, useContext } from 'react'
import './topHeaderCms.css'
import { MdArrowForwardIos } from 'react-icons/md'
import { storeOPside } from '../../Redux/stores'
import { actionOParoowSidbar } from '../../Redux/actions'

export default function TopHeaderCms() {


    const [openCloseArrowTop, setopenCloseArrowTop] = useState(false)


    const openCloseSideBarFunc = () => {
        actionOParoowSidbar()
    }

    storeOPside.subscribe(() => {
        setopenCloseArrowTop(storeOPside.getState())
    })

    // ----------------------------------------------------------------


    return (
        <>

            <div className="divMainTopHeader">

                <div className="divHederLeft">

                    <MdArrowForwardIos
                        onClick={openCloseSideBarFunc}
                        className={openCloseArrowTop ? 'IconArrowTopClose' : 'IconArrowTopOpen'}
                    />


                </div>



                {/* ------------------------------------------------ */}
                <div className="divHederRight">


                </div>



            </div>

        </>
    )
}
