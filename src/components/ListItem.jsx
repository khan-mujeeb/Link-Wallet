import { useEffect } from "react";
import Link from "../data/Links.js";
import List from "../components/List.jsx";
import PropTypes from "prop-types";

const ListItem = ({ combinedState, setCombinedState }) => {
    const {
        setProtfolioList,
        setSocialList,
        setBlogList,
        setOtherList,
        setCodingProfileList,
    } = setCombinedState;

    const {
        socialList,
        protfolioList,
        blogList,
        otherList,
        codingProfileList,
    } = combinedState;

    const updateListsFromLocalStorage = () => {
        const portfolioData = localStorage.getItem("portfolio");
        const socialData = localStorage.getItem("social");
        const blogData = localStorage.getItem("blog");
        const otherData = localStorage.getItem("other");
        const cpData = localStorage.getItem("coding_profile");

        const portfolioInstances = portfolioData
            ? JSON.parse(portfolioData).map(Link.fromObject)
            : [];
        const socialInstances = socialData
            ? JSON.parse(socialData).map(Link.fromObject)
            : [];
        const blogInstances = blogData
            ? JSON.parse(blogData).map(Link.fromObject)
            : [];
        const otherInstances = otherData
            ? JSON.parse(otherData).map(Link.fromObject)
            : [];
        const cpInstances = cpData
            ? JSON.parse(cpData).map(Link.fromObject)
            : [];

        setProtfolioList(portfolioInstances);
        setSocialList(socialInstances);
        setBlogList(blogInstances);
        setOtherList(otherInstances);
        setCodingProfileList(cpInstances);
    };

    useEffect(() => {
        updateListsFromLocalStorage();
    }, []);

    return (
        <div className="flex gap-2 items-center w-[400px
        ] bg-blue-50 rounded-lg" >
            <div className="flex flex-col w-full p-3">
                <div className="flex overflow-y-auto">
                    
                    {/* social */}
                    <List list={socialList} setCombinedState={setCombinedState} title="Social" />

                    {/* social */}
                    <List list={codingProfileList} setCombinedState={setCombinedState} title="Coding Profile" />
                </div>
                <div className="flex">
                    {/* social */}
                    <List list={blogList} setCombinedState={setCombinedState} title="Blog" />

                    {/* social */}
                    <List list={protfolioList} setCombinedState={setCombinedState} title="Protfolio" />
                </div>
                <div className="flex overflow-y-auto">
                    {/* social */}
                    <List list={otherList} setCombinedState={setCombinedState} title="Other" />
                </div>
            </div>
        </div>
    );
};

ListItem.propTypes = {
    combinedState: PropTypes.object.isRequired,
    setCombinedState: PropTypes.object.isRequired,
};

export default ListItem;
