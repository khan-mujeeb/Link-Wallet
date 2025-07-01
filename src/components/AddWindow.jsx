import React from "react";
import PropTypes from "prop-types";

const AddWindow = ({ setCombinedState, setActive }) => {
    // destructuring the object
    const {
        setProtfolioList,
        setSocialList,
        setBlogList,
        setOtherList,
        setCodingProfileList,
    } = setCombinedState;

    // states
    const [name, setName] = React.useState("");
    const [url, setUrl] = React.useState("");
    const [cat, setType] = React.useState("");

    // function to handle the save button click
    const handleButtonClick = () => {
        // new link obj creation
        const link = { name, url, type: cat };

        // fetching the existing links from local storage
        const existingLinks = JSON.parse(localStorage.getItem(cat) || "[]");

        // concat new and old links
        const updatedLinks = [...existingLinks, link];

        localStorage.setItem(cat, JSON.stringify(updatedLinks));

        // updating the state
        if (cat === "social") {
            setSocialList(updatedLinks);
        } else if (cat === "portfolio") {
            setProtfolioList(updatedLinks);
        } else if (cat === "blog") {
            setBlogList(updatedLinks);
        } else if (cat === "other") {
            setOtherList(updatedLinks);
        } else if (cat === "coding_profile") {
            setCodingProfileList(updatedLinks);
        }

        // clear the form fields after saving
        setName("");
        setUrl("");
        setType("");

        setActive(false);
    };

    return (
        <div className="absolute flex flex-col w-72 justify-center z-50">
            <div className="flex rounded-xl bg-slate-50 dark:bg-gray-800 p-5 ">
                <form action="" className="flex  flex-col gap-1 w-full">

                    {/* type select  */}
                    <select
                        className="rounded-md p-2 flex-auto dark:bg-gray-700 dark:text-gray-300"
                        name="type"
                        value={cat}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">Select a type</option>
                        <option value="social">social</option>
                        <option value="coding_profile">coding profile</option>
                        <option value="blog">Blog</option>
                        <option value="portfolio">Portfolio</option>
                        <option value="other">Other</option>
                    </select>


                    {/* name input  */}
                    <input
                        className="rounded-md p-1 flex-auto dark:bg-gray-700 dark:text-gray-300"
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    {/* url input  */}
                    
                        <input
                            type="text"
                            placeholder="url"
                            className=" w-86 rounded-md p-2 flex-auto dark:bg-gray-700 dark:text-gray-300"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    
                    

                    <button
                        type="button"
                        className="bg-green-400 rounded-md mt-3 p-1 w-full"
                        onClick={handleButtonClick}
                    >
                        Create
                    </button>
                    <button
                        type="button"
                        className="bg-red-400 rounded-md p-1 w-full"
                        onClick={() => setActive(false)}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

AddWindow.propTypes = {
    setActive: PropTypes.func.isRequired,
    setCombinedState: PropTypes.object.isRequired,
};

export default AddWindow;
