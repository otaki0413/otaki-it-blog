import Link from "next/link";
import { FC } from "react";

export const HeaderMenu: FC = () => {
  return (
    <div>
      <header className="border-b border-gray-300 py-8">
        <Link href="/">
          <a className="text-5xl font-bold">おたきのITブログ</a>
        </Link>
      </header>
    </div>
  );
};
