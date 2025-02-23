"use client";

import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export const Tooltip = ({ text, children }: TooltipProps) => {
  return (
    <div className='relative group'>
      {children}
      <div
        className={cn(
          "transform -translate-y-1/2 group-hover:opacity-100 transition-opacity duration-300 z-50",
          "bg-neutral-600 text-white text-xs rounded opacity-0",
          "absolute left-full top-1/2 ml-2 px-2 py-1",
          "maw-w-xs",
          "whitespace-normal"
        )}>
        {text}
      </div>
    </div>
  );
};
