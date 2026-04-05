// src/pages/CareerDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { careerPosts } from "../data/careerPosts.js";

// 引入我們剛剛打造的文章專屬排版樣式
import "../styles/posts.scss";

const CareerDetail = () => {
  const { id } = useParams();
  const post = careerPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="container text-center mt-5">
        <h2 style={{ color: "#ff0055" }}>[ 系統錯誤 ] 找不到該任務卷軸</h2>
        <Link to="/career-logs" className="btn btn-outline-info mt-3">
          返回任務佈告欄
        </Link>
      </div>
    );
  }

  return (
    <div className="container pb-5">
      <div className="mb-4">
        <Link
          to="/career-logs"
          style={{
            color: "#8b9bb4",
            textDecoration: "none",
            letterSpacing: "1px",
          }}
        >
          &lt;&lt; 返回任務佈告欄
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

        {/* 
          注意這裡！我們加上了 className="seeker-article-content"
          這樣一來，裡面所有的 p, h2, blockquote, code 都會套用 posts.scss 的魔法效果
        */}
        <div
          className="seeker-article-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
};

export default CareerDetail;
