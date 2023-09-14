import React, { useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { RiSearchLine } from 'react-icons/ri';

const ManageDrivers = () => {
  const [searchValue, setSearchValue] = useState('');
  const [editableDriverId, setEditableDriverId] = useState(null);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const [data, setData] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      userId: 'john.doe@example.com',
      assignedRoute: 'Route A',
      associatedBus: 'Bus 1'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      userId: 'jane.smith@example.com',
      assignedRoute: 'Route B',
      associatedBus: 'Bus 2'
    },
    // Add more data objects for other drivers
  ]);

  const filteredData = data.filter((driver) =>
    driver.userId.toLowerCase().includes(searchValue.toLowerCase())
  );

  const deleteDriver = (driverId) => {
    setData(data.filter((driver) => driver.id !== driverId));
  };

  const editDriver = (driverId) => {
    setEditableDriverId(driverId);
  };

  const saveDriver = (driverId) => {
    setEditableDriverId(null);
    // Save driver with the given driverId
    // Implement your save logic here
    console.log(`Save driver with ID: ${driverId}`);
  };

  return (
    <div>
      <div className="topBar fixed flex min-h-[2rem] mt-[3.7rem] w-[60rem] my-2 z-50 bg-background items-center rounded-[20px] shadow-md ml-[25rem] ">
        <div className="titleBar w-[10rem] mb-[2rem] mt-[2rem]">
          <Breadcrumbs />
        </div>
      </div>

      <div className="centerBar flex flex-col shadow-md ml-[25rem] min-h-[30rem] w-[60rem] my-2 mt-[10rem] bg-background rounded-[30px] ">
        <div className="text-3xl font-poppins mt-[2rem]">
          <h1 className="ml-[6rem]">Manage Drivers</h1>
        </div>
        <div className="min-w-[50rem] ml-[3rem] mt-[1rem]">
          {/* Search component */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Search User ID"
                className="search-input rounded-xl border-quinary border min-w-[10rem] py-2 px-4 pl-10 shadow-xl"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <RiSearchLine className="text-quaternary" />
              </div>
            </div>
          </div>

          {/* Table displaying drivers */}
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 min-w-[2rem] bg-quaternary text-background font-poppins text-xl text-justify">Full Name</th>
                <th className="px-4 py-2 min-w-[5rem] bg-quaternary text-background font-poppins text-xl text-justify">User ID</th>
                <th className="px-4 py-2 min-w-[8rem] bg-quaternary text-background font-poppins text-xl text-justify">Route</th>
                <th className="px-4 py-2 min-w-[6rem] bg-quaternary text-background font-poppins text-xl text-justify">Bus</th>
                <th className="px-4 py-2 min-w-[6rem] bg-quaternary text-background font-poppins text-xl text-justify">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((driver) => (
                <tr className="font-ubuntu shadow-md" key={driver.id}>
                  <td className="border-none px-4 py-2">
                    {editableDriverId === driver.id ? (
                      <input
                        type="text"
                        value={`${driver.firstName} ${driver.lastName}`}
                        onChange={(e) =>
                          setData((prevData) =>
                            prevData.map((prevDriver) =>
                              prevDriver.id === driver.id
                                ? {
                                    ...prevDriver,
                                    firstName: e.target.value.split(' ')[0],
                                    lastName: e.target.value.split(' ')[1]
                                  }
                                : prevDriver
                            )
                          )
                        }
                      />
                    ) : (
                      `${driver.firstName} ${driver.lastName}`
                    )}
                  </td>
                  <td className="border-none px-4 py-2">{driver.userId}</td>
                  <td className="border-none px-4 py-2">{driver.assignedRoute}</td>
                  <td className="border-none px-4 py-2">{driver.associatedBus}</td>
                  <td>
                    {editableDriverId === driver.id ? (
                      <button
                        onClick={() => saveDriver(driver.id)}
                        className="save-btn bg-quaternary text-background px-4 py-2 rounded ml-3 shadow-md hover:bg-gamma hover:text-quaternary hover:border-quinary border"
                      >
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => editDriver(driver.id)}
                          className="edit-btn bg-tertiary text-quaternary px-4 py-2 rounded border shadow-md border-quinary hover:bg-accent hover:text-background"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteDriver(driver.id)}
                          className="delete-btn bg-gamma text-quaternary px-4 py-2 rounded ml-3 shadow-md hover:bg-tertiary hover:text-background"
                        >
                          Delete
                        </button>
                      </>
                    )}
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

export default ManageDrivers;
