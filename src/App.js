import React from "react";

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Outlet, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

//layouts

import DashboardLayout from "./layouts/DashboardLayout";

//components
import NavBAr from "./components/NavBar";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/common/Dashboard";
import LandingPage from "./pages/landingPage/LandingPage";
import RootLayout from "./layouts/RootLayout";
import { About } from "./pages/landingPage/About";
import CreateAccount from "./pages/admin/CreateAccount";
import ActivateDisableCards from "./pages/cardManager/ActivateDisableCards"
import NewRFIDRequests from "./pages/cardManager/NewRFIDRequests"
import ManageRoutes from "./pages/dispatcher/ManageRoutes"
import CreateNewRoutes  from "./pages/dispatcher/CreateNewRoutes"
import ManageBuses from "./pages/dispatcher/ManageBuses"
import ManageDrivers from "./pages/dispatcher/ManageDrivers"
import AssignBuses from "./pages/dispatcher/AssignBuses"
import ManagePassengerAccounts from "./pages/csm/ManagePassengerAccounts"
import CreatePassengerAccount from "./pages/csm/CreatePassengerAccount"
import TopUpPassengerAccount from "./pages/csm/TopUpPassengerAccount"
import TopUpPassengerCard from "./pages/csm/TopUpPassengerCard"
import Register from "./pages/register/Register";




//pages
//Admin Pages
//Card Manager Pages
//common Pages
//dispacher pages
//CSM Pages


// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element= {<LandingPage/>}/>
      <Route path="/about" element= {<About/>}/>
      <Route path="/login" element= {<Register/>}/>
      
      <Route path= 'dashboard' element = {<DashboardLayout />}>
        <Route index element= { <Dashboard/> } />
        <Route path='create-accounts' element= {<CreateAccount/> } />
        <Route path="new-rfid-requests" element={<NewRFIDRequests/>} />
        <Route path="activate-disable-cards" element={<ActivateDisableCards/>} />
        <Route path="manage-routes" element={<ManageRoutes/>} />
        <Route path="create-new-routes" element={<CreateNewRoutes/>} />
        <Route path="manage-buses" element={<ManageBuses/>} />
        <Route path="manage-drivers" element={<ManageDrivers/>} />
        <Route path="assign-buses" element={<AssignBuses/>} />
        <Route path="manage-passenger-accounts" element={<ManagePassengerAccounts/>} />
        <Route path="create-passenger-account" element={<CreatePassengerAccount/>} />
        <Route path="top-up-passenger-account" element={<TopUpPassengerAccount/>} />
        <Route path="top-up-passenger-card" element={<TopUpPassengerCard/>} />
       {/*  <Route path="planning" element={<Planning/>} action={addPlan}/>
      </Route>
      <Route path="login" element={<LoginPage />} action={saveUser} />
      <Route path="register" element={<Register />} action={registerUser} />
      <Route path= "campaigns" element= {<CampaignLayout/>} >
      <Route path= '*' element= {<NotFound/>}/>
    </Route> */}

    //   {/* } />
      
    //   <Route path="create" element={<Create />} />
    //   <Route path="profile" element={<Profile />} />
    //   <Route path="login" element={<LoginPage />} /> */}
      
    // </Route>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
    // <SideBar/>
  );
}

export default App;
