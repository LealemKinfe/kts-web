import React, { useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import axios from 'axios';

const CreatePassengerAccount = () => {
  const [passengerEmail, setPassengerEmail] = useState('');
  const [passengerName, setPassengerName] = useState('');
  const [passengerBalance, setPassengerBalance] = useState('');

  const createPassengerAccount = async () => {
    try {
      // Send API request to create passenger account
      await axios.post('/api/passengers', {
        email: passengerEmail,
        name: passengerName,
        balance: passengerBalance,
      });
      console.log('Passenger account created successfully');
      // Reset form fields
      setPassengerEmail('');
      setPassengerName('');
      setPassengerBalance('');
    } catch (error) {
      console.error('Error creating passenger account:', error);
    }
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
          <h1 className="ml-[6rem]">Create Passenger Account</h1>
        </div>
        <div className="min-w-[50rem] ml-[3rem] mt-[1rem]">
          <div className="flex flex-col gap-4">
            <input
              type="email"
              value={passengerEmail}
              onChange={(e) => setPassengerEmail(e.target.value)}
              placeholder="Email"
              className="border-quinary border px-4 py-2 bg-secondary rounded-full font-poppins"
            />

            <input
              type="text"
              value={passengerName}
              onChange={(e) => setPassengerName(e.target.value)}
              placeholder="Passenger Name"
              className="border-quinary border px-4 py-2 bg-secondary rounded-full font-poppins"
            />

            <input
              type="number"
              value={passengerBalance}
              onChange={(e) => setPassengerBalance(e.target.value)}
              placeholder="Account Balance"
              className="border-quinary border px-4 py-2 bg-secondary rounded-full font-poppins"
            />
          </div>

          <div>
            <button
              onClick={createPassengerAccount}
              className="mt-5 w-[12rem] py-2 px-6 rounded-full border-quinary border bg-tertiary text-[#F2785C] font-poppins hover:bg-quaternary hover:text-tertiary transition-colors"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePassengerAccount;
