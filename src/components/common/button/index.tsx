import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = ({ ...defaultProps }: ButtonProps) => {
  return (
    <button
      {...defaultProps}
      className=" w-full px-4 py-3 rounded-lg text-sm bg-yellow-300 disabled:bg-gray-300 disabled:text-white"
    >
      전송하기
    </button>
  );
};

export default Button;
