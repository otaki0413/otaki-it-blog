import { CustomLayout } from "next";

export const Layout: CustomLayout = (page) => {
  return <div>{page}</div>;
};
