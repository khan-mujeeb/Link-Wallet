import PropTypes from "prop-types";
import CopyButton from "./CopyButton";
import DeleteButton from "./DeleteButton";

const List = ({ list, title, setCombinedState, icon }) => {
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
        <div className="flex flex-col w-full overflow-x-hidden  px-1 h-full bg-white dark:bg-gray-800 shadow-sm">
            <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 flex items-center gap-2 px-2 py-1 shadow-sm rounded-b-lg">

                <img
                    src={icon}
                    className="w-5 h-5 rounded-full dark:bg-gray-300"
                    alt=""
                />
                <h1 className="p-1 dark:text-gray-300  font-semibold text-lg">
                    {title}
                </h1>
            </div>

            {list.map((user, index) => (
                <div className="flex flex-col " key={index}>
                    <div className="flex justify-between items-center">
                        <h2 className=" text-[16px] dark:text-gray-300 ">
                            {user.name}
                        </h2>

                        <div className="flex  gap- justify-center items-center">
                            <CopyButton
                                onClick={() => handleCopyClick(index, user.url)}
                            />
                            <DeleteButton
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
