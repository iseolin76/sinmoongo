interface Response<T = string> {
  success: boolean;
  code: number;
  data: T;
}

interface Comment {
  id: number;
  content: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  comment: Comment[];
}

type GetArticleListResponse = Response<Article[]>;

const getArticles = async (): Promise<GetArticleListResponse> => {
  const boardId = 1;
  const res = await fetch(
    `${process.env.SERVER_BASE_URL}/articles/list/${boardId}`
  );
  return res.json();
};

export default getArticles;
