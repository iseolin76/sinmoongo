import Articles from "@/components/articles";
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
    <main className="flex justify-between gap-8">
      <Form />

      <Hydrate state={dehydratedState}>
        <Articles />
      </Hydrate>
    </main>
  );
};

export default Home;
