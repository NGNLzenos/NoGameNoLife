import React from "react";
import { rapLabPosts } from "../data/rapLabPosts.js";
import QuestCard from "../components/QuestCard.jsx";

const RapLab = () => {
  return (
    <div className="container pb-5">
      <div className="mb-5 text-center mt-5">
        <h2
          style={{
            borderBottom: "2px solid #ff0055",
            display: "inline-block",
            paddingBottom: "10px",
          }}
        >
          <span style={{ color: "#ff0055" }}>[ 言靈陣法 ]</span> Rap Lab
          節奏工坊
        </h2>
      </div>
      <div className="row g-4">
        {rapLabPosts.map((post) => (
          <QuestCard key={post.id} post={post} basePath="/rap-lab" />
        ))}
      </div>
    </div>
  );
};
export default RapLab;
