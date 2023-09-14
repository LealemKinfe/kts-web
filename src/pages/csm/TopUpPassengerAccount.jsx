import React, { useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import axios from 'axios';

const TopUpPassengerAccount = () => {
  const [passengerId, setPassengerId] = useState('');
  const [topUpAmount, setTopUpAmount] = useState('');

  const topUpAccount = async () => {
    try {
      // Send API request to top up passenger account
      await axios.post(`/api/passengers/${passengerId}/topup`, {
        amount: topUpAmount,
      });
      console.log('Passenger account topped up successfully');
      // Reset form fields
      setPassengerId('');
      setTopUpAmount('');
    } catch (error) {
      console.error('Error topping up passenger account:', error);
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
          <h1 className="ml-[6rem]">Top Up Passenger Account</h1>
        </div>
        <div className="min-w-[50rem] ml-[3rem] mt-[1rem]">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={passengerId}
              onChange={(e) => setPassengerId(e.target.value)}
              placeholder="Passenger ID"
              className="border-quinary border px-2 py-2 bg-secondary rounded-full font-poppins"
            />

            <input
              type="number"
              value={topUpAmount}
              onChange={(e) => setTopUpAmount(e.target.value)}
              placeholder="Top Up Amount"
              className="border-quinary border px-2 py-2 bg-secondary rounded-full font-poppins"
            />
          </div>

          <div>
            <button
              onClick={topUpAccount}
              className="mt-5 w-[12rem] py-2 px-6 rounded-full border-quinary border bg-tertiary text-[#F2785C] font-poppins hover:bg-quaternary hover:text-tertiary transition-colors"
            >
              Top Up Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUpPassengerAccount;
