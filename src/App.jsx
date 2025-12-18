import React from "react";
import Barchart from "./components/Barchart";
import Barchart2 from "./components/Barchart2";

import Tree from "./components/Tree";
import Head from "./components/Head";
import DashboardStats from "./components/DashboardStats";
import Fourthbx from "./components/Fourthbx";
import Piechart from "./components/Piechart";
import Datagrid from "./components/Datagrid";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <div> 
        <div>
          {/* <Sidebar /> */}
        </div>
        <div>
          <Head />
          <h3 style={{ padding: 20 }} className="innerWidth ">
            Overview
          </h3>
          <div
            style={{ padding: 20, display: "flex", gap: "15px" }}
            className="innerWidth flexCenter"
          >
            <DashboardStats />
            <Fourthbx />
          </div>
          <div
            style={{ display: "flex", gap: "15px" }}
            className="innerWidth flexCenter"
          >
            <Barchart2 />
            <Barchart />
          </div>
          <div
            className="paddings innerWidth"
            style={{ display: "flex", gap: "15px" }}
          >
            <Datagrid />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Tree />
              <Piechart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
