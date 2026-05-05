// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 讓 Vite 自動判斷目前的環境
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // 如果是執行 npm run deploy (打包上線模式)，就加上 GitHub 的專案名稱
    // 如果是執行 npm run dev (本地開發模式)，就維持根目錄 '/'
    base: command === "build" ? "/NoGameNoLife/" : "/",
  };
});
