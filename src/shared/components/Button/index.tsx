import React from "react";

interface IButtonProps {
  title: string;
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};
