import React, { useState, useRef } from 'react'
import './sidbarMainMenu.css'
import { SiPowerpages } from 'react-icons/si'
import { AiOutlineUser, AiOutlineHome, AiOutlineUsb, AiOutlineUserAdd } from 'react-icons/ai'
import { FiUsers, FiSettings } from 'react-icons/fi'
import { BsPencil, BsDoorOpen } from 'react-icons/bs'
import { IoCallOutline } from 'react-icons/io5'
import { MdOutlineRoundaboutLeft, MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { RiUserSettingsLine } from 'react-icons/ri'
import { TbDatabaseSearch } from 'react-icons/tb'
import { PiPaintBrushHouseholdDuotone } from 'react-icons/pi'
import { GiKeyLock } from 'react-icons/gi'
import { MdLowPriority } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { storeOPside } from '../../Redux/stores'




export default function SidbarMainMenu() {

    const [sidbarListsOpenClose, setsidbarListsOpenClose] = useState({
        AdminList: true,
        UserList: true,
        PagesList: true,
        SettingList: true,

    })

    const [openCloseSidebar, setopenCloseSidebar] = useState(false)

    storeOPside.subscribe(() => {
        setopenCloseSidebar(storeOPside.getState())
    })
    // -------------------------------------------------------------

    const fOPClAdmin = () => {
        sidbarListsOpenClose.AdminList ? setsidbarListsOpenClose({ ...sidbarListsOpenClose, AdminList: false })
            : setsidbarListsOpenClose({ ...sidbarListsOpenClose, AdminList: true })

    }
    const fOPClUser = () => {
        sidbarListsOpenClose.UserList ? setsidbarListsOpenClose({ ...sidbarListsOpenClose, UserList: false })
            : setsidbarListsOpenClose({ ...sidbarListsOpenClose, UserList: true })
    }
    const fOPClPages = () => {
        sidbarListsOpenClose.PagesList ? setsidbarListsOpenClose({ ...sidbarListsOpenClose, PagesList: false })
            : setsidbarListsOpenClose({ ...sidbarListsOpenClose, PagesList: true })
    }
    const fOPClSetting = () => {
        sidbarListsOpenClose.SettingList ? setsidbarListsOpenClose({ ...sidbarListsOpenClose, SettingList: false })
            : setsidbarListsOpenClose({ ...sidbarListsOpenClose, SettingList: true })
    }


    // -------------------------------------------------------------
    return (
        <>

            <div className={openCloseSidebar ? 'divMainSideBarLeft' : 'divMainSideBarLeftClose'}  >

                <span className='spanAdminListNoGR'>
                    <AiOutlineHome className='IconsSidbarMain' /><Link to='/' className='links'> HOME</Link>
                </span>

                <span className='spanAdminList' onClick={fOPClPages} style={{ color: "rgb(100, 100, 100)", }}>
                    <SiPowerpages className='IconsSidbarMain' /> PAGES
                </span>
                <ul className={` ulAdmin2 ${sidbarListsOpenClose.PagesList && 'ulAdminClose'} `}
                    style={{ color: "rgb(100, 100, 100)", }}>
                    <li><AiOutlineHome className='iconsSidbarItems' /> Home</li>
                    <li><BsPencil className='iconsSidbarItems' /> Regester</li>
                    <li><BsDoorOpen className='iconsSidbarItems' />Log In</li>
                    <li><IoCallOutline className='iconsSidbarItems' />Call Us</li>
                    <li><MdOutlineRoundaboutLeft className='iconsSidbarItems' />About Us</li>
                    <li><AiOutlineUsb className='iconsSidbarItems' />Products</li>
                    <li><MdOutlineProductionQuantityLimits className='iconsSidbarItems' />Basket</li>
                </ul>

                <span className='spanAdminList' onClick={fOPClAdmin}>
                    <AiOutlineUser className='IconsSidbarMain' />  ADMIN
                </span>
                <ul className={` ulAdmin ${sidbarListsOpenClose.AdminList && 'ulAdminClose'} `}>
                    <Link className='links' to='/AddAdmin'>
                        <li>
                            <AiOutlineUserAdd className='iconsSidbarItems' />
                            Add
                        </li>
                    </Link>

                    <Link className='links' to='/AdminSetting'>
                        <li>
                            <RiUserSettingsLine className='iconsSidbarItems' />
                            Setting
                        </li>
                    </Link>
                </ul>


                <span className='spanAdminList' onClick={fOPClUser} style={{ color: "rgb(100, 100, 100)", }}>
                    <FiUsers className='IconsSidbarMain' /> USER
                </span>
                <ul className={` ulAdmin ${sidbarListsOpenClose.UserList && 'ulAdminClose'} `}
                    style={{ color: "rgb(100, 100, 100)", }}>
                    <li><AiOutlineUserAdd className='iconsSidbarItems' />Add</li>
                    <li><TbDatabaseSearch className='iconsSidbarItems' />Search & Show</li>
                    <li><RiUserSettingsLine className='iconsSidbarItems' />Setting</li>
                </ul>

                <span className='spanAdminList' onClick={fOPClSetting}>
                    <FiSettings className='IconsSidbarMain' />SETTING
                </span>
                <ul className={` ulAdmin ${sidbarListsOpenClose.SettingList && 'ulAdminClose'} `}>
                    <Link className='links' to='/Appearance'>
                        <li><PiPaintBrushHouseholdDuotone className='IconsSidbarMain' />Appearance</li>
                    </Link>
                    <li style={{ color: "rgb(100, 100, 100)", }}><GiKeyLock className='IconsSidbarMain' />Change Passwoard</li>
                    <li style={{ color: "rgb(100, 100, 100)", }}><MdLowPriority className='IconsSidbarMain' />Admin Periority</li>
                </ul>


            </div>


        </>
    )
}
