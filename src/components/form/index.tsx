"use client";

import { createArticle } from "@/app/action";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../common/button";
import Input from "../common/input";
import Textarea from "../common/textarea";

interface Inputs {
  title: string;
  password: string;
  content: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onChange",
  });

  const mutation = useMutation({
    mutationFn: createArticle,
  });

  const onSubmit: SubmitHandler<Inputs> = ({ title, content, password }) => {
    const boardId = 1;

    mutation.mutate({ title, content, password, boardId });
  };

  console.log(watch(), errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="sticky top-28 grid gap-4 pb-4 bg-white w-full xl:w-96 sm:w-80"
    >
      <div className="grid gap-1">
        <h1 className="font-bold text-2xl text-yellow-400">
          무슨 일이 있었나요?
        </h1>
        <p className="text-lg text-gray-700">어떤 말이든 편하게 적어보세요.</p>
      </div>
      <div className="grid gap-2">
        <input
          autoFocus
          placeholder="제목을 입력해주세요."
          className="px-4 py-3 border rounded-lg text-sm outline-yellow-400 hover:border-yellow-300 placeholder:text-sm"
          type="text"
          {...register("title", {
            minLength: {
              value: 1,
              message: "필수 속성입니다.",
            },
          })}
        />
        <Input
          placeholder="비밀번호를 입력해주세요."
          type="password"
          helperText="글을 수정하기 위해 필요합니다."
          className="px-4 py-3 border rounded-lg text-sm outline-yellow-400 hover:border-yellow-300 placeholder:text-sm"
          minLength={1}
          {...register("password", {
            minLength: {
              value: 1,
              message: "필수 속성입니다.",
            },
          })}
        />
        <Textarea
          placeholder="내용을 입력해주세요."
          {...register("content", {
            minLength: {
              value: 1,
              message: "필수 속성입니다.",
            },
          })}
          className="h-44 p-4 pb-16 border rounded-lg text-sm outline-yellow-400 resize-none hover:border-yellow-300 placeholder:text-sm"
        />
        <Button disabled={!(errors.content || errors.password || errors.title)}>
          전송하기
        </Button>
      </div>
    </form>
  );
};

export default Form;
