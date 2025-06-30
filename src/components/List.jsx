import PropTypes from "prop-types";
import React, { useEffect } from "react";
import CopyButton from "./CopyButton";
import DeleteButton from "./DeleteButton";

const List = ({ list, title, setCombinedState }) => {    
    

    // destructuring the object    
    const {
        setProtfolioList,
        setSocialList,
        setBlogList,
        setOtherList,
        setCodingProfileList,
    } = setCombinedState;

    // copy link to clipboard
    const handleCopyClick = (index, url) => {
        console.log(`Copying URL: ${url} at index: ${index}`);
        navigator.clipboard.writeText(url);
        
    };


    // function to handle the delete button click
    const handleDeleteClick = (user) => {
        const { type, name } = user;

        const data = JSON.parse(localStorage.getItem(type)) || [];
        const updatedData = data.filter((item) => item.name !== name);

        localStorage.setItem(type, JSON.stringify(updatedData));

        // wait for animation to complete before updating the state
        setTimeout(() => {
            switch (type) {
            case "social":
                setSocialList(updatedData);
                break;
            case "portfolio":
                setProtfolioList(updatedData);
                break;
            case "blog":
                setBlogList(updatedData);
                break;
            case "other":
                setOtherList(updatedData);
                break;
            case "coding_profile":
                setCodingProfileList(updatedData);
                break;
            default:
                break;
        }
        }, 400);

        
    };

    return (
        <div className="flex flex-col w-full p-3 overflow-y-auto h-48">
            <h1 className="p-1 pl-2 bg-orange-200 font-semibold text-lg">{title}</h1>

            {list.map((user, index) => (
                <div className="flex flex-col gap-1" key={index}>
                    <div className="flex justify-between items-center mt-1">
                        <h2 className="font-semibold text-[16px]">{user.name}</h2>

                        <div className="flex gap-1">
                            <CopyButton
                                className="text-[16px] p-2 font-semibold text-slate-900 rounded-md"
                                onClick={() => handleCopyClick(index, user.url)}
                            />
                            <DeleteButton
                                className=" p-1 rounded-md text-[16px] font-semibold text-slate-900"
                                onClick={() => handleDeleteClick(user)}
                            >
                                delete
                            </DeleteButton>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

List.propTypes = {
    list: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    setCombinedState: PropTypes.object.isRequired,
};

export default List;
