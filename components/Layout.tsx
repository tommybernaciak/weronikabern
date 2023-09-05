import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={`flex flex-col px-8`}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
