import PropTypes from "prop-types";
import React from "react";

const List = ({list, title}) => {
    const [copy, setCopy] = React.useState("copy");

    return (
        <div className="flex flex-col w-full p-3">

                <h1 className="p-1 bg-orange-200">{title}</h1>

                {list.map((user, index) => (
                    <div className="flex flex-col gap-1" key={index}>
                        <div className="flex justify-between items-center">
                            <h2>{user.name}</h2>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(user.url);
                                    setCopy("copied");
                                }}
                            >
                                {copy}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
    );
}


List.propTypes = {
    list: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};


export default List;
