import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://authentication-backend-qc3d.onrender.com",
    },
  },
  plugins: [react()],
});
