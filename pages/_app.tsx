import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { Session } from "next-auth";

function MyApp({
  Component,
  pageProps: { ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    // The App Component is surrounded by 2 things
    // 1. Session Provider - responsible for nextAuth Authentication and session handling
    // 2. Recoil - responsible for app state management (to generate a screen/modal to upload pictures and store it in the database)
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
