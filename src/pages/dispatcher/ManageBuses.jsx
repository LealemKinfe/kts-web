import React, { useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { RiSearchLine } from 'react-icons/ri';

const ManageBuses = () => {
  const [searchValue, setSearchValue] = useState('');
  const [editableBusId, setEditableBusId] = useState(null);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const [data, setData] = useState([
    {
      busId: 1,
      plateNumber: 'ABC123',
      sideNumber: '001',
      associatedDriver: 'John Doe',
      route: 'Route A'
    },
    {
      busId: 2,
      plateNumber: 'DEF456',
      sideNumber: '002',
      associatedDriver: 'Jane Smith',
      route: 'Route B'
    },
    // Add more data objects for other buses
  ]);

  const filteredData = data.filter((bus) =>
    bus.plateNumber.toLowerCase().includes(searchValue.toLowerCase())
  );

  const deleteBus = (busId) => {
    setData(data.filter((bus) => bus.busId !== busId));
  };

  const editBus = (busId) => {
    setEditableBusId(busId);
  };

  const saveBus = (busId) => {
    setEditableBusId(null);
    // Save bus with the given busId
    // Implement your save logic here
    console.log(`Save bus with ID: ${busId}`);
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
          <h1 className="ml-[6rem]">Manage Buses</h1>
        </div>
        <div className="min-w-[50rem] ml-[3rem] mt-[1rem]">
          {/* Search component */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Search Plate Number"
                className="search-input rounded-xl border-quinary border min-w-[10rem] py-2 px-4 pl-10 shadow-xl"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <RiSearchLine className="text-quaternary" />
              </div>
            </div>
          </div>

          {/* Table displaying buses */}
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 min-w-[6rem] bg-quaternary text-background font-poppins text-xl text-justify">Plate Number</th>
                <th className="px-4 py-2 min-w-[6rem] bg-quaternary text-background font-poppins text-xl text-justify">Side Number</th>
                <th className="px-4 py-2 min-w-[8rem] bg-quaternary text-background font-poppins text-xl text-justify">Associated Driver</th>
                <th className="px-4 py-2 min-w-[8rem] bg-quaternary text-background font-poppins text-xl text-justify">Route</th>
                <th className="px-4 py-2 min-w-[6rem] bg-quaternary text-background font-poppins text-xl text-justify">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((bus) => (
                <tr className="font-ubuntu shadow-md" key={bus.busId}>
                  <td className="border-none px-4 py-2">
                    {editableBusId === bus.busId ? (
                      <input
                        type="text"
                        value={bus.plateNumber}
                        onChange={(e) =>
                          setData((prevData) =>
                            prevData.map((prevBus) =>
                              prevBus.busId === bus.busId
                                ? {
                                    ...prevBus,
                                    plateNumber: e.target.value
                                  }
                                : prevBus
                            )
                          )
                        }
                      />
                    ) : (
                      bus.plateNumber
                    )}
                  </td>
                  <td className="border-none px-4 py-2">{bus.sideNumber}</td>
                  <td className="border-none px-4 py-2">{bus.associatedDriver}</td>
                  <td className="border-none px-4 py-2">{bus.route}</td>
                  <td>
                    {editableBusId === bus.busId ? (
                      <button
                        onClick={() => saveBus(bus.busId)}
                        className="save-btn bg-quaternary text-background px-4 py-2 rounded ml-3 shadow-md hover:bg-gamma hover:text-quaternary hover:border-quinary border"
                      >
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => editBus(bus.busId)}
                          className="edit-btn bg-tertiary text-quaternary px-4 py-2 rounded border shadow-md border-quinary hover:bg-accent hover:text-background"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteBus(bus.busId)}
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

export default ManageBuses;
