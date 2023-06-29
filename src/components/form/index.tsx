const Form = () => {
  return (
    <form className="grid gap-2 w-80">
      <input
        autoFocus
        placeholder="제목을 입력해주세요."
        className="px-4 py-2 border rounded-lg outline-yellow-400  hover:border-yellow-300"
      />
      <input
        placeholder="비밀번호를 입력해주세요.(수정 시 필요)"
        className="px-4 py-2 border rounded-lg outline-yellow-400  hover:border-yellow-300"
      />
      <textarea
        className="h-44 p-4 pb-16 border rounded-lg outline-yellow-400 hover:border-yellow-300 resize-none"
        placeholder="내용을 입력해주세요."
      />
      <button className=" w-full px-4 py-3 rounded-lg text-sm bg-yellow-300">
        전송하기
      </button>
    </form>
  );
};

export default Form;
