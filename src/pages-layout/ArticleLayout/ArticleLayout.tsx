import { CustomLayout } from "next";
import { HeaderMenu } from "src/component/Header";
import { Footer } from "src/component/Footer";

/** @package */
export const ArticleLayout: CustomLayout = (page) => {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderMenu />
      <main className="mx-auto flex w-3/4 flex-1 justify-center py-10">
        {page}
      </main>
      <Footer />
    </div>
  );
};
