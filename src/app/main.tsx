import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { Layout } from "./Layout.tsx";
import { Provider } from 'react-redux';
import { store } from './store.ts';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <Layout />
    </Provider>
  </StrictMode>
);
