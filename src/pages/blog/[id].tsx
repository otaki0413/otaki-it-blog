import { CustomNextPage, GetStaticPaths, GetStaticProps } from "next";
import { client } from "src/libs/client";
import { Blog } from "src/pages-component/index/page";
import { Article, ArticleProps } from "src/pages-component/article/page";
import { ArticleLayout } from "src/pages-layout/ArticleLayout/ArticleLayout";

const ArticlePage: CustomNextPage<ArticleProps> = (props) => {
  return <Article {...props} />;
};

ArticlePage.getLayout = ArticleLayout;

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{}, { id: string }> = async (
  ctx
) => {
  // パラメータの存在確認
  if (!ctx.params) {
    return { notFound: true };
  }

  // 個別記事の取得
  const data = await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId: ctx.params.id,
  });

  return {
    props: data,
  };
};

export default ArticlePage;
