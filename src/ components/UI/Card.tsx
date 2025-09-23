// src/components/UI/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  image?: string;
}

export default function Card({ title, children, image }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
        />
      )}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="text-gray-600 text-sm">{children}</div>
      </div>
    </div>
  );
}
