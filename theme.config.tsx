import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

import { ReactComponent as Logo } from "./assets/logo.svg";

const config: DocsThemeConfig = {
  logo: (
    <Logo
      style={{ maxWidth: "60px", width: "100%", height: "100%" }}
      preserveAspectRatio="xMidYMid meet"
    />
  ),
  project: {
    link: "https://github.com/WaykoDev",
  },
  docsRepositoryBase: "https://github.com/WaykoDev/website",
  footer: {
    text: "Wayko Cellar - All rights reserved © " + new Date().getFullYear(),
  },
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "fr-FR", text: "Français" },
  ],
  darkMode: false
};

export default config;
