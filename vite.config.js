import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // 請將這裡的名稱換成你 GitHub 上的 Repository (儲存庫) 名稱
  // 假設你的 Repo 叫做 NoGameNoLife，前後都要有斜線
  base: "/NoGameNoLife/",
});
