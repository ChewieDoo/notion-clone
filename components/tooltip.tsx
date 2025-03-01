"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TooltipProps {
  content?: ReactNode;
}

export const Tooltip = ({ content }: TooltipProps) => {
  return (
    <div className='relative group'>
      <div
        className={cn(
          "absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1",
          "bg-neutral-600 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          "max-w-xs whitespace-normal break-words" // Increased z-index
        )}>
        {content}
      </div>
    </div>
  );
};
