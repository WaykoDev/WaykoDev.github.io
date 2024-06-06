import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Galaxy from "../components/webgl/Galaxy/Galaxy";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Galaxy />
      <Component {...pageProps} />
    </>
  );
}
