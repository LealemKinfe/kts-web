import React, { useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import axios from 'axios';
import { RiSearchLine } from 'react-icons/ri';

const ActivateDisableCards = () => {
  const [copiedId, setCopiedId] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const approveRFID = async (rfidId) => {
    try {
      // Send API request to approve RFID card
      await axios.put(`/api/cards/${rfidId}`, { isActive: true });
      console.log('RFID card updated successfully');
    } catch (error) {
      console.error('Error updating RFID card:', error);
    }
  };

  const generateHex = async (rfidId) => {
    try {
      // Copy RFID ID to clipboard
      await navigator.clipboard.writeText(rfidId);
      setCopiedId(rfidId);
      console.log('RFID ID copied successfully');
    } catch (error) {
      console.error('Error copying RFID ID:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const data = [
    { name: 'User1', userId: 'user1@example.com', cardId: 'rfid1' },
    { name: 'User2', userId: 'user2@example.com', cardId: 'rfid2' },
    // Add more data objects for other RFID card requests
  ];

  const filteredData = data.filter((item) =>
    item.cardId.toLowerCase().includes(searchValue.toLowerCase())
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
          <h1 className="ml-[6rem]">Activate / Disable Cards</h1>
        </div>
        <div className="min-w-[50rem] ml-[3rem] mt-[1rem]">
          {/* Search component */}
          <div className="mb-4">
  <div className="relative">
    <input
      type="text"
      value={searchValue}
      onChange={handleSearchChange}
      placeholder="Search Card ID"
      className="search-input rounded-xl border-quinary border min-w-[10rem] py-2 px-4 pl-10 shadow-xl"
    />
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <RiSearchLine className="text-quaternary" />
    </div>
  </div>
</div>

          {/* Table displaying RFID card requests */}
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 w-[14rem] bg-quaternary text-background font-poppins text-xl text-justify">Name</th>
                <th className="px-4 py-2 w-[18rem] bg-quaternary text-background font-poppins text-xl text-justify">User ID</th>
                <th className="px-4 py-2 w-[8rem] bg-quaternary text-background font-poppins text-xl text-justify">Card ID</th>
                <th className="px-4 py-2 w-[24rem] bg-quaternary text-background font-poppins text-xl text-justify">Generate Card Code</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr className="font-ubuntu shadow-md" key={item.cardId}>
                  <td className="border-none px-4 py-2">{item.name}</td>
                  <td className="border-none px-4 py-2">{item.userId}</td>
                  <td className="border-none px-4 py-2">{item.cardId}</td>
                  <td>
                    <button onClick={() => approveRFID(item.cardId)} className="approve-btn bg-tertiary text-quaternary px-4 py-2 rounded border shadow-md border-quinary hover:bg-accent hover:text-background">Approve</button>
                    <button
                      onClick={() => generateHex(item.cardId)}
                      className={`generate-btn${copiedId === item.cardId ? ' copied' : ''}  bg-quaternary text-background px-6 py-2 rounded ml-3 shadow-md hover:bg-gamma hover:text-quaternary hover:border-quinary border`}
                      disabled={copiedId === item.cardId}
                    >
                      {copiedId === item.cardId ? 'Copied' : 'Generate Hex'}
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

export default ActivateDisableCards;
