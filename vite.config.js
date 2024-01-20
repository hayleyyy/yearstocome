import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Determine the base path based on the environment
const base = process.env.NODE_ENV === "production" ? "/yearstocome/" : "/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: base,
});
