import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>WaykoDev</span>,
  project: {
    link: "https://github.com/WaykoDev",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase: "https://github.com/WaykoDev/website",
  footer: {
    text: "Nextra Docs Template",
  },
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "fr-FR", text: "Français" },
  ],
};

export default config;
