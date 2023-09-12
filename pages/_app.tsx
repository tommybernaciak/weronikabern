import Layout from "@/components/Layout";
import { CloudinaryProvider } from "@/providers/Cloudinary";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CloudinaryProvider>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://weronikabern.com/",
          siteName: "Weronika Bern",
        }}
        title="Weronika Bern"
        description="Weronika Bern - photography"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CloudinaryProvider>
  );
}
