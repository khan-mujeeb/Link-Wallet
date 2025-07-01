import plus from "../assets/img/plus.svg";
import PropTypes from "prop-types";

const AddButton = ({ setActive }) => {

    // function to set the active state to true for add window
    function onClickHandler() {
        setActive(true);
    }

    return (
        <div>
            <div
                onClick={onClickHandler}
                className="p-2 text-gray-200 font-semibold flex justify-center items-center bg-green-800 text-sm rounded-lg hover:bg-green-700 cursor-pointer transition-all duration-300 ease-in-out"
            >
                Add Link
            </div>
        </div>
    );
};

AddButton.propTypes = {
    setActive: PropTypes.func.isRequired,
};

export default AddButton;
