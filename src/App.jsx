import React, { useEffect } from "react";

// import components
import ListItem from "./components/ListItem";
import AddButton from "./components/AddButton";
import AddWindow from "./components/AddWindow";
import SearchInput from "./components/SearchInput";
import light from "./assets/img/sun.png";
import dark from "./assets/img/moon.png";
import logo from "./assets/img/logo.png";
import logoDark from "./assets/img/logo-dark.png";

// App components
function App() {
    // states
    const [addWindowBtn, setAddWindowBtn] = React.useState(false);
    const [protfolioList, setProtfolioList] = React.useState([]);
    const [blogList, setBlogList] = React.useState([]);
    const [otherList, setOtherList] = React.useState([]);
    const [socialList, setSocialList] = React.useState([]);
    const [codingProfileList, setCodingProfileList] = React.useState([]);
    const [lightTheme, setLightTheme] = React.useState(true);

    // setting initial theme(dark/light) from local storage
    useEffect(() => {
        var theme = localStorage.getItem("theme");
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            setLightTheme(false);
        } else {
            document.documentElement.classList.remove("dark");
            setLightTheme(true);
        }
    },[]);

    // creating single object from all the states
    const commbinedState = {
        socialList,
        protfolioList,
        blogList,
        otherList,
        codingProfileList,
    };

    // creating single object for all the state setters
    const setCombinedState = {
        setSocialList,
        setProtfolioList,
        setBlogList,
        setOtherList,
        setCodingProfileList,
    };

    return (
        <div className="relative flex items-center w-[800px] h-[600px] bg-gray-50 dark:bg-gray-700  gap-2 flex-col px-1 py-2 rounded-lg select-none ">
            {/* navbar  */}
            <nav className="w-full px-2  flex h-16  flex-row  items-center justify-between shadow-sm bg-white dark:bg-gray-800 ">
                {/* logo  */}
                {lightTheme ? (
                    <img src={logo} className="  h-20 rounded-lg" alt="logo" />
                ) : (
                    <img
                        src={logoDark}
                        className="  h-20 rounded-lg"
                        alt="logo"
                    />
                )}

                {/* add link, search links and theme toggle */}
                <div className="flex gap-x-6 items-center  h-full px-2 gap-2">
                    <AddButton setActive={setAddWindowBtn} />

                    {/* search bar  */}
                    <SearchInput  combinedState={commbinedState} setCombinedState={setCombinedState}/>

                    {/* dark/light mode toggle */}

                    <button
                        className="w-10 h-5 flex justify-center items-center rounded-lg  transition-all duration-300 ease-in-out"
                        onClick={() => {
                            setLightTheme(!lightTheme);

                            if (lightTheme) {
                                document.documentElement.classList.add("dark");
                                localStorage.setItem("theme", "dark");
                            } else {
                                document.documentElement.classList.remove(
                                    "dark"
                                );
                                localStorage.setItem("theme", "light");
                            }
                        }}
                    >
                        {lightTheme ? (
                            <img
                                src={dark}
                                alt="dark mode"
                                className="w-5 h-5"
                            />
                        ) : (
                            <img
                                src={light}
                                alt="light mode"
                                className="w-5 h-5"
                            />
                        )}
                    </button>
                </div>
            </nav>

            {/* main content  */}
            <ListItem
                combinedState={commbinedState}
                setCombinedState={setCombinedState}
            />

            {/* pop up window for adding new links */}
            {addWindowBtn && (
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-40 rounded-lg shadow-2xl">
                    <AddWindow
                        setCombinedState={setCombinedState}
                        setActive={setAddWindowBtn}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
