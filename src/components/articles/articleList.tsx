"use client";

import getArticles from "@/utils/api/getArticles";
import { useQuery } from "@tanstack/react-query";
import ArticleItem from "./articleItem";

const ArticleList = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["hydrate-articles"],
    queryFn: getArticles,
  });

  if (isError) return <>error</>;
  if (isLoading) return <>loading</>;

  return (
    <div className="flex-1 w-full sm:w-auto">
      <ul className="grid gap-4 grid-cols-1">
        {data.data.map((article) => (
          <ArticleItem key={article.id} {...article} />
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
