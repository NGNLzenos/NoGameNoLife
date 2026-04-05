// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import CompassNavbar from "./components/CompassNavbar.jsx";

// 引入頁面與模板
import Home from "./pages/Home.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Career from "./pages/Career.jsx";
import Strategy from "./pages/Strategy.jsx";
import RapLab from "./pages/RapLab.jsx";
import PostTemplate from "./pages/PostTemplate.jsx"; // 引入萬用模板

// 引入三大資料庫
import { careerPosts } from "./data/careerPosts.js";
import { strategyPosts } from "./data/strategyPosts.js";
import { rapLabPosts } from "./data/rapLabPosts.js";

function App() {
  return (
    <div className="seeker-world">
      <CompassNavbar />
      <main
        style={{
          paddingTop: "100px",
          minHeight: "100vh",
          backgroundColor: "#0a0d14",
          color: "#e2e8f0",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/status" element={<AboutMe />} />

          {/* 職業雜談 */}
          <Route path="/career-logs" element={<Career />} />
          <Route
            path="/career-logs/:id"
            element={
              <PostTemplate
                dataSource={careerPosts}
                backUrl="/career-logs"
                backText="返回任務佈告欄"
              />
            }
          />

          {/* 遊戲啟發 */}
          <Route path="/game-mindset" element={<Strategy />} />
          <Route
            path="/game-mindset/:id"
            element={
              <PostTemplate
                dataSource={strategyPosts}
                backUrl="/game-mindset"
                backText="返回攻略密技"
              />
            }
          />

          {/* 啟封言靈 */}
          <Route path="/rap-lab" element={<RapLab />} />
          <Route
            path="/rap-lab/:id"
            element={
              <PostTemplate
                dataSource={rapLabPosts}
                backUrl="/rap-lab"
                backText="返回言靈實驗室"
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
