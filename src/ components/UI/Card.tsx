// src/components/UI/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  image?: string;
}

export default function Card({ title, children, image }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
      {image && (
        <img
          src={image}
          alt={title || "Card image"}
          className="w-full h-56 object-cover"
          loading="lazy"
        />
      )}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="text-gray-600 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
