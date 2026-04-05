// src/pages/PostTemplate.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/posts.scss";

// 接收來自 App.jsx 傳遞的屬性
const PostTemplate = ({ dataSource, backUrl, backText }) => {
  const { id } = useParams();

  // 從傳入的特定資料庫中尋找文章
  const post = dataSource.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="container text-center mt-5">
        <h2 style={{ color: "#ff0055" }}>[ 系統錯誤 ] 找不到該卷軸</h2>
        <Link to={backUrl} className="btn btn-outline-info mt-3">
          {backText}
        </Link>
      </div>
    );
  }

  return (
    <div className="container pb-5">
      <div className="mb-4">
        {/* 動態返回路徑與文字 */}
        <Link
          to={backUrl}
          style={{
            color: "#8b9bb4",
            textDecoration: "none",
            letterSpacing: "1px",
          }}
        >
          &lt;&lt; {backText}
        </Link>
      </div>

      <article
        style={{
          backgroundColor: "rgba(16, 22, 34, 0.6)",
          border: "1px solid rgba(0, 243, 255, 0.3)",
          borderRadius: "8px",
          padding: "40px",
        }}
      >
        <header className="mb-5 border-bottom border-secondary pb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span
              style={{
                color: "#ffb000",
                border: "1px solid #ffb000",
                padding: "4px 12px",
                borderRadius: "4px",
              }}
            >
              {post.type} | {post.rank}
            </span>
            <span style={{ color: "#8b9bb4", fontFamily: "monospace" }}>
              LOG_DATE: {post.date}
            </span>
          </div>
          <h1
            style={{
              color: "#ffffff",
              textShadow: "0 0 10px rgba(0,243,255,0.3)",
            }}
          >
            {post.title}
          </h1>
        </header>

        <div
          className="seeker-article-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
};

export default PostTemplate;
