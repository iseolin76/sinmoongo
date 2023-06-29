import Articles from "@/components/articles";
import Form from "@/components/form";

const Home = () => {
  return (
    <main className="flex justify-between gap-5">
      <Form />
      <Articles />
    </main>
  );
};

export default Home;
