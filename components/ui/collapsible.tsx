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
    <div className={`border-b border-[#272323] p-6 mb-1 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-start p-3 transition-colors duration-200 cursor-pointer"
      >
        <div className="text-2xl">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
        <span className="font-semibold text-md ml-6 text-left">{title}</span>

      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="p-3 text-left">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapsible;
