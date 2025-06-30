import React from "react";
import PropTypes from "prop-types";


const AddWindow = ({setCombinedState, setActive}) => {

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

        setActive(false)
    };

    return (
        <div className="h-full bg-slate-700 flex flex-col justify-center z-50">
        <div className="flex rounded-lg bg-slate-500 p-2 ">
            <form action="" className="flex  flex-col gap-1 w-full">


                <div className="flex flex-row gap-2 w-full">
                <input className="rounded-md p-1 flex-auto"
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <select className="rounded-md p-2 flex-auto"
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
                </div>

                

                <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="url"
                    className=" w-86 rounded-md p-2 flex-auto"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />

                
                
                </div>

                <button
                    type="button"
                    className="bg-green-400 rounded-md p-1 w-full"
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
}

export default AddWindow;
