import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { router } from "./Routes/Routes";
import i18n from "./Componenets/Language/i18n";
import { LanguageProvider } from "./Componenets/Language/LanguageContext";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </I18nextProvider>
  </StrictMode>
);
