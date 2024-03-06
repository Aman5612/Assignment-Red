"use client";
import AddForm from "@/components/AddForm";
import DataTable from "@/components/DataTable";
import NavBar from "@/components/NavBar";

import { useState } from "react";

const Home = () => {
  const [data, setData] = useState<number[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [status, setStatus] = useState(false);

  const handleAdd = (e: number[]) => {
    setData(e);
  };

  const handleSelectedIds = (e: boolean) => {
    setIsClicked(!isClicked);
    {
      !e && setShowForm(!showForm);
    }
  };

  const selectedData = (e: number[]) => {
    console.log("Home", e);
    handleAdd(e);
  };
  const handleStatus = (e: boolean) => {
    setStatus(e);
  };

  return (
    <div className="min-h-screen relative">
      {showForm && <AddForm showForm={showForm}/>}
      <NavBar
        handleSelectedData={handleSelectedIds}
        selectedData={data}
        status={status}
      />
      <DataTable
        clicked={isClicked}
        data={selectedData}
        btnStatus={handleStatus}
      />
    </div>
  );
};

export default Home;
