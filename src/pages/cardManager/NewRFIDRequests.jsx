import React, { useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import axios from 'axios';

const NewRFIDRequests = () => {
  const [copiedId, setCopiedId] = useState('');
  const [generatedHex, setGeneratedHex] = useState('');
  const [approvedIds, setApprovedIds] = useState(new Set());

  const approveRFID = async (rfidId) => {
    try {
      // Send API request to approve RFID card
      await axios.put(`/api/cards/${rfidId}`, { isActive: true });
      console.log('RFID card updated successfully');
      setApprovedIds(new Set([...approvedIds, rfidId]));
    } catch (error) {
      console.error('Error updating RFID card:', error);
    }
  };

  const generateHex = async (rfidId) => {
    try {
      // Generate RFID hex code
      const hexCode = generateHexCode();
      // Copy RFID hex code to clipboard
      await navigator.clipboard.writeText(hexCode);
      setCopiedId(rfidId);
      setGeneratedHex(hexCode);
      console.log('RFID hex code copied successfully');
    } catch (error) {
      console.error('Error copying RFID hex code:', error);
    }
  };

  const generateHexCode = () => {
    // Generate random hex code
    const hexCode = Math.floor(Math.random() * 1000000).toString(16).toUpperCase();
    return hexCode.padStart(6, '0');
  };

  const isApproved = (rfidId) => {
    return approvedIds.has(rfidId);
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
          <h1 className="ml-[6rem]">New RFID Card Requests</h1>
        </div>
        <div className="min-w-[50rem] ml-[3rem] mt-[1rem]">
          {/* Table displaying RFID card requests */}
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 w-[14rem] bg-quaternary text-background font-poppins text-xl text-justify">Name</th>
                <th className="px-4 py-2 w-[18rem] bg-quaternary text-background font-poppins text-xl text-justify">User ID</th>
                <th className="px-4 py-2 w-[8rem] bg-quaternary text-background font-poppins text-xl text-justify">Role</th>
                <th className="px-4 py-2 w-[24rem] bg-quaternary text-background font-poppins text-xl text-justify">Generate Card Code</th>
              </tr>
            </thead>
            <tbody>
              <tr className='font-ubuntu shadow-md'>
                <td className='border-none px-4 py-2'>user1@example.com</td>
                <td className='border-none px-4 py-2'>User1</td>
                <td className='border-none px-4 py-2'>Lastname1</td>
                <td>
                  {isApproved('rfid1') ? (
                    <button className="approved-btn bg-tertiary text-quaternary px-4 py-2 rounded border shadow-md border-quinary">
                      Approved
                    </button>
                  ) : (
                    <>
                      <button onClick={() => approveRFID('rfid1')} className="approve-btn bg-tertiary text-quaternary px-4 py-2 rounded border shadow-md border-quinary hover:bg-accent hover:text-background">Approve</button>
                      <button
                        onClick={() => generateHex('rfid1')}
                        className={`generate-btn${copiedId === 'rfid1' ? ' copied' : ''}  bg-quaternary text-background px-6 py-2 rounded ml-3 shadow-md hover:bg-gamma hover:text-quaternary hover:border-quinary border`}
                        disabled={copiedId === 'rfid1'}
                      >
                        {copiedId === 'rfid1' ? 'Copied' : 'Generate Hex'}
                      </button>
                    </>
                  )}
                </td>
              </tr>
              <tr className='font-ubuntu shadow-md'>
                <td className='border-none px-4 py-2'>user2@example.com</td>
                <td className='border-none px-4 py-2'>User2</td>
                <td className='border-none px-4 py-2'>Lastname2</td>
                <td>
                  {isApproved('rfid2') ? (
                    <button className="approved-btn bg-tertiary text-quaternary px-4 py-2 rounded border shadow-md border-quinary">
                      Approved
                    </button>
                  ) : (
                    <>
                      <button onClick={() => approveRFID('rfid2')} className="approve-btn bg-tertiary text-quaternary px-4 py-2 rounded border shadow-md border-quinary hover:bg-accent hover:text-background">Approve</button>
                      <button
                        onClick={() => generateHex('rfid2')}
                        className={`generate-btn${copiedId === 'rfid2' ? ' copied' : ''} bg-quaternary text-background px-6 py-2 rounded ml-3 shadow-md hover:bg-gamma hover:text-quaternary hover:border-quinary border`}
                        disabled={copiedId === 'rfid2'}
                      >
                        {copiedId === 'rfid2' ? 'Copied' : 'Generate Hex'}
                      </button>
                    </>
                  )}
                </td>
              </tr>
              {/* Add more rows for other RFID card requests */}
            </tbody>
          </table>
          {/* Display generated hex code */}
          {generatedHex && (
            <div className="mt-4 ml-3">
              <h3 className="text-lg font-medium">Generated Hex Code:</h3>
              <div className="bg-quaternary text-background px-4 py-2 rounded mt-2 shadow-md">
                {generatedHex}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewRFIDRequests;
