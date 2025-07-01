import { useEffect } from "react";
import Link from "../data/Links.js";
import List from "../components/List.jsx";

import profile from "../assets/img/profile.svg";
import coding from "../assets/img/coding.svg";
import blog from "../assets/img/blog.svg";
import portfolio from "../assets/img/portfolio.svg";
import other from "../assets/img/tag.svg";

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
        <div className=" grid grid-cols-3 gap-1 w-full overflow-hidden max-h-[600px] rounded-lg">
            {/* Social */}

            <List
                list={socialList}
                setCombinedState={setCombinedState}
                title="Social"
                icon={profile}
            />

            {/* Coding Profile */}

            <List
                list={codingProfileList}
                setCombinedState={setCombinedState}
                title="Coding Profile"
                icon={coding}
            />

            {/* Blog */}
            <div className="h-full overflow-y-auto ">
                <List
                list={blogList}
                setCombinedState={setCombinedState}
                title="Blog"
                icon={blog}
            />
            </div>

            {/* Portfolio */}

            <List
                list={protfolioList}
                setCombinedState={setCombinedState}
                title="Portfolio"
                icon={portfolio}
            />

            {/* Other - spanning both columns if needed */}
            <div className="col-span-1 md:col-span-2 h-full overflow-y-auto">
                
            <List
                list={otherList}
                setCombinedState={setCombinedState}
                title="Other"
                icon={other}
            />
            </div>

        </div>
    );
};

ListItem.propTypes = {
    combinedState: PropTypes.object.isRequired,
    setCombinedState: PropTypes.object.isRequired,
};

export default ListItem;
