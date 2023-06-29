"use server";

export interface CreateArticlesRequest {
  title: string;
  content: string;
  password: string;
  boardId: number;
}

export const createArticle = async (data: CreateArticlesRequest) => {
  console.log(JSON.stringify(data));
  return await fetch(`${process.env.SERVER_BASE_URL}/articles/create`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
