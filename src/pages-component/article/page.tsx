import { NextPage } from "next";
import Link from "next/link";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { Blog } from "src/pages-component/index/page";
import dayjs from "dayjs";

export type ArticleProps = Blog & MicroCMSContentId & MicroCMSDate;

/** @package */
export const Article: NextPage<ArticleProps> = (props) => {
  return (
    <article className="prose prose-zinc">
      <h1 className="mb-4 text-4xl font-bold">{props.title}</h1>
      <div className="flex flex-col">
        <time dateTime={props.publishedAt} className="mr-3 text-xs font-bold">
          {dayjs(props.publishedAt).format("投稿日:YYYY年MM月DD日")}
        </time>
        <time dateTime={props.revisedAt} className="text-xs font-bold">
          {props.revisedAt
            ? dayjs(props.revisedAt).format("更新日:YYYY年MM月DD日")
            : null}
        </time>
      </div>
      <p className="my-0 text-xs">{`カテゴリ: ${props.category.name}`}</p>

      <div className="my-10" dangerouslySetInnerHTML={{ __html: props.body }} />
      <Link href="/">
        <a href="replace" className="text-right">
          記事一覧
        </a>
      </Link>
    </article>
  );
};
