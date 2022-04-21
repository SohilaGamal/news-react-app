import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "Languages":"Languages",
      "Newsfeed":"Newsfeed",
      "News":"News",
      "Settings":"Settings",
      "Search":"Search",
      "No Newsfeed yet!":"No Newsfeed yet!"
    }
  },
  sp: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      "Languages":"Idiomas",
      "Newsfeed":"Noticias",
      "News":"Nuevas",
      "Settings":"Ajustes",
      "Search":"Búsqueda",
      "No Newsfeed yet!":"¡Todavía no hay suministro de noticias!"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;