// src/pages/Career.jsx
import React from "react";
import { careerPosts } from "../data/careerPosts.js"; // 引入資料
import QuestCard from "../components/QuestCard.jsx"; // 引入卡片組件

const Career = () => {
  return (
    <div className="container pb-5">
      <div className="mb-5 text-center">
        <h2
          style={{
            borderBottom: "2px solid #00f3ff",
            display: "inline-block",
            paddingBottom: "10px",
          }}
        >
          <span style={{ color: "#00f3ff" }}>[ 任務日誌 ]</span>{" "}
          職業與生存的軌跡
        </h2>
        <p className="mt-3" style={{ color: "#8b9bb4" }}>
          系統提示：此區域記載著觀測者在「現實伺服器」中所接取的各種主線與支線任務。
          <br />
          請選擇你要查閱的任務卷軸。
        </p>
      </div>

      {/* 網格系統排版 */}
      <div className="row g-4">
        {careerPosts.map((post) => (
          <div className="col-md-6 col-lg-4" key={post.id}>
            {/* 將資料作為 props 傳遞給 QuestCard */}
            <QuestCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
