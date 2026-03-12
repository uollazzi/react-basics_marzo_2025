import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onStatusChange: (like: boolean) => void;
}

const Like = ({ onStatusChange }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onStatusChange(!status);
  };

  if (status) return <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />;

  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;
