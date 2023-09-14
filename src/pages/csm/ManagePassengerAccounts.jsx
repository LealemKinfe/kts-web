import React, { useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import axios from 'axios';

const ManagePassengerAccounts = () => {
  const [copiedId, setCopiedId] = useState('');
  const [editingPassenger, setEditingPassenger] = useState(null);
  const [editedPassengerName, setEditedPassengerName] = useState('');

  const approvePassenger = async (passengerId) => {
    try {
      // Send API request to approve passenger
      await axios.put(`/api/passengers/${passengerId}`, { approved: true });
      console.log('Passenger approved successfully');
    } catch (error) {
      console.error('Error approving passenger:', error);
    }
  };

  const deletePassenger = async (passengerId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this passenger?');
    if (confirmDelete) {
      try {
        // Send API request to delete passenger
        await axios.delete(`/api/passengers/${passengerId}`);
        console.log('Passenger deleted successfully');
      } catch (error) {
        console.error('Error deleting passenger:', error);
      }
    }
  };

  const handleEditName = (passengerId, value) => {
    setEditedPassengerName(value);
  };

  const saveEditedName = async (passengerId) => {
    try {
      // Send API request to update passenger name
      await axios.put(`/api/passengers/${passengerId}`, { name: editedPassengerName });
      setEditingPassenger(null);
      console.log('Passenger name updated successfully');
    } catch (error) {
      console.error('Error updating passenger name:', error);
    }
  };

  const isApproved = (passengerId) => {
    // Return true if passenger is approved, false otherwise (replace with your logic)
    return true;
  };

  const copyCardId = (cardId) => {
    setCopiedId(cardId);
    // Copy card ID to clipboard
    navigator.clipboard.writeText(cardId);
    console.log('Card ID copied successfully');
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
          <h1 className="ml-[6rem]">Manage Passenger Accounts</h1>
        </div>
        <div className="min-w-[50rem] ml-[3rem] mt-[1rem]">
          {/* Table displaying passenger accounts */}
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 w-[10rem] bg-quaternary text-background font-poppins text-xl text-justify">Passenger ID</th>
                <th className="px-4 py-2 w-[14rem] bg-quaternary text-background font-poppins text-xl text-justify">Name</th>
                <th className="px-4 py-2 w-[14rem] bg-quaternary text-background font-poppins text-xl text-justify">Account Balance</th>
                <th className="px-4 py-2 w-[14rem] bg-quaternary text-background font-poppins text-xl text-justify">Card ID</th>
                <th className="px-4 py-2 w-[10rem] bg-quaternary text-background font-poppins text-xl text-justify">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className='font-ubuntu shadow-md'>
                <td className='border-none px-4 py-2'>passenger1</td>
                <td className='border-none px-4 py-2'>
                  {editingPassenger === 'passenger1' ? (
                    <input
                      type="text"
                      value={editedPassengerName}
                      onChange={(e) => handleEditName('passenger1', e.target.value)}
                      className="border border-quaternary rounded px-2 py-1"
                    />
                  ) : (
                    'Passenger 1'
                  )}
                </td>
                <td className='border-none px-4 py-2'>$50.00</td>
                <td className='border-none px-4 py-2'>
                  <button
                    onClick={() => copyCardId('card1')}
                    className={`generate-btn${copiedId === 'card1' ? ' copied' : ''} bg-quaternary text-background px-6 py-2 rounded ml-3 shadow-md hover:bg-gamma hover:text-quaternary hover:border-quinary border`}
                    disabled={copiedId === 'card1'}
                  >
                    {copiedId === 'card1' ? 'Copied' : 'Copy Card ID'}
                  </button>
                </td>
                <td>
                  {editingPassenger === 'passenger1' ? (
                    <button
                      onClick={() => saveEditedName('passenger1')}
                      className="approve-btn bg-tertiary text-quaternary px-4 py-2 rounded border shadow-md border-quinary hover:bg-accent hover:text-background"
                    >
                      Save
                    </button>
                  ) : (
                    <select
                      className="actions-select bg-tertiary text-quaternary px-4 py-2 rounded border shadow-md border-quinary hover:bg-accent hover:text-background"
                      onChange={(e) => {
                        const selectedAction = e.target.value;
                        if (selectedAction === 'approve') {
                          approvePassenger('passenger1');
                        } else if (selectedAction === 'delete') {
                          deletePassenger('passenger1');
                        } else if (selectedAction === 'edit') {
                          setEditingPassenger('passenger1');
                          setEditedPassengerName('Passenger 1');
                        }
                      }}
                    >
                      <option value="">Select Action</option>
                      <option value="approve">{isApproved('passenger1') ? 'Approved' : 'Approve'}</option>
                      <option value="delete">Delete</option>
                      <option value="edit">Edit</option>
                    </select>
                  )}
                </td>
              </tr>
              {/* Add more rows for other passengers */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagePassengerAccounts;
