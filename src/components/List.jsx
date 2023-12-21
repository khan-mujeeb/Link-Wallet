import PropTypes from "prop-types";
import React, { useEffect } from "react";

const List = ({ list, title, setCombinedState }) => {
    const [copies, setCopies] = React.useState(new Array(list.length));
    
    useEffect(() => {
        setCopies(new Array(list.length).fill("copy"));
    }, [list]);

    console.log(copies);
    const {
        setProtfolioList,
        setSocialList,
        setBlogList,
        setOtherList,
        setCodingProfileList,
    } = setCombinedState;

    const handleCopyClick = (index, url) => {
        navigator.clipboard.writeText(url);
        const newCopies = [...copies];
        newCopies[index] = "copied";
        setCopies(newCopies);

        setTimeout(() => {
            newCopies[index] = "copy";
            setCopies(newCopies);
            console.log(newCopies[index])   ;
        }, 800);
    };

    const handleDeleteClick = (user) => {
        const { type, name } = user;

        const data = JSON.parse(localStorage.getItem(type)) || [];
        const updatedData = data.filter((item) => item.name !== name);

        localStorage.setItem(type, JSON.stringify(updatedData));

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
    };

    return (
        <div className="flex flex-col w-full p-3 overflow-y-auto h-48">
            <h1 className="p-1 pl-2 bg-orange-200 font-semibold text-lg">{title}</h1>

            {list.map((user, index) => (
                <div className="flex flex-col gap-1" key={index}>
                    <div className="flex justify-between items-center mt-1">
                        <h2 className="font-semibold text-[16px]">{user.name}</h2>

                        <div className="flex gap-1">
                            <button
                                className="bg-green-500 text-[16px] p-2 font-semibold text-slate-900 rounded-md"
                                onClick={() => handleCopyClick(index, user.url)}
                            >
                                {copies[index]}
                            </button>
                            <button
                                className="bg-red-500 p-1 rounded-md text-[16px] font-semibold text-slate-900"
                                onClick={() => handleDeleteClick(user)}
                            >
                                delete
                            </button>
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
