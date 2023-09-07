import Layout from "@/components/Layout";
import { CloudinaryProvider } from "@/providers/Cloudinary";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CloudinaryProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CloudinaryProvider>
  );
}
