import React, { useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { RiSearchLine } from 'react-icons/ri';

const ManageRoutes = () => {
  const [searchValue, setSearchValue] = useState('');
  const [routes, setRoutes] = useState([
    { id: 1, startingPoint: 'Point A', destination: 'Point B', isEditing: false },
    { id: 2, startingPoint: 'Point C', destination: 'Point D', isEditing: false },
    // Add more routes here
  ]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleEditClick = (id) => {
    setRoutes((prevRoutes) =>
      prevRoutes.map((route) =>
        route.id === id ? { ...route, isEditing: true } : route
      )
    );
  };

  const handleSaveClick = (id) => {
    setRoutes((prevRoutes) =>
      prevRoutes.map((route) =>
        route.id === id ? { ...route, isEditing: false } : route
      )
    );
  };

  const handleDeleteClick = (id) => {
    setRoutes((prevRoutes) => prevRoutes.filter((route) => route.id !== id));
  };

  const filteredRoutes = routes.filter(
    (route) =>
      route.id.toString().includes(searchValue) ||
      route.startingPoint.toLowerCase().includes(searchValue.toLowerCase()) ||
      route.destination.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <div className="topBar fixed flex min-h-[2rem] mt-[3.7rem] w-[60rem] my-2 z-50 bg-background items-center rounded-[20px] shadow-md ml-[25rem] ">
        <div className="titleBar w-[10rem] mb-[2rem] mt-[2rem]">
          <Breadcrumbs />
        </div>
      </div>

      <div className="centerBar flex flex-col shadow-md ml-[25rem] min-h-[30rem] w-[60rem] my-2 mt-[10rem] bg-background rounded-[30px] ">
        <div className="text-3xl font-poppins mt-[2rem]">
          <h1 className="ml-[6rem]">Manage Routes</h1>
        </div>
        <div className="min-w-[50rem] ml-[3rem] mt-[1rem]">
          {/* Search component */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Search"
                className="search-input rounded-xl border-quinary border min-w-[10rem] py-2 px-4 pl-10 shadow-xl"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <RiSearchLine className="text-quaternary" />
              </div>
            </div>
          </div>

          {/* Table displaying routes */}
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-quaternary text-background font-poppins text-xl text-justify">Route ID</th>
                <th className="px-4 py-2 bg-quaternary text-background font-poppins text-xl text-justify">Starting Point</th>
                <th className="px-4 py-2 bg-quaternary text-background font-poppins text-xl text-justify">Destination</th>
                <th className="px-4 py-2 bg-quaternary text-background font-poppins text-xl text-justify">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRoutes.map((route) => (
                <tr className="font-ubuntu shadow-md" key={route.id}>
                  <td className="border-none px-4 py-2">{route.id}</td>
                  <td className="border-none px-4 py-2">
                    {route.isEditing ? (
                      <input
                        type="text"
                        value={route.startingPoint}
                        onChange={(e) =>
                          setRoutes((prevRoutes) =>
                            prevRoutes.map((prevRoute) =>
                              prevRoute.id === route.id
                                ? { ...prevRoute, startingPoint: e.target.value }
                                : prevRoute
                            )
                          )
                        }
                      />
                    ) : (
                      route.startingPoint
                    )}
                  </td>
                  <td className="border-none px-4 py-2">
                    {route.isEditing ? (
                      <input
                        type="text"
                        value={route.destination}
                        onChange={(e) =>
                          setRoutes((prevRoutes) =>
                            prevRoutes.map((prevRoute) =>
                              prevRoute.id === route.id
                                ? { ...prevRoute, destination: e.target.value }
                                : prevRoute
                            )
                          )
                        }
                      />
                    ) : (
                      route.destination
                    )}
                  </td>
                  <td>
                    {route.isEditing ? (
                      <button
                        onClick={() => handleSaveClick(route.id)}
                        className="save-btn bg-accent text-background px-4 py-2 rounded shadow-md hover:bg-quaternary hover:text-quinary"
                      >
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEditClick(route.id)}
                          className="edit-btn bg-gamma text-quaternary px-4 py-2 rounded border shadow-md border-quinary hover:bg-accent hover:text-background"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteClick(route.id)}
                          className="delete-btn bg-tertiary text-quaternary px-4 py-2 rounded ml-3 border shadow-md border-quinary hover:bg-accent hover:text-background"
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

export default ManageRoutes;
