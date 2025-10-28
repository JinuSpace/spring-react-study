import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8080", // Spring Boot URL
        changeOrigin: true,
        secure: false, // HTTPS가 아니더라도 요청 허용

      },
    },
  },
});
