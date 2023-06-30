"use client";

import { createArticle } from "@/app/action";
import { useMutation } from "@tanstack/react-query";
import { FormEventHandler } from "react";
import Input from "../common/input";
import Textarea from "../common/textarea";

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
    <form onSubmit={onSubmit} className="sticky top-28 grid gap-4 w-96">
      <div className="grid gap-1">
        <h1 className="font-bold text-2xl text-yellow-400">
          무슨 일이 있었나요?
        </h1>
        <p className="text-lg text-gray-700">어떤 말이든 편하게 적어보세요.</p>
      </div>
      <div className="grid gap-2">
        <Input
          autoFocus
          placeholder="제목을 입력해주세요."
          name="articleTitle"
          type="text"
        />
        <Input
          placeholder="비밀번호를 입력해주세요."
          name="password"
          type="password"
          helperText="글을 수정하기 위해 필요합니다."
          minLength={1}
        />
        <Textarea placeholder="내용을 입력해주세요." name="articleContent" />
        <button className=" w-full px-4 py-3 rounded-lg text-sm bg-yellow-300">
          전송하기
        </button>
      </div>
    </form>
  );
};

export default Form;
