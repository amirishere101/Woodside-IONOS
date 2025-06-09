import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Woodside-Deli-Website",
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // Ensure fonts are not inlined
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]", // Keep fonts in the assets folder
      },
    },
  },
});
