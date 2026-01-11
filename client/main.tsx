import { createRoot } from "react-dom/client";
import { App } from "./App";

let root: ReturnType<typeof createRoot> | null = null;

const rootElement = document.getElementById("root");

if (rootElement) {
  if (!root) {
    root = createRoot(rootElement);
  }
  root.render(<App />);
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    root?.unmount();
    root = null;
  });
}
