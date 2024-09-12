import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/jlpt-word-game",
  css: { postcss: "./postcss.config.js" },
});
