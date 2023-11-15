import PropTypes from "prop-types";
import React from "react";

const List = ({ list, title, setCombinedState  }) => {
    const [copy, setCopy] = React.useState("copy");
    const {
        setProtfolioList,
        setSocialList,
        setBlogList,
        setOtherList,
        setCodingProfileList,
    } = setCombinedState;


    return (
        <div className="flex flex-col w-full p-3">
            <h1 className="p-1 pl-2 bg-orange-200">{title}</h1>

            {list.map((user, index) => (
                <div className="flex flex-col gap-1" key={index}>
                    <div className="flex justify-between items-center mt-1">
                        <h2>{user.name}</h2>

                        <div className="flex gap-1">
                            <button
                                className="bg-green-500 p-1 rounded-md"
                                onClick={() => {
                                    navigator.clipboard.writeText(user.url);
                                    setCopy("copied");
                                }}
                            >
                                {copy}
                            </button>
                            <button
                                className="bg-red-500 p-1 rounded-md"
                                onClick={() => {
                                    const socialData =
                                        JSON.parse(
                                            localStorage.getItem(user.type)
                                        ) || [];

                                    // Filter out the item to remove
                                    const updatedData = socialData.filter(
                                        (item) => item.name !== user.name
                                    );

                                    // Update the local storage with the modified data
                                    localStorage.setItem(
                                        user.type,
                                        JSON.stringify(updatedData)
                                    );

                                    if(user.type === "social"){
                                        setSocialList(updatedData);
                                    }else if(user.type === "portfolio"){
                                        setProtfolioList(updatedData);
                                    }
                                    else if(user.type === "blog"){
                                        setBlogList(updatedData);
                                    }
                                    else if(user.type === "other"){
                                        setOtherList(updatedData);
                                    }
                                    else if(user.type === "coding_profile"){
                                        setCodingProfileList(updatedData);
                                    }
                                }}
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
