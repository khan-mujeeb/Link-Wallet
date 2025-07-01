import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import CopyButton from "./CopyButton";
import DeleteButton from "./DeleteButton";
import PropTypes from "prop-types";
import gripVerticle from "../assets/img/grip-vertical.svg";

const SortableItem = ({ user, index, handleDeleteClick, handleCopyClick }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: user.name });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 rounded-md mb-1"
        >
            {/* Drag Handle */}
            <div
                className="cursor-move pr-2 flex items-center"
                {...attributes}
                {...listeners}
            >
                <img src={gripVerticle} className="w-4 h-4 text-gray-500 dark:text-gray-300" />
            </div>

            {/* Name */}
            <h2 className="text-[16px] dark:text-gray-300 flex-1">{user.name}</h2>

            {/* Buttons */}
            <div className="flex gap-2 items-center">
                <CopyButton onClick={() => handleCopyClick(index, user.url)} />
                <DeleteButton onClick={() => handleDeleteClick(user)}>delete</DeleteButton>
            </div>
        </div>
    );
};


const List = ({ list, title, setCombinedState, icon }) => {
    const {
        setProtfolioList,
        setSocialList,
        setBlogList,
        setOtherList,
        setCodingProfileList,
    } = setCombinedState;

    const handleCopyClick = (index, url) => {
        navigator.clipboard.writeText(url);
    };

    const handleDeleteClick = (user) => {
        const { type, name } = user;
        const data = JSON.parse(localStorage.getItem(type)) || [];
        const updatedData = data.filter((item) => item.name !== name);
        localStorage.setItem(type, JSON.stringify(updatedData));

        setTimeout(() => {
            switch (type) {
                case "social": setSocialList(updatedData); break;
                case "portfolio": setProtfolioList(updatedData); break;
                case "blog": setBlogList(updatedData); break;
                case "other": setOtherList(updatedData); break;
                case "coding_profile": setCodingProfileList(updatedData); break;
                default: break;
            }
        }, 400);
    };

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            const oldIndex = list.findIndex(item => item.name === active.id);
            const newIndex = list.findIndex(item => item.name === over?.id);
            const newList = arrayMove(list, oldIndex, newIndex);

            const type = list[0]?.type; // Use type from first item
            localStorage.setItem(type, JSON.stringify(newList));

            switch (type) {
                case "social": setSocialList(newList); break;
                case "portfolio": setProtfolioList(newList); break;
                case "blog": setBlogList(newList); break;
                case "other": setOtherList(newList); break;
                case "coding_profile": setCodingProfileList(newList); break;
                default: break;
            }
        }
    };

    return (
        <div className="flex flex-col w-full h-full bg-white dark:bg-gray-800 shadow-sm px-1 overflow-x-hidden">
            <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 flex items-center gap-2 px-2 py-1 shadow-sm rounded-b-lg">
                <img src={icon} className="w-5 h-5 rounded-full dark:bg-gray-300" alt="" />
                <h1 className="p-1 dark:text-gray-300 font-semibold text-lg">{title}</h1>
            </div>

            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={list.map(item => item.name)} strategy={verticalListSortingStrategy}>
                    {list.map((user, index) => (
                        <SortableItem
                            key={user.name}
                            user={user}
                            index={index}
                            handleDeleteClick={handleDeleteClick}
                            handleCopyClick={handleCopyClick}
                        />
                    ))}
                </SortableContext>
            </DndContext>
        </div>
    );
};

List.propTypes = {
    list: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    setCombinedState: PropTypes.object.isRequired,
};

export default List;
