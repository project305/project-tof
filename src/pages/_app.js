import Layout from "@/layout/layout";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", () => setProgress(100));
  }, [router]);
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        waitingTime={500}
        onLoaderFinished={() => setProgress(0)}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
