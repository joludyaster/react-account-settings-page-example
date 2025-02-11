import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()], // ✅ Add svgr plugin
    resolve: {
        alias: {
            "@icons": path.resolve(__dirname, "src/styles/svg-icons"),
            "@components": path.resolve(__dirname, "src/components"),
            "@src": path.resolve(__dirname, "src"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@layouts": path.resolve(__dirname, "src/layouts"),
            "@styles": path.resolve(__dirname, "src/styles"),
        },
    },
});