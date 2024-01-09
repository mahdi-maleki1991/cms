import React, { useEffect, useState } from 'react'
import './adminSetting.css'
import { BsTrash3 } from 'react-icons/bs'
import { IoDocumentsOutline } from 'react-icons/io5'
import { AiOutlineDelete } from 'react-icons/ai'
import { PiNotePencilThin } from 'react-icons/pi'
import { BsX } from 'react-icons/bs'
import { useRef } from 'react'
import { actionScrollLock, actionScrollUnlock } from '../../Redux/actions'
import UseTestHook from '../../myHooks/UseTestHook'



export default function AdminSetting() {



  window.addEventListener('load', () => {
    UseTestHook(0)
  })




  const [adminDelCort, setadminDelCort] = useState(false)
  const [adminEditCort, setadminEditCort] = useState(false)
  const [adminInfoWaiting, setadminInfoWaiting] = useState({})
  const [stateAdminArray, setstateAdminArray] = useState(
    localStorage.getItem('adminsArrayStorage') ? JSON.parse(localStorage.getItem('adminsArrayStorage')) : []
  )

  const nameAdminRef = useRef()
  const userNameAdminRef = useRef()
  const phoneAdminRef = useRef()
  const emailAdminRef = useRef()
  const passwordAdminRef = useRef()
  const rpasswordAdminRef = useRef()
  const birthdayAdminRef = useRef()
  const addressAdminRef = useRef()
  const genderAdminRef = useRef()
  const levelAdminRef = useRef()

  const refDeleteCourt = useRef()
  // -----------------------------------------------------------------


  const deleteAdminHandeler = (admin) => {
    setadminDelCort(true)
    setadminInfoWaiting(admin)
    actionScrollLock()
  }




  const finalDelAdmin = () => {
    let newArrayAdmin = stateAdminArray.filter(admin => admin.id != adminInfoWaiting.id)
    localStorage.setItem('adminsArrayStorage', JSON.stringify(newArrayAdmin))
    setstateAdminArray([...newArrayAdmin])
    setadminDelCort(false)
  }


  const editeAdminHandeler = (admin) => {
    setadminInfoWaiting(admin)
    setadminEditCort(true)
    nameAdminRef.current.value = admin.name
    userNameAdminRef.current.value = admin.userName
    phoneAdminRef.current.value = admin.phone
    emailAdminRef.current.value = admin.email
    birthdayAdminRef.current.value = admin.birthDay
    passwordAdminRef.current.value = admin.password
    addressAdminRef.current.value = admin.address
    genderAdminRef.current.value = admin.gender
    levelAdminRef.current.value = admin.level
    actionScrollLock()

  }



  const faunctionLevelAdmin = (level) => {
    switch (level) {
      case '1':
        return (
          <>
            <option value="1">Level 1</option>
            <option value="2">Level 2</option>
            <option value="3">Level 3</option>
          </>
        )
        break;
      case '2':
        return (
          <>
            <option value="2">Level 2</option>
            <option value="1">Level 1</option>
            <option value="3">Level 3</option>
          </>
        )
        break;
      case '3':
        return (
          <>
            <option value="3">Level 3</option>
            <option value="1">Level 1</option>
            <option value="2">Level 2</option>
          </>
        )
        break;
    }
  }




  const finalEditAdmin = () => {

    let arrayAdminEdit = JSON.parse(localStorage.getItem('adminsArrayStorage'))



    arrayAdminEdit.forEach(admin => {

      if (admin.id == adminInfoWaiting.id) {

        if (nameAdminRef.current.value != '' && userNameAdminRef.current.value != '' && phoneAdminRef.current.value != '' &&
          emailAdminRef.current.value != '' && birthdayAdminRef.current.value != '' && passwordAdminRef.current.value != '' &&
          rpasswordAdminRef.current.value != '' && addressAdminRef.current.value != '' && genderAdminRef.current.value != ''
          && levelAdminRef.current.value != '') {

          if (passwordAdminRef.current.value == rpasswordAdminRef.current.value) {

            admin.name = nameAdminRef.current.value
            admin.userName = userNameAdminRef.current.value
            admin.phone = phoneAdminRef.current.value
            admin.email = emailAdminRef.current.value
            admin.birthDay = birthdayAdminRef.current.value
            admin.password = passwordAdminRef.current.value
            admin.rPassword = rpasswordAdminRef.current.value
            admin.address = addressAdminRef.current.value
            admin.gender = genderAdminRef.current.value
            admin.level = levelAdminRef.current.value
            rpasswordAdminRef.current.value = ''

            localStorage.setItem('adminsArrayStorage', JSON.stringify(arrayAdminEdit))
            setstateAdminArray(JSON.parse(localStorage.getItem('adminsArrayStorage')))
            setadminEditCort(false)
            actionScrollUnlock()
            console.log('edit anjam shod');

          } else {
            console.log('Pass match nist');
          }

        } else {
          console.log('por kardan hame elzami');
        }

      }





    });

  }





  const showAdminBox = () => {
    return (
      stateAdminArray.length > 0 ? (
        stateAdminArray.map(admin => (
          <div className="divBoxAdmin" key={admin.id}>
            <div className='divCon1Admin'>
              <img src={admin.IMGaddress} className='imgAdminBox' />
              <div>
                <span>Name: {admin.name}</span>
                <span>User name: {admin.userName}</span>
                <span>Email: {admin.email}</span>
                <span>Phone: {admin.phone}</span>
                <span>Birthday: {admin.birthDay}</span>
                <span>level: {admin.level}</span>
              </div>
            </div>
            <div className="divCon2Admin">
              Address: {admin.address}
            </div>
            <div className="divCon3Admin">
              <span onClick={() => deleteAdminHandeler({ ...admin })}>DELETE <AiOutlineDelete /></span>
              <span onClick={() => editeAdminHandeler({ ...admin })}>EDITE <PiNotePencilThin /></span>
            </div>
          </div>
        ))
      ) : (
        <>
          <div className='noAdminAlert'>
            NO ADMIN EXIST.. !!!!
          </div>
        </>
      ))
  }







  // -----------------------------------------------------------------
  return (
    <>

      <div className="divShowAdmins" ref={refDeleteCourt}>


        {/* ----------------DELETE------------------ */}
        <div className={adminDelCort ? 'divCortDel' : 'divCortDelFalse'}>
          <div className="divQuestionBox">
            <BsTrash3 className='iconDelete' />
            <span >Do you want to remove this admin ?!</span>
            <IoDocumentsOutline className='iconDel2' />
            <span>Name: {adminInfoWaiting.name}</span>
            <span>User Name: {adminInfoWaiting.userName}</span>
            <span>Email: {adminInfoWaiting.email}</span>
            <div className="divBTNkeeper">
              <input type="button" value="YES" onClick={() => {
                finalDelAdmin()
                actionScrollUnlock()
              }} />
              <input type="button" value="NO" onClick={() => {
                setadminDelCort(!adminDelCort)
                actionScrollUnlock()
              }
              } />
            </div>
          </div>
        </div>
        {/* ------------------EDITE------------------ */}
        <div className={adminEditCort ? 'editeAdminCort' : 'editeAdminCortNone'} >
          <BsX className='iconExitAdminEdite' onClick={() => {
            setadminEditCort(!adminEditCort)
            actionScrollUnlock()
          }} />
          <div className="divMAinBoxEditAdmin">
            <h2>ADMIN EDIT</h2>
            <input className='inputsEditAdmin' type="text" placeholder='Name'
              defaultValue={adminInfoWaiting.name} ref={nameAdminRef} />
            <input className='inputsEditAdmin' type="text" placeholder='User Name'
              defaultValue={adminInfoWaiting.userName} ref={userNameAdminRef} />
            <input className='inputsEditAdmin' type="text" placeholder='Phone'
              defaultValue={adminInfoWaiting.phone} ref={phoneAdminRef} />
            <input className='inputsEditAdmin' type="text" placeholder='Email'
              defaultValue={adminInfoWaiting.email} ref={emailAdminRef} />

            <input className='inputsEditAdmin' type="password" placeholder='Password'
              defaultValue={adminInfoWaiting.password} ref={passwordAdminRef} />

            <input className='inputsEditAdmin' type="password" placeholder='R-Password'
              ref={rpasswordAdminRef} />

            <input type="date" className='inputEditAdminDate'
              defaultValue={adminInfoWaiting.birthDay} ref={birthdayAdminRef} />
            <textarea placeholder='Address' className='textAreaAdminEdite'
              defaultValue={adminInfoWaiting.address} ref={addressAdminRef} ></textarea>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
              <select className='genderAdminEdite' ref={genderAdminRef} >
                {
                  adminInfoWaiting.gender ?
                    <>
                      <option value={true} defaultChecked={true} >Men</option>
                      <option value={false} >women</option>
                    </>
                    :
                    <>
                      <option value={false} defaultChecked={true} >women</option>
                      <option value={true} >Men</option>
                    </>
                }
              </select>
              <select className='levelAdminEdite' ref={levelAdminRef} >
                {
                  faunctionLevelAdmin(adminInfoWaiting.level)
                }
              </select>
            </div>
            <div className="divMainAdminEdite" onClick={() => {
              finalEditAdmin()
            }}>EDIT</div>
          </div>
        </div>

        {/* ------------------------------------ */}

        {

          showAdminBox()

        }

      </div>


    </>
  )
}
