const SearchInput = () => {
    return (
        <div className="relative flex items-center max-w-[180px]">
            <svg
                className="absolute left-4 w-4 h-4 fill-[#9e9ea7] pointer-events-none"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
            </svg>

            <input
                type="search"
                placeholder="Search"
                className="w-full h-8 pl-10 pr-4 text-[#0d0c22] bg-[#f3f3f4] placeholder-[#9e9ea7]
                   rounded-lg border-2 border-transparent 
                   focus:outline-none focus:border-pink-400 focus:bg-white 
                   focus:shadow-[0_0_0_4px_rgba(234,76,137,0.1)] 
                   transition duration-300 ease-in-out"
            />
        </div>
    );
};

export default SearchInput;
