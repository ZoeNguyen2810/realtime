import React from "react";
import { Sidebar } from "../hooks/Sidebar";

export const Dashboard = ({ id }) => {
  return (
    <>
      <div>{id}</div>
      <Sidebar id={id} />
    </>
  );
};
