// src/components/QuestCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./QuestCard.scss";

const QuestCard = ({ post, basePath }) => {
  // 註解放在 return 外面，使用一般的雙斜線即可
  // 這裡會將 basePath (如 /game-mindset) 與文章 id 組合
  return (
    <Link to={`${basePath}/${post.id}`} className="quest-card">
      <div className="quest-header">
        <span className="quest-type">[{post.type}]</span>
        <span className="quest-date">{post.date}</span>
      </div>
      <h3 className="quest-title">{post.title}</h3>
      <p className="quest-summary">{post.summary}</p>
      <div className="text-end mt-3">
        <span
          style={{ color: "#00f3ff", fontSize: "0.8rem", letterSpacing: "1px" }}
        >
          讀取卷軸 &gt;&gt;
        </span>
      </div>
    </Link>
  );
};

export default QuestCard;
