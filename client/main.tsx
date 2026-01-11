import { createRoot } from "react-dom/client";
import { App } from "./App";

declare global {
  interface Window {
    __REACT_ROOT__?: ReturnType<typeof createRoot>;
  }
}

function mountApp() {
  const rootElement = document.getElementById("root");

  if (!rootElement) return;

  // Create root only once
  if (!window.__REACT_ROOT__) {
    window.__REACT_ROOT__ = createRoot(rootElement);
  }

  window.__REACT_ROOT__.render(<App />);
}

// Mount on initial load
mountApp();

// Handle HMR updates
if (import.meta.hot) {
  import.meta.hot.accept("./App", () => {
    mountApp();
  });
}
