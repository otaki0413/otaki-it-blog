import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { client } from "src/libs/client";

export type Blog = {
  title: string;
  body: string;
};

type Props = MicroCMSListResponse<Blog>;

// ブログ一覧画面
const Home: NextPage<Props> = (props) => {
  return (
    <div>
      <p>{`記事の総数: ${props.totalCount}件`}</p>
      <ul>
        {props.contents.map((content) => {
          return (
            <li key={content.id}>
              <Link href={`/blog/${content.id}`}>{content.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList({ endpoint: "blog" });
  return {
    props: data,
  };
};

export default Home;
