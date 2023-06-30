import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

const Textarea = ({ ...defaultProps }: TextareaProps) => {
  return (
    <textarea
      className="h-44 p-4 pb-16 border rounded-lg text-sm outline-yellow-400 resize-none hover:border-yellow-300 placeholder:text-sm"
      {...defaultProps}
    />
  );
};

export default Textarea;
