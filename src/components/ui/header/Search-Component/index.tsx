import React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  leftIcon?: React.ReactNode;
  value: string;
  placeholder?: string;
  className?: string;
  wrapperClassName?: string;
  onChange: (value: string) => void;
}

const SearchBarComponent: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search",
  className,
  wrapperClassName,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex items-center border border-gray-400 rounded-full px-4 py-2",
        "focus-within:ring-1 focus-within:ring-primary bg-transparent",
        wrapperClassName
      )}
    >
      <Search size={18} className="text-gray-500 mr-2" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "bg-transparent border-none outline-none flex-1 text-sm text-gray-700 placeholder-gray-400",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default SearchBarComponent;
