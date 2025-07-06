import { useState, useEffect } from "react";

const DeleteButton = ({ onClick }) => {
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (deleted) setDeleted(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [deleted]);

  const handleClick = () => {
    setDeleted(true);
    if (onClick) onClick();
  };

  return (
    <div className="relative p-1 group">
      <button onClick={handleClick} className="p-2">
        <div className="relative flex justify-center items-center w-2 h-4">
          <TrashIcon
            className={` dark:text-gray-300 absolute top-0 left-0  transition-all duration-300 ${
              deleted ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
            }`}
          />
          <Check
            className={`absolute top-0 left-0 text-red-500 transition-all duration-300 ${
              deleted ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          />
        </div>
      </button>

      <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
        {deleted ? "Deleted!" : "Delete"}
      </span>
    </div>
  );
};

function TrashIcon({ className }) {
  return (
    <svg
      className={className}
      width="16"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-.867 12.142A2 2 0 0 1 16.138 20H7.862a2 2 0 0 1-1.995-1.858L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
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

export default DeleteButton;
