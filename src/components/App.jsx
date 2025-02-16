import React from "react";
import Sidebar from "./Sidebar";
import HomePage from "./Page";

function App() {
  return (
    <div className="h-screen flex justify-between min-h-screen dark:bg-zinc-950">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
