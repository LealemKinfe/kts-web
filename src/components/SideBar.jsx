import {
  FaUsers,
  FaPlus,
  FaTags,
  FaRoute,
  FaBus,
  FaUser,
  FaCreditCard,
  FaMoneyBillWave,
  FaToggleOn,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import React, { useEffect, useState } from "react";
import { getUserRole } from "../services/userService";

const SideBar = () => {
  const {logout}= useLogout()
  const {user} = useAuthContext()
  console.log(user)
  useEffect(()=> {

  })


  const [role, setRole] = useState('');

  useEffect(() => {
    // Fetch user data from the backend

      const data = localStorage.getItem("user")
      var parsedData = JSON.parse(data);
      console.log("userRole ", parsedData.role);
      setRole(parsedData.role)
  }, []);




  const renderButtons = (role) => {

    switch (role) {
      case 'SuperAdmin':
        return (
          <React.Fragment>
            <NavLink to="">
              <li className="w-[18rem] py-1">
                <a
                  href="#"
                  className="adminDashboard shadow-md flex justify-center font-poppins mt-2 border-1 border px-1 py-3 w-full rounded-full border-quinary hover:bg-quaternary text-quaternary hover:text-tertiary transition-colors"
                >
                  <FaUsers size={18} className="mr-2" />
                  <span className="ml-1">Manage Accounts</span>
                </a>
              </li>
            </NavLink>
            <NavLink to="create-accounts">
              <li className="w-[18rem] py-1">
                <a
                  href="#"
                  className="createAccounts shadow-md flex justify-center font-poppins border-1 border px-1 py-3 w-full rounded-full border-quinary hover:bg-quaternary text-quaternary hover:text-tertiary transition-colors"
                >
                  <FaPlus size={18} className="mr-2" />
                  <span className="ml-1">Create Accounts</span>
                </a>
              </li>
            </NavLink>
          </React.Fragment>
        );
      case 'cardManager':
        return (
          <React.Fragment>
            <NavLink to="new-rfid-requests">
              <li className="w-[18rem] py-1">
                <a
                  href="#"
                  className="newRFIDRequests shadow-md flex justify-center font-poppins border-1 border px-1 py-3 w-full rounded-full border-quinary hover:bg-quaternary text-quaternary hover:text-tertiary transition-colors"
                >
                  <FaTags size={18} className="mr-2" />
                  <span className="ml-1">New RFID Requests</span>
                </a>
              </li>
            </NavLink>
            <NavLink to="activate-disable-cards">
              <li className="w-[18rem] py-1">
                <a
                  href="#"
                  className="activateDisableCards shadow-md flex justify-center font-poppins border-1 border px-1 py-3 w-full rounded-full border-quinary hover:bg-quaternary text-quaternary hover:text-tertiary transition-colors"
                >
                  <FaToggleOn size={18} className="mr-2" />
                  <span className="ml-1">Activate/Disable Cards</span>
                </a>
              </li>
            </NavLink>
          </React.Fragment>
        );
      case 'dispatcher':
        return (
          <React.Fragment>
            <NavLink to="manage-routes">
              <li className="w-[18rem] py-1">
                <a
                  href="#"
                  className="manageRoutes shadow-md flex items-center justify-center font-poppins border-1 border px-1 py-3 w-full rounded-full border-quinary hover:bg-quaternary text-quaternary hover:text-tertiary transition-colors"
                >
                  <FaRoute size={18} className="mr-2" />
                  <span className="ml-1">Manage Routes</span>
                </a>
              </li>
            </NavLink>
            <NavLink to="create-new-routes">
              <li className="w-[18rem] py-1">
                <a
                  href="#"
                  className="createNewRoutes shadow-md flex items-center justify-center font-poppins border-1 border px-1 py-3 w-full rounded-full border-quinary hover:bg-quaternary text-quaternary hover:text-tertiary transition-colors"
                >
                  <FaRoute size={18} className="mr-2" />
                  <span className="ml-1">Create New Routes</span>
                </a>
              </li>
            </NavLink>
            <NavLink to="manage-buses">
              <li className="w-[18rem] py-1">
                <a
                  href="#"
                  className="manageBuses shadow-md flex items-center justify-center font-poppins border-1 border px-1 py-3 w-full rounded-full border-quinary hover:bg-quaternary text-quaternary hover:text-tertiary transition-colors"
                >
                  <FaBus size={18} className="mr-2" />
                  <span className="ml-1">Manage Buses</span>
                </a>
              </li>
            </NavLink>
            <NavLink to="manage-drivers">
              <li className="w-[18rem] py-1">
                <a
                  href="#"
                  className="manageDrivers shadow-md flex items-center justify-center font-poppins border-1 border px-1 py-3 w-full rounded-full border-quinary hover:bg-quaternary text-quaternary hover:text-tertiary transition-colors"
                >
                  <FaUser size={18} className="mr-2" />
                  <span className="ml-1">Manage Drivers</span>
                </a>
              </li>
            </NavLink>
            <NavLink to="assign-buses">
              <li className="w-[18rem] py-1">
                <a
                  href="#"
                  className="assignBuses shadow-md flex items-center justify-center font-poppins border-1 border px-1 py-3 w-full rounded-full border-quinary hover:bg-quaternary text-quaternary hover:text-tertiary transition-colors"
                >
                  <FaBus size={18} className="mr-2" />
                  <span className="ml-1">Assign Buses</span>
                </a>
              </li>
            </NavLink>
          </React.Fragment>
        );
      case 'csm':
        return (
          <React.Fragment>
            <NavLink to="manage-passenger-accounts">
              <li className="w-[18rem] py-1">
                <a
                  href="#"
                  className="managePassengerAccount shadow-md flex items-center justify-center font-poppins border-1 border px-1 py-3 w-full rounded-full border-quinary hover:bg-quaternary text-quaternary hover:text-tertiary transition-colors"
                >
                  <FaUsers size={18} className="mr-2" />
                  <span className="ml-1">Manage Passenger Accounts</span>
                </a>
              </li>
            </NavLink>
            <NavLink to="create-passenger-account">
              <li className="w-[18rem] py-1">
                <a
                  href="#"
                  className="createPassengerAccount shadow-md flex items-center justify-center font-poppins border-1 border px-1 py-3 w-full rounded-full border-quinary hover:bg-quaternary text-quaternary hover:text-tertiary transition-colors"
                >
                  <FaUser size={18} className="mr-2" />
                  <span className="ml-1">Create Passenger Account</span>
                </a>
              </li>
            </NavLink>
            <NavLink to="top-up-passenger-account">
              <li className="w-[18rem] py-1">
                <a
                  href="#"
                  className="top-upPassengerAccount shadow-md flex items-center justify-center font-poppins border-1 border px-1 py-3 w-full rounded-full border-quinary hover:bg-quaternary text-quaternary hover:text-tertiary transition-colors"
                >
                  <FaMoneyBillWave size={18} className="mr-2" />
                  <span className="ml-1">Top-Up Passenger Account</span>
                </a>
              </li>
            </NavLink>
            <NavLink to="top-up-passenger-card">
              <li className="w-[18rem] py-1">
                <a
                  href="#"
                  className="top-upPassengerCard shadow-md flex items-center justify-center font-poppins border-1 border px-1 py-3 w-full rounded-full border-quinary hover:bg-quaternary text-quaternary hover:text-tertiary transition-colors"
                >
                  <FaCreditCard size={18} className="mr-2" />
                  <span className="ml-1">Top-Up Passenger Card</span>
                </a>
              </li>
            </NavLink>
          </React.Fragment>
        );
      default:
        return null;
    }
  };


  return (
    <div className="sideBar fixed shadow-md top-[7.5rem] flex flex-col h-full w-1/4 bg-background items-center rounded-lg">
      <div className="InnerSideBar shadow-md flex flex-col min-h-[38rem] w-[20rem] mx-4 my-4 bg-secondary rounded-[10px] scrollable-content ">
      <div className="flex flex-col items-center mt-[rem] max-h-[30rem] overflow-y-auto ">
        <div className="w-[15rem] h-[6rem]  "></div>
          <ul>
            {renderButtons(role)}
            <NavLink to="logout">
              <li className="w-[18rem] py-1">
                <button
                  onClick={() => logout()}
                  className="logout shadow-md flex items-center justify-center font-poppins border-1 border px-1 py-3 w-full rounded-full border-quinary hover:bg-quaternary text-quaternary hover:text-tertiary transition-colors"
                >
                  <FaSignOutAlt size={18} className="mr-2" />
                  <span className="ml-1">Logout</span>
                </button>
              </li>
            </NavLink>
          </ul>


        
      </div>
    </div>
</div>

  );
};

export default SideBar;
