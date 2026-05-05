import React from "react";
import { Link } from "react-router-dom"; // 【關鍵修復】必須把 Link 召喚出來！
import "./CompassNavbar.scss";

const CompassNavbar = () => {
  // 更新後的座標點，融合了遊戲 UI 的語意
  const navPoints = [
    { id: "home", label: "首頁", path: "/" },
    { id: "status", label: "關於我", path: "/status" },
    { id: "career", label: "職業雜談", path: "/career-logs" },
    { id: "strategy", label: "遊戲啟發", path: "/game-mindset" },
    { id: "raplab", label: "啟封言靈", path: "/rap-lab" }, // Rap Lab 的奇幻轉譯
  ];
  return (
    <nav className="navbar navbar-expand-lg seeker-navbar fixed-top">
      <div className="container">
        {/* 系統的真名 */}
        <Link className="navbar-brand seeker-brand" to="/">
          <span className="brand-title">森羅萬象</span>
          <span className="brand-subtitle">THE SEEKER</span>
        </Link>

        {/* 響應式漢堡選單：當視窗縮小，羅盤將摺疊其型態 */}
        <button
          className="navbar-toggler seeker-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#seekerNav"
          aria-controls="seekerNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon"></span>
        </button>

        {/* 導航座標點 */}
        <div className="collapse navbar-collapse" id="seekerNav">
          <ul className="navbar-nav ms-auto">
            {navPoints.map((point) => (
              <li className="nav-item" key={point.id}>
                <Link className="nav-link seeker-nav-link" to={point.path}>
                  <span className="link-text">{point.label}</span>
                  <span className="neon-underline"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CompassNavbar;
