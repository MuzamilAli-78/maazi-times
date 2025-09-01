import { Provider as UIProvider } from "@/components/ui/provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as ReduxProvider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UIProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ReduxProvider>
    </UIProvider>
  </StrictMode>
);
