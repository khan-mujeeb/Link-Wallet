import React from "react";
import PropTypes from "prop-types";


const AddWindow = ({setCombinedState, setActive}) => {

    const {
        setProtfolioList,
        setSocialList,
        setBlogList,
        setOtherList,
        setCodingProfileList,
    } = setCombinedState;
    const [name, setName] = React.useState("");
    const [url, setUrl] = React.useState("");
    const [cat, setType] = React.useState("");

    const handleButtonClick = () => {
        const link = { name, url, type: cat };
        const existingLinks = JSON.parse(localStorage.getItem(cat) || "[]");
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
        <div className="flex rounded-lg bg-slate-500 p-2">
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
                
            </form>
        </div>
    );
};



AddWindow.propTypes = {
    setActive: PropTypes.func.isRequired,
    setCombinedState: PropTypes.object.isRequired,
}

export default AddWindow;
