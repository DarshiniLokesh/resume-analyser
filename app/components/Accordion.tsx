import { useState } from "react";
import { cn } from "~/lib/utils";

interface AccordionProps {
  children: React.ReactNode;
}

interface AccordionItemProps {
  id: string;
  children: React.ReactNode;
}

interface AccordionHeaderProps {
  itemId: string;
  children: React.ReactNode;
}

interface AccordionContentProps {
  itemId: string;
  children: React.ReactNode;
}

export const Accordion = ({ children }: AccordionProps) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export const AccordionItem = ({ id, children }: AccordionItemProps) => {
  return <div className="border border-gray-200 rounded-lg">{children}</div>;
};

export const AccordionHeader = ({ itemId, children }: AccordionHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
      data-item-id={itemId}
      data-open={isOpen}
    >
      {children}
    </button>
  );
};

export const AccordionContent = ({ itemId, children }: AccordionContentProps) => {
  return (
    <div className="px-4 pb-4" data-item-id={itemId}>
      {children}
    </div>
  );
}; 