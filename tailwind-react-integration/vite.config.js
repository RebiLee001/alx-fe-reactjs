// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // ✅ Add this

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ✅ Add this
  ],
});
// This configuration file sets up Vite with React and Tailwind CSS.
// It imports the necessary plugins and exports a configuration object that includes these plugins.
