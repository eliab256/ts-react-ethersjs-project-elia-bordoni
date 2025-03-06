import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Buffer } from "buffer";
//import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./assets/Styles/Main.css";

import App from "./App.tsx";
import store from "./Store";

globalThis.Buffer = Buffer;
//const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
