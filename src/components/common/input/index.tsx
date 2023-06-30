import {
  ChangeEventHandler,
  DetailedHTMLProps,
  FocusEventHandler,
  InputHTMLAttributes,
  useState,
} from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  helperText?: string;
}

const Input = ({ helperText, ...defaultProps }: InputProps) => {
  const [isShowHelperText, setIsShowHelperText] = useState(false);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!defaultProps.minLength) return;
    if (e.currentTarget.value.length < defaultProps.minLength) {
      setIsShowHelperText(true);
      return;
    }
    setIsShowHelperText(false);
  };

  const onFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    if (!defaultProps.minLength) return;
    if (e.currentTarget.value.length > defaultProps.minLength) return;
    setIsShowHelperText(true);
  };

  return (
    <div className="grid gap-1 ">
      <input
        onFocus={onFocus}
        onChange={onChange}
        className="px-4 py-2 border rounded-lg text-sm outline-yellow-400 hover:border-yellow-300 placeholder:text-sm"
        {...defaultProps}
      />
      {helperText && isShowHelperText && (
        <p className="pl-1 text-xs text-red-700 helper-text">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
