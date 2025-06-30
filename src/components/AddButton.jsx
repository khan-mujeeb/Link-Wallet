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
                className="flex justify-center items-center bg-slate-700 w-full p-1 rounded-md"
            >
                <img className="w-8 h-8" src={plus} />
            </div>
        </div>
    );
};

AddButton.propTypes = {
    setActive: PropTypes.func.isRequired,
};

export default AddButton;
