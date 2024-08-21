import { DetailedHTMLProps, InputHTMLAttributes } from "react";

// This type extends input element
type CellProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

function Cell({ value, ...props }: CellProps) {
  return (
    <input
      type="text"
      className="text-center border border-gray-400 cell focus:outline-none focus:border-2 focus:border-blue-600"
      style={{ fontSize: 20, width: 40, height: 40 }}
      value={value}
      onChange={props.onChange}
      maxLength={1}
    />
  );
}

export default Cell;
