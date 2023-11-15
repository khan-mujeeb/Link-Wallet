// import copy from "../src/assets/img/copy.svg";
// import edit from "../src/assets/img/edit.svg";
import React from "react";
import ListItem from "./components/ListItem";
import AddButton from "./components/AddButton";
import AddWindow from "./components/AddWindow";
function App() {
    const [addWindowBtn, setAddWindowBtn] = React.useState(false);
    const [protfolioList, setProtfolioList] = React.useState([]);
    const [blogList, setBlogList] = React.useState([]);
    const [otherList, setOtherList] = React.useState([]);
    const [socialList, setSocialList] = React.useState([]);
    const [codingProfileList, setCodingProfileList] = React.useState([]);

    const commbinedState = {socialList, protfolioList, blogList, otherList, codingProfileList}
    const setCombinedState = {setSocialList, setProtfolioList, setBlogList, setOtherList, setCodingProfileList}
    return (
        <div className="flex w-[500px] gap-2 flex-col h-min p-1">
            <h1 className=" font-bold text-xl text-center rounded-lg p-2 bg-slate-700 text-slate-50">Links Wallet</h1>
            <ListItem combinedState={commbinedState} setCombinedState={setCombinedState}/>
            {addWindowBtn? <AddWindow setCombinedState={setCombinedState} setActive={setAddWindowBtn}/> : null}
            {!addWindowBtn? <AddButton setActive={setAddWindowBtn}/>: null}

        </div>
    );
}

export default App;
