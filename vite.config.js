import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  jsx: "react",
  build: {
    assetsDir: "assets",
    outDir: "dist", // Specify the output directory for the build
  },
});
