import React from "react";

const TableHeader = () => {
  return (
    <div className="fixed topBar flex min-h-[11rem] w-[65rem] my-2 bg-secondary  rounded-[20px] ml-[24rem] mt-[-9rem]">
      <div className="topBar flex min-h-[4rem] w-[60rem] my-2 bg-quaternary items-center rounded-[20px] mt-[19rem] ml-[1rem]">
        <div className="headerBar w-[10rem]">
          <div className="flex items-left mt-[1rem] ml-[2rem] w-[58rem] z-50">

            <h1 className="px-4 py-2 w-[14rem] bg-quaternary text-background font-poppins text-xl text-justify">Name</h1>
            <h1 className="px-4 py-2 w-[18rem] bg-quaternary text-background font-poppins text-xl text-justify">User ID</h1>
            <h1 className="px-4 py-2 w-[8rem] bg-quaternary text-background font-poppins text-xl text-justify">Role</h1>
            <h1 className="px-4 py-2 w-[24rem] bg-quaternary text-background font-poppins text-xl text-justify">Manage</h1>
          </div>


        </div>
      </div>
    </div>
  );
};

export default TableHeader;
