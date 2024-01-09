import React from 'react'

export default function UseTestHook(id) {

    let mainRoot = document.querySelector(':root')
    let finalID = null

    if (localStorage.getItem('themeID')) {
        finalID = JSON.parse(localStorage.getItem('themeID'))
    } else {
        finalID = id
    }



    switch (finalID) {
        case 0:
            mainRoot.style.setProperty('--bgColor1', 'rgb(236, 236, 236)')
            mainRoot.style.setProperty('--bgColor2', 'rgb(210, 210, 210)')
            mainRoot.style.setProperty('--borderColor1', 'rgb(207, 207, 207)')
            mainRoot.style.setProperty('--textColor1', 'black')
            mainRoot.style.setProperty('--textColor2', 'black')
            break;
        case 1:
            mainRoot.style.setProperty('--bgColor1', 'rgb(34, 34, 34)')
            mainRoot.style.setProperty('--bgColor2', 'rgb(70, 70, 70)')
            mainRoot.style.setProperty('--borderColor1', 'rgb(140, 140, 140)')
            mainRoot.style.setProperty('--textColor1', 'white')
            break;
        case 2:
            mainRoot.style.setProperty('--bgColor1', 'rgb(0, 0, 30)')
            mainRoot.style.setProperty('--bgColor2', 'rgb(130, 150, 180)')
            mainRoot.style.setProperty('--borderColor1', 'rgb(100, 100, 200)')
            mainRoot.style.setProperty('--textColor1', 'white')
            break;
        case 3:
            mainRoot.style.setProperty('--bgColor1', 'rgb(0, 20, 0)')
            mainRoot.style.setProperty('--borderColor1', 'rgb(0, 97, 0)')
            mainRoot.style.setProperty('--textColor1', 'white')
            break;
        case 4:
            mainRoot.style.setProperty('--bgColor1', 'rgb(194, 196, 245)')
            mainRoot.style.setProperty('--borderColor1', 'rgb(144, 146, 205)')
            mainRoot.style.setProperty('--textColor1', 'white')
            break;
    }



}
