"use client";

import getArticles from "@/utils/api/getArticles";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

const Articles = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["hydrate-articles"],
    queryFn: getArticles,
  });

  if (isError) return <>error</>;
  if (isLoading) return <>loading</>;

  return (
    <div className="flex-1">
      <ul className="grid gap-4 grid-cols-1">
        {data.data.map((article) => (
          <li
            key={article.id}
            className="grid gap-2 px-4 py-2 border rounded-lg border-yellow-300"
          >
            <div>
              <h2 className="font-bold">{article.title}</h2>
              <p>{article.content}</p>
            </div>
            <time className=" inline-block w-full text-right text-gray-400 font-normal text-sm">
              {dayjs(article.createdAt).format("YYYY년 MM월 DD일 HH시 MM분")}
            </time>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
