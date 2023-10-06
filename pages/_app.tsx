// pages/_app.tsx
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { darkTheme } from "../stitches.config";
import ThemeToggle from '../components/button';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: "light",
        dark: darkTheme.className
      }}
      
    >
        <ThemeToggle/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}