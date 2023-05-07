import { NextPage } from "next";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { ArticleCardList } from "src/component/ArticleCardList/ArticleCardList ";

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  category: {
    id: string;
    name: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
    revisedAt: string;
  };
};

export type Props = MicroCMSListResponse<Blog>;

// ブログ一覧画面
export const Index: NextPage<Props> = (props) => {
  return (
    <div>
      <p className="w-full pr-10 text-right text-sm">{`記事の総数：${props.totalCount}件`}</p>
      <ArticleCardList articles={props.contents} />
    </div>
  );
};
