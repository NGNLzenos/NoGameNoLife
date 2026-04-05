import React from "react";

const AboutMe = () => {
  return (
    <div className="container">
      <h2
        style={{
          borderBottom: "2px solid #00f3ff",
          display: "inline-block",
          paddingBottom: "10px",
        }}
      >
        <span style={{ color: "#00f3ff" }}>[ 狀態面板 ]</span> 觀測者的真名
      </h2>
      <div
        className="mt-4 p-4"
        style={{
          backgroundColor: "rgba(255,255,255,0.05)",
          borderRadius: "8px",
          border: "1px solid rgba(0,243,255,0.2)",
        }}
      >
        <p>
          <strong>職業：</strong> 全端煉金術士 / 吟遊詩人
        </p>
        <p>
          <strong>等級：</strong> 探索中...
        </p>
        <p style={{ color: "#8b9bb4" }}>
          「我是一名在代碼荒野中徘徊的探索者，記錄著這個世界的規則與真理。
          在這裡，你將看見我卸下裝備後的真實樣貌。」
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
