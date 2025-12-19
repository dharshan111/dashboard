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
      <div  style={{ padding: 20, display: "flex", color:"#E5E7E7", backgroundColor:"#080808",}}>
        
        <div><Sidebar /></div>
        <div className="innerWidth">
          <Head />
          <h3 className="innerWidth ">
            Overview
          </h3>
          <div
            style={{display: "flex", padding:"5px", gap:"10px" }}
            className="innerWidth"
          >
            <DashboardStats />
            <Fourthbx />
          </div>
          <div
            style={{ display: "flex", gap: "15px", padding:"5px" }}
            className="innerWidth"
          >
            <Barchart2 />
            <Barchart />
          </div>
          <div
            className="innerWidth "
            style={{ display: "flex", gap: "15px", alignItems: "center", padding:"10px" }}
          >
            <div>
              <Datagrid />
            </div>
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
