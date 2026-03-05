import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="border border-red-600 rounded-md p-8 overflow-hidden bg-gray-400">
      {children}
      <button className="p-2 bg-amber-600 cursor-pointer" onClick={onClose}>
        Chiudi
      </button>
    </div>
  );
};

export default Alert;
