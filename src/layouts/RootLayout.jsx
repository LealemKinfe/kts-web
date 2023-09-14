import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import LandingPage from "../pages/landingPage/LandingPage"
import Register from "../pages/register/Register"
import { About } from "../pages/landingPage/About"



export default function RootLayout() {
  return (<div>
    <NavBar/>
    <main>
        <Outlet/>
    </main>
    </div>
  )
}
