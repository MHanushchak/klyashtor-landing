import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2015", // Змушує Vite транспілювати сучасний синтаксис (як-от ?.) у старіший
  },
});
