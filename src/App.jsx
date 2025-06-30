
import React from "react";

// import components 
import ListItem from "./components/ListItem";
import AddButton from "./components/AddButton";
import AddWindow from "./components/AddWindow";

// App components
function App() {

    // states
    const [addWindowBtn, setAddWindowBtn] = React.useState(false);
    const [protfolioList, setProtfolioList] = React.useState([]);
    const [blogList, setBlogList] = React.useState([]);
    const [otherList, setOtherList] = React.useState([]);
    const [socialList, setSocialList] = React.useState([]);
    const [codingProfileList, setCodingProfileList] = React.useState([]);

    // creating single object from all the states
    const commbinedState = {
        socialList,
        protfolioList,
        blogList,
        otherList,
        codingProfileList,
    };

    // creating single object for all the state setters
    const setCombinedState = {
        setSocialList,
        setProtfolioList,
        setBlogList,
        setOtherList,
        setCodingProfileList,
    };



    return (
        <div className="flex w-[500px] gap-2 flex-col  p-1 h-[710px] justify-start">
            <h1 className="font-bold align-top text-xl text-center rounded-lg p-2 bg-slate-700 text-slate-50">
                Links Wallet
            </h1>

            {!addWindowBtn ? (

                // links list 
                <ListItem
                    combinedState={commbinedState}
                    setCombinedState={setCombinedState}
                />
            ) : 
            // add new link window
            (
                <AddWindow
                    setCombinedState={setCombinedState}
                    setActive={setAddWindowBtn}
                />
            )}

            {!addWindowBtn ? <AddButton setActive={setAddWindowBtn} /> : null}
        </div>
    );
}

export default App;
