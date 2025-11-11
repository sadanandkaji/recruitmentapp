"use client";

import React from "react";
import { Loader2 } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ternary";

interface ButtonProps {
  variant?: ButtonVariant;
  content: string | React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition disabled:bg-black disabled:cursor-not-allowed",
  secondary:
    "text-base bg-green-600 hover:bg-green-700 text-white rounded-lg px-6 py-3 transition disabled:bg-green-300 disabled:cursor-not-allowed",
  ternary:
    "text-lg bg-black hover:bg-gray-800 text-white rounded-lg px-8 py-4 transition disabled:bg-gray-500 disabled:cursor-not-allowed",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  content,
  className = "",
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
}) => {
  return (
    <button
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled || loading}
      className={`${buttonStyles[variant]} ${fullWidth ? "w-full" : ""} ${className} flex items-center justify-center gap-2`}
      aria-disabled={disabled || loading}
    >
      {loading ? (
        <Loader2 className="animate-spin w-4 h-4" />
      ) : (
        <span>{content}</span>
      )}

    </button>
  );
};
