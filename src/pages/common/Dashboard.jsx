import React, { useEffect, useState } from "react";
import Table from "./Table";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUsers } from "../../services/userService";
import Breadcrumbs from "../../components/Breadcrumbs";
import TableHeader from "./TableHeader";
import DeleteAccountAlert from "../../components/alerts/DeleteAccountAlert";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers()
      .then((res) => {
        res
          .json()
          .then((json) => {
            setData(json);
            console.log(json);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <div className="topBar fixed flex min-h-[2rem] mt-[3.7rem] w-[60rem] my-2 z-50 bg-background items-center rounded-[20px] shadow-md ml-[25rem] ">
        <div className="titleBar w-[10rem] mb-[2rem] mt-[2rem]">
          <Breadcrumbs />
        </div>
      </div>
      <TableHeader />

      <div className="centerBar shadow-md ml-[25rem] flex min-h-[40rem] w-[60rem] my-2 mt-[14rem] bg-background rounded-[30px] ">
        <div className="">
          {" "}
          <Table data={data} />
        </div>
      </div>
    </div>
  );
}
