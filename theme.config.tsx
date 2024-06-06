import React from "react";
import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";

import Logo from "./assets/logo.svg";

const config: DocsThemeConfig = {
  logo: (
    <Image
      src={Logo}
      width={60}
      height={60}
      alt="Wayko Logo"
      style={{ maxWidth: "60px", width: "100%", height: "100%" }}
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
    { locale: "en", text: "English" },
    { locale: "fr", text: "Français" },
  ],
  darkMode: false,
  nextThemes: {
    defaultTheme: "dark",
    forcedTheme: "dark",
  },
};

export default config;
