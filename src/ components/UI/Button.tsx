// src/components/UI/Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  className?: string;
}

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "px-5 py-2 rounded-lg font-medium transition duration-300 focus:outline-none";

  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700 shadow-md",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700 shadow-md",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={${base} ${variants[variant]} ${className}}
    >
      {children}
    </button>
  );
}
