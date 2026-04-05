import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-center text-center mt-5">
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
    </div>
  );
};

export default Home;
