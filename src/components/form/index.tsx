"use client";

import { createArticle } from "@/app/action";
import { useMutation } from "@tanstack/react-query";
import { FormEventHandler } from "react";

const Form = () => {
  const mutation = useMutation({
    mutationFn: createArticle,
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const title = e.currentTarget.articleTitle.value;
    const content = e.currentTarget.articleContent.value;
    const password = e.currentTarget.password.value;
    const boardId = 1;

    mutation.mutate({ title, content, password, boardId });
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-2 w-80">
      <input
        autoFocus
        placeholder="제목을 입력해주세요."
        className="px-4 py-2 border rounded-lg outline-yellow-400  hover:border-yellow-300"
        name="articleTitle"
        type="text"
      />
      <input
        placeholder="비밀번호를 입력해주세요.(수정 시 필요)"
        className="px-4 py-2 border rounded-lg outline-yellow-400  hover:border-yellow-300"
        name="password"
        type="password"
      />
      <textarea
        className="h-44 p-4 pb-16 border rounded-lg outline-yellow-400 hover:border-yellow-300 resize-none"
        placeholder="내용을 입력해주세요."
        name="articleContent"
      />
      <button className=" w-full px-4 py-3 rounded-lg text-sm bg-yellow-300">
        전송하기
      </button>
    </form>
  );
};

export default Form;
