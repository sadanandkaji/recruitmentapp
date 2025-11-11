"use client";

import React from "react";

type CardVariant = "default" | "outline" | "shadow";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  variant?: CardVariant;
  onClick?: () => void;
}

const variantStyles: Record<CardVariant, string> = {
  default:
    "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700",
  outline:
    "border-2 border-blue-500 text-gray-900 dark:text-gray-100 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/30",
  shadow:
    "bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-800",
};

export function Card({
  title,
  children,
  className = "",
  icon,
  variant = "shadow",
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`group rounded-2xl p-6 cursor-pointer transition-transform hover:-translate-y-1 hover:scale-[1.02] ${variantStyles[variant]} ${className}`}
    >
      <div className="flex items-center gap-3 mb-3">
        {icon && <span className="text-2xl text-blue-600">{icon}</span>}
        <h2 className="text-xl font-semibold flex items-center gap-1">
          {title}
          <span className="opacity-60 group-hover:translate-x-1 transition">
            →
          </span>
        </h2>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400">{children}</div>
    </div>
  );
}
