import React, { useRef, useState } from 'react';
import './App.css';
import SidbarMainMenu from './Components/SidbarMainMenu/SidbarMainMenu';
import BodyMainCms from './Components/BodyMainCms/BodyMainCms';
import TopHeaderCms from './Components/TopHeaderCms/TopHeaderCms';
import routers from './Routers';
import { useRoutes } from 'react-router-dom';
import './shareCss.css'





export default function App() {

  let router = useRoutes(routers)




  return (
    <>



      <TopHeaderCms />
      <div className="divMainContainerinApp">
        <SidbarMainMenu />
        <BodyMainCms prompt={router} />
      </div>



    </>
  );

}

