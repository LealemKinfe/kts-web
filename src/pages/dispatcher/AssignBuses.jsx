import React, { useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';

const AssignBusesAndRoutes = () => {
  const [driverId, setDriverId] = useState('');
  const [selectedBus, setSelectedBus] = useState('');
  const [selectedRoute, setSelectedRoute] = useState('');
  const [assignedBusesAndRoutes, setAssignedBusesAndRoutes] = useState([]);

  const handleDriverIdChange = (event) => {
    setDriverId(event.target.value);
  };

  const handleBusChange = (event) => {
    setSelectedBus(event.target.value);
  };

  const handleRouteChange = (event) => {
    setSelectedRoute(event.target.value);
  };

  const assignBusAndRoute = () => {
    if (driverId && selectedBus && selectedRoute) {
      const newAssignment = {
        driverId,
        bus: selectedBus,
        route: selectedRoute
      };
      setAssignedBusesAndRoutes([...assignedBusesAndRoutes, newAssignment]);
      setDriverId('');
      setSelectedBus('');
      setSelectedRoute('');
    }
  };

  const removeAssignment = (index) => {
    const updatedAssignments = [...assignedBusesAndRoutes];
    updatedAssignments.splice(index, 1);
    setAssignedBusesAndRoutes(updatedAssignments);
  };

  return (
    <div>
      <div className="topBar fixed flex min-h-[2rem] mt-[3.7rem] w-[60rem] my-2 z-50 bg-background items-center rounded-[20px] shadow-md ml-[25rem]">
        <div className="titleBar w-[10rem] mb-[2rem] mt-[2rem]">
          <Breadcrumbs />
        </div>
      </div>

      <div className="centerBar flex flex-col shadow-md ml-[25rem] min-h-[30rem] w-[60rem] my-2 mt-[10rem] bg-background rounded-[30px]">
        <div className="text-3xl font-poppins mt-[2rem]">
          <h1 className="ml-[6rem]">Assign Buses and Routes</h1>
        </div>
        <div className="min-w-[50rem] ml-[3rem] mt-[1rem]">
          <div className="mb-4">
            <div className="flex">
              <label className="text-xl font-poppins mr-2">Driver ID:</label>
              <input
                type="text"
                value={driverId}
                onChange={handleDriverIdChange}
                placeholder="Enter Driver ID"
                className="input-field rounded-lg border-quaternary border min-w-[20rem] py-2 px-4"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex">
              <label className="text-xl font-poppins mr-2">Select Bus:</label>
              <select
                value={selectedBus}
                onChange={handleBusChange}
                className="select-field rounded-lg border-quaternary border min-w-[20rem] py-2 px-4"
              >
                <option value="">Select a Bus</option>
                <option value="Bus 1">Bus 1</option>
                <option value="Bus 2">Bus 2</option>
                {/* Add more bus options */}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex">
              <label className="text-xl font-poppins mr-2">Select Route:</label>
              <select
                value={selectedRoute}
                onChange={handleRouteChange}
                className="select-field rounded-lg border-quaternary border min-w-[20rem] py-2 px-4"
              >
                <option value="">Select a Route</option>
                <option value="Route A">Route A</option>
                <option value="Route B">Route B</option>
                {/* Add more route options */}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <button
              onClick={assignBusAndRoute}
              className="assign-btn bg-quaternary text-background px-4 py-2 rounded shadow-md hover:bg-gamma hover:text-quaternary hover:border-quinary border"
            >
              Assign Bus and Route
            </button>
          </div>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 min-w-[8rem] bg-quaternary text-background font-poppins text-xl text-justify">
                  Driver ID
                </th>
                <th className="px-4 py-2 min-w-[8rem] bg-quaternary text-background font-poppins text-xl text-justify">
                  Assigned Bus
                </th>
                <th className="px-4 py-2 min-w-[8rem] bg-quaternary text-background font-poppins text-xl text-justify">
                  Assigned Route
                </th>
                <th className="px-4 py-2 min-w-[6rem] bg-quaternary text-background font-poppins text-xl text-justify">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {assignedBusesAndRoutes.map((assignment, index) => (
                <tr className="font-ubuntu shadow-md" key={index}>
                  <td className="border-none px-4 py-2">{assignment.driverId}</td>
                  <td className="border-none px-4 py-2">{assignment.bus}</td>
                  <td className="border-none px-4 py-2">{assignment.route}</td>
                  <td>
                    <button
                      onClick={() => removeAssignment(index)}
                      className="remove-btn bg-gamma text-quaternary px-4 py-2 rounded ml-3 shadow-md hover:bg-tertiary hover:text-background"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssignBusesAndRoutes;
