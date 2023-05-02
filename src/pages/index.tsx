import type { CustomNextPage, GetStaticProps } from "next";
import { client } from "src/libs/client";
import { Layout } from "src/pages-layout";
import { Index } from "src/pages-component/index";
import { Blog, Props } from "src/pages-component/index/page";

const IndexPage: CustomNextPage<Props> = (props) => {
  return <Index {...props} />;
};

IndexPage.getLayout = Layout;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog" });
  return {
    props: data,
  };
};

export default IndexPage;
