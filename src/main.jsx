import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "./index.css";
import global_es from "./components/Translations/es/global.json";
import global_en from "./components/Translations/en/global.json";
import global_pt from "./components/Translations/pt/global.json";
import global_ru from "./components/Translations/ru/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
    pt: {
      global: global_pt,
    },
    ru: {
      global: global_ru,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);
