import { useEffect } from "react";
import Link from "../data/Links.js";
import React from "react";
import List from "../components/List.jsx";

const ListItem = () => {
    const [protfolioList, setProtfolioList] = React.useState([]);
    const [blogList, setBlogList] = React.useState([]);
    const [otherList, setOtherList] = React.useState([]);
    const [socialList, setSocialList] = React.useState([]);
    const [codingProfileList, setCodingProfileList] = React.useState([]);

    const updateListsFromLocalStorage = () => {
        const portfolioData = localStorage.getItem("portfolio");
        const socialData = localStorage.getItem("social");
        const blogData = localStorage.getItem("blog");
        const otherData = localStorage.getItem("other");
        const cpData = localStorage.getItem("coding_profile");

        const portfolioInstances = portfolioData ? JSON.parse(portfolioData).map(Link.fromObject) : [];
        const socialInstances = socialData ? JSON.parse(socialData).map(Link.fromObject) : [];
        const blogInstances = blogData ? JSON.parse(blogData).map(Link.fromObject) : [];
        const otherInstances = otherData ? JSON.parse(otherData).map(Link.fromObject) : [];
        const cpInstances = cpData ? JSON.parse(cpData).map(Link.fromObject) : [];

        setProtfolioList(portfolioInstances);
        setSocialList(socialInstances);
        setBlogList(blogInstances);
        setOtherList(otherInstances);
        setCodingProfileList(cpInstances);
    }

    useEffect(() => {
        
        updateListsFromLocalStorage();

    }, []);

    return (
        <div className="flex gap-2 items-center w-96 bg-blue-50">
            <div className="flex flex-col w-full p-3">
                <div className="flex">
                    {/* social */}
                    <List list={socialList} title="Social" />

                    {/* social */}
                    <List list={codingProfileList} title="Coding Profile" />
                </div>
                <div className="flex">
                    {/* social */}
                    <List list={blogList} title="Blog" />

                    {/* social */}
                    <List list={protfolioList} title="Protfolio" />
                </div>
                <div className="flex">
                    {/* social */}
                    <List list={otherList} title="Other" />
                </div>
            </div>
        </div>
    );
};

export default ListItem;
