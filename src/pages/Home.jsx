// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss"; // 引入傳送門魔法陣

const Home = () => {
  // 定義四個領域的數據
  const portals = [
    {
      id: "status",
      title: "關於我",
      subtitle: "[ 狀態面板 ]",
      desc: "觀測者的真名、屬性數值與裝備庫",
      path: "/status",
      img: `${import.meta.env.BASE_URL}img/home-about.jpg`, // 對應你放入 public/img 的圖片
      color: "#00f3ff", // 探索者之藍
      colorAlpha: "rgba(0, 243, 255, 0.3)",
    },
    {
      id: "career",
      title: "職業雜談",
      subtitle: "[ 任務日誌 ]",
      desc: "現實伺服器中的生存軌跡與轉職紀錄",
      path: "/career-logs",
      img: `${import.meta.env.BASE_URL}img/home-career.jpg`,
      color: "#ffb000", // 警告與榮耀之金
      colorAlpha: "rgba(255, 176, 0, 0.3)",
    },
    {
      id: "strategy",
      title: "遊戲啟發",
      subtitle: "[ 攻略密技 ]",
      desc: "將人生視為硬核 RPG 的通關法則",
      path: "/game-mindset",
      img: `${import.meta.env.BASE_URL}img/home-strategy.jpg`,
      color: "#b026ff", // 奧秘之紫
      colorAlpha: "rgba(176, 38, 255, 0.3)",
    },
    {
      id: "raplab",
      title: "啟封言靈",
      subtitle: "[ 言靈陣法 ]",
      desc: "代碼與節奏交織的押韻工坊",
      path: "/rap-lab",
      img: `${import.meta.env.BASE_URL}img/home-rap.jpg`,
      color: "#ff0055", // 狂暴之粉紅
      colorAlpha: "rgba(255, 0, 85, 0.3)",
    },
  ];

  return (
    <div className="container pb-5">
      {/* 歡迎區塊 (維持你原本的文字) */}
      <div className="row justify-content-center text-center mt-5 mb-4">
        <div className="col-md-8">
          <h1
            style={{
              color: "#00f3ff",
              textShadow: "0 0 15px rgba(0,243,255,0.6)",
              letterSpacing: "2px",
            }}
          >
            SYSTEM ONLINE: 歡迎登入
          </h1>
          <p className="lead mt-4" style={{ color: "#8b9bb4" }}>
            旅人啊，火光已經點燃。這裡是數據與魔法交織的起點。
            <br />
            請透過上方的星界羅盤，選擇你今日的探索目標。
          </p>
        </div>
      </div>

      {/* 傳送門區塊 (2x2 網格) */}
      <div className="row g-4 portal-grid">
        {portals.map((portal) => (
          <div className="col-md-6" key={portal.id}>
            <Link
              to={portal.path}
              className="portal-card"
              // 透過 CSS 變數，讓每個卡片 hover 時發出不同的光芒
              style={{
                "--hover-color": portal.color,
                "--hover-color-alpha": portal.colorAlpha,
              }}
            >
              {/* 背景圖層 */}
              <div
                className="portal-bg"
                style={{ backgroundImage: `url(${portal.img})` }}
              ></div>

              {/* 漸層遮罩 */}
              <div className="portal-overlay"></div>

              {/* 內容圖層 */}
              <div className="portal-content">
                <div
                  style={{
                    color: portal.color,
                    fontSize: "0.85rem",
                    letterSpacing: "1px",
                    marginBottom: "6px",
                    fontFamily: "monospace",
                  }}
                >
                  {portal.subtitle}
                </div>
                <h2 className="portal-title">{portal.title}</h2>
                <p className="portal-desc">{portal.desc}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
