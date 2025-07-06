import { useState, useEffect } from "react";

const CopyButton = ({ onClick }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [copied]);

  const handleClick = () => {
    setCopied(true);
    if (onClick) onClick();
  };

  return (
    <div className="relative p-1 group mt-1" >
      <button onClick={handleClick} className="p-0">
        <div className="relative w-2 h-4 ">
          <Clippy
            className={` dark:text-gray-300 absolute top-0 left-0 text-gray-800 transition-all duration-300 ${
              copied ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
            }`}
          />
          <Check
            className={`absolute top-0 left-0 text-green-500 transition-all duration-300 ${
              copied ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          />
        </div>
      </button>

      <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
        {copied ? "Copied!" : "Copy"}
      </span>
    </div>
  );
};

function Clippy({ className }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.75 4.75H10.25V1.75H5.75V4.75Z" />
      <path d="M3.25 2.88379C2.9511 3.05669 2.75 3.37987 2.75 3.75001V13.25C2.75 13.8023 3.19772 14.25 3.75 14.25H12.25C12.8023 14.25 13.25 13.8023 13.25 13.25V3.75001C13.25 3.37987 13.0489 3.05669 12.75 2.88379" />
    </svg>
  );
}

function Check({ className }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.25 4.75L6 12L2.75 8.75" />
    </svg>
  );
}

export default CopyButton;
