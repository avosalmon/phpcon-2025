import "../css/app.css";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { AnimatePresence } from "motion/react";
import { createRoot } from "react-dom/client";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob("./pages/**/*.tsx")),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <AnimatePresence mode="wait">
        <App key={props.initialPage.url} {...props} />
      </AnimatePresence>,
    );
  },
  progress: {
    color: "#4B5563",
  },
});

// This will set light / dark mode on load...
// initializeTheme();
