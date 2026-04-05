import React from "react";
import { strategyPosts } from "../data/strategyPosts.js";
import QuestCard from "../components/QuestCard.jsx";

const Strategy = () => {
  return (
    <div className="container pb-5">
      <div className="mb-5 text-center mt-5">
        <h2
          style={{
            borderBottom: "2px solid #00f3ff",
            display: "inline-block",
            paddingBottom: "10px",
          }}
        >
          <span style={{ color: "#00f3ff" }}>[ 攻略密技 ]</span>{" "}
          遊戲化思維的啟發
        </h2>
      </div>
      <div className="row g-4">
        {strategyPosts.map((post) => (
          <QuestCard key={post.id} post={post} basePath="/game-mindset" />
        ))}
      </div>
    </div>
  );
};
export default Strategy;
