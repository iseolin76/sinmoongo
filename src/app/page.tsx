import ArticleList from "@/components/articles/articleList";
import Form from "@/components/form";
import getArticles from "@/utils/api/getArticles";
import getQueryClient from "@/utils/getQueryClient";
import { dehydrate } from "@tanstack/query-core";
import { Hydrate } from "@tanstack/react-query";

const Home = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-articles"], getArticles);
  const dehydratedState = dehydrate(queryClient);
  return (
    <main className="flex justify-between gap-8 items-start flex-col sm:flex-row">
      <Form />
      <Hydrate state={dehydratedState}>
        <ArticleList />
      </Hydrate>
    </main>
  );
};

export default Home;
