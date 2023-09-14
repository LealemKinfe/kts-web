import React, { useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';

const CreateNewRoutes = () => {
  const [startingLocation, setStartingLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [fareTariff, setFareTariff] = useState('');
  const [routes, setRoutes] = useState([]);

  const handleStartingLocationChange = (event) => {
    setStartingLocation(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleFareTariffChange = (event) => {
    setFareTariff(event.target.value);
  };

  const createRoute = () => {
    if (startingLocation && destination && fareTariff) {
      const newRoute = {
        startingLocation,
        destination,
        fareTariff
      };
      setRoutes([...routes, newRoute]);
      setStartingLocation('');
      setDestination('');
      setFareTariff('');
    }
  };

  const removeRoute = (index) => {
    const updatedRoutes = [...routes];
    updatedRoutes.splice(index, 1);
    setRoutes(updatedRoutes);
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
          <h1 className="ml-[6rem]">Create New Route</h1>
        </div>
        <div className="min-w-[50rem] ml-[3rem] mt-[1rem]">
          <div className="mb-4">
            <div className="flex">
              <label className="text-xl font-poppins mr-2">Starting Location:</label>
              <input
                type="text"
                value={startingLocation}
                onChange={handleStartingLocationChange}
                placeholder="Enter Starting Location"
                className="input-field rounded-lg border-quaternary border min-w-[20rem] py-2 px-4"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex">
              <label className="text-xl font-poppins mr-2">Destination:</label>
              <input
                type="text"
                value={destination}
                onChange={handleDestinationChange}
                placeholder="Enter Destination"
                className="input-field rounded-lg border-quaternary border min-w-[20rem] py-2 px-4"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex">
              <label className="text-xl font-poppins mr-2">Fare Tariff:</label>
              <input
                type="text"
                value={fareTariff}
                onChange={handleFareTariffChange}
                placeholder="Enter Fare Tariff"
                className="input-field rounded-lg border-quaternary border min-w-[20rem] py-2 px-4"
              />
            </div>
          </div>
          <div className="mb-4">
            <button
              onClick={createRoute}
              className="create-btn bg-quaternary text-background px-4 py-2 rounded shadow-md hover:bg-gamma hover:text-quaternary hover:border-quinary border"
            >
              Create Route
            </button>
          </div>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 min-w-[10rem] bg-quaternary text-background font-poppins text-xl text-justify">
                  Starting Location
                </th>
                <th className="px-4 py-2 min-w-[10rem] bg-quaternary text-background font-poppins text-xl text-justify">
                  Destination
                </th>
                <th className="px-4 py-2 min-w-[8rem] bg-quaternary text-background font-poppins text-xl text-justify">
                  Fare Tariff
                </th>
                <th className="px-4 py-2 min-w-[6rem] bg-quaternary text-background font-poppins text-xl text-justify">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route, index) => (
                <tr className="font-ubuntu shadow-md" key={index}>
                  <td className="border-none px-4 py-2">{route.startingLocation}</td>
                  <td className="border-none px-4 py-2">{route.destination}</td>
                  <td className="border-none px-4 py-2">{route.fareTariff}</td>
                  <td>
                    <button
                      onClick={() => removeRoute(index)}
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

export default CreateNewRoutes;
