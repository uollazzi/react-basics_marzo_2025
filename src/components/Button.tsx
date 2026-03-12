import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "warning" | "danger";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  const getColorCss = () => {
    switch (color) {
      case "primary":
        return "bg-blue-500";
      case "warning":
        return "bg-amber-500";
      case "danger":
        return "bg-red-500 text-white";
    }
  };

  return (
    <button
      className={
        getColorCss() +
        " p-4 rounded-sm border border-black cursor-pointer hover:opacity-70"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
