import React from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import DarkMode from "../DarkMode/darkMode";
import "./navbar-styles.css";

export default function Layout() {
  const { t } = useTranslation();

  const [isNavCollapsed, setIsNavCollapsed] = React.useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          {t("Newsfeed")}
        </a>
        <button
          class="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div
          class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                {t("News")}
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/settings">
                {t("Settings")}
              </Link>
            </li>
            <DarkMode />
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}
