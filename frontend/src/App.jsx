import React from "react";
import Sidebar from "./Component/Sidebar";
import Workspace from "./Component/Workspace";

const App = () => {
  return (
    <>
      <div className="app bg-[#F6F8FA] h-screen w-full flex  space-x-6 max-md:space-x-0 ">
        <Sidebar />
        <div className="w-full p-4">
          <Workspace />
        </div>
      </div>
    </>
  );
};

export default App;
