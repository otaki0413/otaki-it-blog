import { CustomLayout } from "next";
import { HeaderMenu } from "src/component/Header";
import { Footer } from "src/component/Footer";

/** @package */
export const Layout: CustomLayout = (page) => {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderMenu />
      <main className="flex flex-1 justify-center pt-10">{page}</main>
      <Footer />
    </div>
  );
};
