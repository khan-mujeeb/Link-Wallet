import React from "react";
import PropTypes from "prop-types";


const AddWindow = () => {
    const [name, setName] = React.useState("");
    const [url, setUrl] = React.useState("");
    const [cat, setType] = React.useState("");

    const handleButtonClick = () => {
        const link = { name, url, type: cat };
        const existingLinks = JSON.parse(localStorage.getItem(cat) || "[]");
        const updatedLinks = [...existingLinks, link];

        localStorage.setItem(cat, JSON.stringify(updatedLinks));

        // clear the form fields after saving
        setName("");
        setUrl("");
        setType("");

        
    };

    return (
        <div className="flex  bg-slate-500 p-2 w-96">
            <form action="" className="flex  flex-col gap-1 w-full">


                <div className="flex flex-row justify-between w-full">
                <input
                    type="text"
                    placeholder="name"
                    className="w-28"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <select
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

                

                <div className="flex justify-between">
                <input
                    type="text"
                    placeholder="url"
                    className=" w-86"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />

                
                <button
                    type="button"
                    className="bg-green-200 rounded-sm p-1 w-20"
                    onClick={handleButtonClick}
                >
                    Create
                </button>
                </div>
                
            </form>
        </div>
    );
};



AddWindow.propTypes = {
    setActive: PropTypes.func.isRequired,
}

export default AddWindow;
