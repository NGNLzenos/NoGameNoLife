// src/pages/AboutMe.jsx
import React from "react";
import "./AboutMe.scss"; // 引入狀態面板魔法陣

const AboutMe = () => {
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
          <span style={{ color: "#00f3ff" }}>[ 狀態面板 ]</span>{" "}
          觀測者的真名與屬性
        </h2>
      </div>

      <div className="row status-board">
        {/* 左側：角色投影與基礎數值 */}
        <div className="col-lg-4 mb-4">
          <div className="avatar-section">
            <div className="avatar-frame">
              {/* 請在 public/img/ 放入你的頭像圖片，命名為 avatar.jpg */}
              <img
                src="/img/avatar.jpg"
                alt="觀測者頭像"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/180x180/0a0d14/00f3ff?text=NO+DATA";
                }}
              />
            </div>
            <h3 style={{ color: "#fff", letterSpacing: "2px" }}>
              你的名字/暱稱
            </h3>
            <p style={{ color: "#00f3ff", fontSize: "0.9rem" }}>
              Lv. 探索中 | 自由職業者
            </p>

            <div className="base-stats">
              <div className="stat-row">
                <span>HP (精力)</span>
                <span className="stat-value">100/100</span>
              </div>
              <div className="stat-row">
                <span>MP (靈感)</span>
                <span className="stat-value">無限</span>
              </div>
              <div className="stat-row">
                <span>INT (智力)</span>
                <span className="stat-value">持續成長</span>
              </div>
              <div className="stat-row">
                <span>AGI (執行力)</span>
                <span className="stat-value">極高</span>
              </div>
              <div className="stat-row">
                <span>LUK (運氣)</span>
                <span className="stat-value">由行動創造</span>
              </div>
            </div>
          </div>
        </div>

        {/* 右側：三大核心天賦 */}
        <div className="col-lg-8">
          <div className="talent-section">
            {/* 天賦一 */}
            <div className="talent-card talent-1">
              <div className="talent-header">
                <span className="talent-icon">✦</span>
                <h3>愛智求真的少年</h3>
              </div>
              <p>
                「世界是一組龐大的開源代碼，而我渴望閱讀它的底層邏輯。」
                <br />
                保持著對未知事物純粹的好奇心。不盲從世俗的既定規則，喜歡透過哲學、心理學與科學的視角，探尋事物背後的「為什麼」。我相信，唯有熱愛智慧，才能在數據的荒野中找到真實的自我。
              </p>
            </div>

            {/* 天賦二 */}
            <div className="talent-card talent-2">
              <div className="talent-header">
                <span className="talent-icon">⚔️</span>
                <h3>勇於探索世界的玩家</h3>
              </div>
              <p>
                「如果人生是一場無法存檔的硬核
                RPG，那就盡情去解鎖未知的地圖吧。」
                <br />
                拒絕按部就班的 NPC
                路線。我將現實生活視為一場遊戲，每一次的失敗都只是「Game
                Over」後的經驗值累積。敢於接取困難的支線任務，跨出舒適圈，用玩家的心態去體驗這個世界的每一種可能性。
              </p>
            </div>

            {/* 天賦三 (納瓦爾的變現哲學) */}
            <div className="talent-card talent-3">
              <div className="talent-header">
                <span className="talent-icon">⚖️</span>
                <h3>跨域疊加的煉金術士</h3>
              </div>
              <p>
                如同《納瓦爾寶典》所記載的財富真理：
                <strong>
                  「成為一個領域的前 1% 太難，但成為三個領域的前 25%
                  卻有跡可循。」
                </strong>
                <br />
                我不追求單一技能的極致內卷，而是致力於將多種「前 25%
                的技能」進行煉金術般的融合。透過跨領域的技能疊加，創造出市場上無法被輕易複製的稀缺價值，將熱愛轉化為實際的影響力與變現槓桿。
              </p>

              {/* 技能疊加視覺化 */}
              <div className="skill-stack">
                <div className="skill-item">
                  <div className="skill-label">
                    <span>[ 技能 A ] 例如：前端開發</span>
                    <span>Top 25%</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-label">
                    <span>[ 技能 B ] 例如：文字寫作</span>
                    <span>Top 25%</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-label">
                    <span>[ 技能 C ] 例如：遊戲化思維</span>
                    <span>Top 25%</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
