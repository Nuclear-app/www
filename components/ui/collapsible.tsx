"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  children,
  defaultOpen = false,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border-b border-black/30 p-10 mb-2 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
      >
        <div className=" text-4xl">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </div>
        <span className="font-semibold text-4xl ml-10">{title}</span>

      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapsible;
