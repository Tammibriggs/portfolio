import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter()],
  // Only variables with these prefixes reach the browser. REACT_APP_GOOGLE_
  // keeps the analytics ID's existing name (REACT_APP_GOOGLE_ANALYTICS_ID),
  // so the setting on Netlify doesn't need renaming.
  envPrefix: ["VITE_", "REACT_APP_GOOGLE_"],
  // Prepare these packages when the dev server starts. Otherwise Vite finds
  // them during the first page load, rebuilds, and reloads the page halfway
  // through, which can leave it unstyled until you refresh.
  optimizeDeps: {
    include: ["react-ga4"],
  },
});
