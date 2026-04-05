// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// 引入 Bootstrap 的樣式與互動腳本 (確保漢堡選單等 UI 正常運作)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// 如果你有全域的 SCSS，可以建立一個 index.scss 並在這裡引入
// import './index.scss';

import App from "./App.jsx";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <StrictMode>
    {/* 啟動時空導航結界 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
