import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col px-12 min-h-screen justify-between">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
