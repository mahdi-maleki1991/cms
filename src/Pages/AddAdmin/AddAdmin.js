import React, { useEffect, useRef, useState } from 'react'
import './addAdmin.css'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { AiOutlineUser, AiOutlinePhone, AiOutlineMail, AiTwotoneStar } from 'react-icons/ai'
import { BsCalendar2Date } from 'react-icons/bs'
import { RiLockPasswordLine } from 'react-icons/ri'
import UseTestHook from '../../myHooks/UseTestHook'




export default function AddAdmin() {


    window.addEventListener('load', () => {
        UseTestHook(0)
    })



    const [allAdmin, setallAdmin] = useState([])

    const [imgUpdateAddAdmin, setimgUpdateAddAdmin] = useState({
        value: '',
        name: '',
        size: '',
    })

    const [adminAllInfo, setadminAllInfo] = useState({
        name: '',
        userName: '',
        phone: '',
        email: '',
        birthDay: '',
        password: '',
        rPassword: '',
        address: '',
        gender: true,
        level: 1,
    })

    const [BTNaddAdmin, setBTNaddAdmin] = useState(false)

    const refNameAdmin = useRef()
    const refUserAdmin = useRef()
    const refEmailAdmin = useRef()
    const refPhoneAdmin = useRef()
    const refDateAdmin = useRef()
    const refPassAdmin = useRef()
    const refRpassAdmin = useRef()
    const refAddressAdmin = useRef()
    const refAGenderAdmin = useRef()
    const refLevelAdmin = useRef()
    const refIMGAdmin = useRef()

    // -----------------------------------------------------------------------
    // let adminsArray = [];


    const setIMGaddAdmin = (event) => {
        const file = event.target.files[0]
        try {
            if (file.type == 'image/jpeg' || file.type == 'image/png') {
                const reader = new FileReader()
                reader.onload = () => {
                    setimgUpdateAddAdmin({ name: file.name, size: file.size, value: reader.result })
                }
                reader.readAsDataURL(file)
            }
            else {
                console.log('this file is not valid...');
            }

        } catch {
            console.log('error');
        }
    }


    useEffect(() => {
        if (adminAllInfo.name != '' && adminAllInfo.address != '' && adminAllInfo.email != ''
            && adminAllInfo.birthDay != '' && adminAllInfo.password != '' && adminAllInfo.rPassword != ''
            && adminAllInfo.userName != '' && imgUpdateAddAdmin.value != '') {

            if (adminAllInfo.password == adminAllInfo.rPassword) {
                setBTNaddAdmin(true)
            } else {
                setBTNaddAdmin(false)
                console.log('pass va Rpass mosavii nistandd');
            }
        } else {
            setBTNaddAdmin(false)
        }
    },)


    const clearInputs = () => {
        setadminAllInfo(
            {
                name: '',
                userName: '',
                phone: '',
                email: '',
                birthDay: '',
                password: '',
                rPassword: '',
                address: '',
                gender: true,
                level: 1,
            }
        )

        setimgUpdateAddAdmin({
            value: '',
            name: '',
            size: ''
        })

        refNameAdmin.current.value = ''
        refUserAdmin.current.value = ''
        refEmailAdmin.current.value = ''
        refPhoneAdmin.current.value = ''
        refDateAdmin.current.value = ''
        refPassAdmin.current.value = ''
        refRpassAdmin.current.value = ''
        refAddressAdmin.current.value = ''
        // refAGenderAdmin.current.value = ''
        refLevelAdmin.current.value = 1
        refIMGAdmin.current.value = ''

    }



    const submitAdminInfo = () => {


        let idAdminAddCountr = Math.floor(Math.random() * (999999999999999 - 111111111111111) + 111111111111111)

        let { name, userName, phone, email, birthDay, password, rPassword, address, level, gender } = adminAllInfo

        if (name != '' && userName != '' && phone != '' &&
            email != '' && birthDay != '' && password != '' &&
            rPassword != '' && address != '' && imgUpdateAddAdmin.value != '') {

            let objAddAdmin = {
                id: idAdminAddCountr,
                name,
                userName,
                phone,
                email,
                birthDay,
                password,
                address,
                IMGadress: imgUpdateAddAdmin.value,
                gender,
                level
            }

            let adminsArray = []
            if (localStorage.getItem('adminsArrayStorage')) {
                adminsArray = [...JSON.parse(localStorage.getItem('adminsArrayStorage'))]
                adminsArray.unshift(objAddAdmin)
                localStorage.setItem('adminsArrayStorage', JSON.stringify(adminsArray))
                setallAdmin(adminsArray)
                console.log('zakhire shod');
                clearInputs()
            } else {
                adminsArray.unshift(objAddAdmin)
                localStorage.setItem('adminsArrayStorage', JSON.stringify(adminsArray))
                setallAdmin(adminsArray)
            }

        } else {
            console.log('hame bayad por bashan');
        }

    }







    // -----------------------------------------------------------------------

    return (
        <>
            <h2 className='hHeader'>ADD ADMIN</h2>

            <Container fluid className="divmainAddAdmin">
                <Row className='justify-content-center'>
                    <Col sm={{ span: 6 }} lg={{ span: 8 }} className="colInfoAddAdmin">
                        <div className="divInfoAddAdmin">

                            <div className="divInputAdminKeeper">
                                <input type="text" placeholder='NAME' className='inputsAddAdmin'
                                    onKeyUp={(event) => setadminAllInfo({ ...adminAllInfo, name: event.target.value })}
                                    ref={refNameAdmin}
                                />
                                <AiOutlineUser className='iconInInputBoxexAdminAdd' />
                            </div>
                            <div className="divInputAdminKeeper">
                                <input type="text" placeholder='USER NAME' className='inputsAddAdmin'
                                    onKeyUp={(event) => setadminAllInfo({ ...adminAllInfo, userName: event.target.value })}
                                    ref={refUserAdmin}
                                />
                                <AiOutlineUser className='iconInInputBoxexAdminAdd' />
                            </div>
                            <div className="divInputAdminKeeper">
                                <input type="text" placeholder='PHONE' className='inputsAddAdmin'
                                    onKeyUp={(event) => setadminAllInfo({ ...adminAllInfo, phone: event.target.value })}
                                    ref={refPhoneAdmin}
                                />
                                <AiOutlinePhone className='iconInInputBoxexAdminAdd' />
                            </div>
                            <div className="divInputAdminKeeper">
                                <input type="text" placeholder='EMAIN' className='inputsAddAdmin'
                                    onKeyUp={(event) => setadminAllInfo({ ...adminAllInfo, email: event.target.value })}
                                    ref={refEmailAdmin}
                                />
                                <AiOutlineMail className='iconInInputBoxexAdminAdd' />
                            </div>
                            <div className="divInputAdminKeeper">
                                <input type="date" className='inputsAddAdmin'
                                    onChange={(event) => setadminAllInfo({ ...adminAllInfo, birthDay: event.target.value })}
                                    ref={refDateAdmin}
                                />
                                <BsCalendar2Date className='iconInInputBoxexAdminAdd' />
                            </div>
                            <div className="divInputAdminKeeper">
                                <input type="password" placeholder='PASSWORD' className='inputsAddAdmin'
                                    onKeyUp={(event) => setadminAllInfo({ ...adminAllInfo, password: event.target.value })}
                                    ref={refPassAdmin}
                                />
                                <RiLockPasswordLine className='iconInInputBoxexAdminAdd' />
                            </div>
                            <div className="divInputAdminKeeper">
                                <input type="password" placeholder='R-PASSWORD' className='inputsAddAdmin'
                                    onKeyUp={(event) => setadminAllInfo({ ...adminAllInfo, rPassword: event.target.value })}
                                    ref={refRpassAdmin}
                                />
                                <RiLockPasswordLine className='iconInInputBoxexAdminAdd' />
                            </div>

                            <textarea className='textAreaAddreAdmin' placeholder='Address...'
                                onKeyUp={(event) => setadminAllInfo({ ...adminAllInfo, address: event.target.value })}
                                ref={refAddressAdmin}
                            ></textarea>

                            <div className="divInfoAddAdmin2">

                                <div className='divRadioAdminKeeper'>
                                    <div className='divChoosWMaddAdmin' onClick={() => setadminAllInfo({ ...adminAllInfo, gender: !adminAllInfo.gender })}>
                                        <div className={adminAllInfo.gender ? 'divCircleChoosWM' : 'divCircleChoosWM2'}></div>
                                        <span>M</span>
                                        <span>W</span>
                                    </div>
                                </div>

                                <div className='divRadioAdminKeeper2'>
                                    <input list='datalistAdminLv' type="range"
                                        onChange={(event) => setadminAllInfo({ ...adminAllInfo, level: event.target.value })}
                                        min={1} max={3} defaultValue={1}
                                        className='rengeLevelAdmin' title='Choose Admin LEVEL...'
                                        ref={refLevelAdmin}
                                    />
                                    <datalist id='datalistAdminLv'>
                                        <span>
                                            <AiTwotoneStar className='iconStarOneAdmin' />
                                        </span>
                                        <span >
                                            <AiTwotoneStar className='iconStarOneAdmin' />
                                            <AiTwotoneStar className='iconStarOneAdmin' />
                                        </span>
                                        <span style={{ marginRight: '-17px' }}>
                                            <AiTwotoneStar className='iconStarOneAdmin' />
                                            <AiTwotoneStar className='iconStarOneAdmin' />
                                            <AiTwotoneStar className='iconStarOneAdmin' />
                                        </span>

                                    </datalist>
                                </div>
                            </div>

                        </div>
                    </Col>

                    <Col xs={{ span: 10 }} sm={{ span: 6 }} md={{ offset: 0, span: 6 }} lg={{ span: 4 }} className="colIMGAddAdmin">
                        <div className="divIMGAddAdmin">
                            <div className='divIMGUplodKeper'>
                                <img src={imgUpdateAddAdmin.value == '' ?
                                    adminAllInfo.gender ?
                                        'https://cdn-icons-png.flaticon.com/512/3001/3001764.png' :
                                        'https://icons.veryicon.com/png/Business/Business%20V2/woman.png'
                                    : imgUpdateAddAdmin.value} className='imgUploadAddAdmin' />
                                <input type="file" className='fillAddAdmin' ref={refIMGAdmin} onChange={(event) => setIMGaddAdmin(event)} />
                            </div>

                            {imgUpdateAddAdmin.value != '' &&
                                <>
                                    <span>File Name : <b> {imgUpdateAddAdmin.name} </b></span>
                                    <span>File Size :<b>  {imgUpdateAddAdmin.size} KB </b></span>
                                </>
                            }

                            {
                                BTNaddAdmin ?
                                    <input type='button' className="divBTNsubmitAdmin" value={'SUBMIT ADMIN'}
                                        onClick={submitAdminInfo} /> :
                                    <input type='button' className="divBTNsubmitAdminDisable" value={'SUBMIT ADMIN'} />
                            }

                        </div>
                    </Col>
                </Row>
            </Container>



        </>
    )
}
