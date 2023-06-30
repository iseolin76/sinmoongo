import { Article } from "@/utils/api/getArticles";
import dayjs from "dayjs";

const ArticleItem = ({ id, title, content, createdAt }: Article) => {
  return (
    <li className="grid gap-2 px-4 py-2 border rounded-lg border-yellow-300">
      <div>
        <h2 className="font-bold">{title}</h2>
        <p>{content}</p>
      </div>
      <time className=" inline-block w-full text-right text-gray-400 font-normal text-sm">
        {dayjs(createdAt).format("YYYY년 MM월 DD일 HH시 MM분")}
      </time>
    </li>
  );
};

export default ArticleItem;
