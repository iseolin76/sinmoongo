interface Response<T = string> {
  success: boolean;
  code: number;
  data: T;
}

interface Comment {
  id: number;
  content: string;
}

interface Article {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  comment: Comment[];
}

type GetArticleListResponse = Response<Article[]>;

const getArticles = async (): Promise<GetArticleListResponse> => {
  const boardId = 1;
  const res = await fetch(`http://3.35.177.101:8080/articles/list/${boardId}`);
  return res.json();
};

export default getArticles;
