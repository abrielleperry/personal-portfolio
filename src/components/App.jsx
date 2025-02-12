import React from "react";
import Sidebar from "./Sidebar";
import HomePage from "./Page";

function App() {
  return (
    <div className="h-full flex justify-between min-h-screen bg-neutral-50 dark:bg-zinc-950">
      <Sidebar />
      <HomePage />
    </div>
  );
}

export default App;
