import { useState, useEffect } from "react";
import CopyButton from "./CopyButton";
import DeleteButton from "./DeleteButton";

const SearchInput = ({ combinedState }) => {
    const {
        socialList,
        protfolioList,
        blogList,
        otherList,
        codingProfileList,
    } = combinedState;

    const [input, setInput] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        if (input.trim() === "") {
            setFilteredResults([]);
            setShowResults(false);
            return;
        }

        const allLinks = [
            ...socialList,
            ...protfolioList,
            ...blogList,
            ...otherList,
            ...codingProfileList,
        ];

        const results = allLinks.filter(({ name, url }) =>
            [name, url].some((field) =>
                field.toLowerCase().includes(input.toLowerCase())
            )
        );

        setFilteredResults(results);
        setShowResults(true);
    }, [input, socialList, protfolioList, blogList, otherList, codingProfileList]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleClick = (url) => {
        navigator.clipboard.writeText(url); // Optional: open instead
        setShowResults(false);
    };

    return (
        <div className="relative flex items-center max-w-[300px] w-full mx-auto">
            {/* Icon */}
            <svg
                className="absolute left-4 w-4 h-4 fill-[#9e9ea7] pointer-events-none"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
            </svg>

            {/* Input */}
            <input
                type="search"
                value={input}
                onChange={handleChange}
                placeholder="Search "
                className="w-full h-8 pl-10 pr-4 text-[#0d0c22] bg-[#f3f3f4] placeholder-[#9e9ea7]
                rounded-lg border-2 border-transparent 
                focus:outline-none focus:border-green-800 focus:bg-white 
                focus:shadow-[0_0_0_4px_rgba(234,76,137,0.1)] 
                transition duration-300 ease-in-out"
            />

            {/* Results */}
            {showResults && filteredResults.length > 0 && (
    <ul className="absolute top-10 left-0 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-md z-50 max-h-60 overflow-y-auto">
        {filteredResults.map((item, index) => (
            <li
                key={index}
                className="flex justify-between items-start px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
                <div className="flex flex-col">
                    <span className="font-medium text-gray-900 dark:text-gray-100">{item.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{item.url}</span>
                </div>

                <div className="flex items-center gap-2 mt-1">
                    {/* Copy Button */}
                    <CopyButton
                        onClick={() => handleClick(item.url)} />

                    {/* Delete Button */}
                    <DeleteButton onClick={() => handleClick(item)}/>
                </div>
            </li>
        ))}
    </ul>
)}


            {/* No match message */}
            {showResults && filteredResults.length === 0 && (
                <div className="absolute top-10 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-50 px-4 py-2 text-sm text-gray-600">
                    No matching links found.
                </div>
            )}
        </div>
    );
};

export default SearchInput;
