import React, { useState } from "react";
import Squares from "./Squares";

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('project');


  return (
    <div className="relative w-full bg-black text-white overflow-x-hidden" style={{ fontFamily: "'PT Sans', sans-serif" }}>
      {/* 🔲 Animated background (fixed) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Squares
          speed={0.5}
          squareSize={100}
          direction="diagonal"
          borderColor="#ffffff4d"
          hoverFillColor="#222"
        />
      </div>
    </div>
  );
};

export default App;
