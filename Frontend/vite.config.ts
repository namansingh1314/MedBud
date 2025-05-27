import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.tsx",
    }),
  ],

  server: {
    host: true,
    strictPort: true,
    port: 5173,
    hmr: {
      overlay: true,
      clientPort: 5173,
      host: "localhost",
      protocol: "ws",
      timeout: 5000,
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
