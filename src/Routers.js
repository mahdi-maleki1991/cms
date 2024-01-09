
import Default from "./Pages/Default/Default"
import AddAdmin from "./Pages/AddAdmin/AddAdmin"
import AdminSetting from "./Pages/AdminSetting/AdminSetting"
import Error404 from "./Pages/Error404/Error404"
import Appearance from "./Pages/Appearance/Appearance"



let routers = [

    { path: '/', element: <Default /> },
    { path: '/AddAdmin', element: <AddAdmin /> },
    { path: '/AdminSetting', element: <AdminSetting /> },
    { path: '/Appearance', element: <Appearance /> },
    { path: '*', element: <Error404 /> },

]


export default routers
