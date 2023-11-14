// import copy from "../src/assets/img/copy.svg";
// import edit from "../src/assets/img/edit.svg";
import React from "react";
import ListItem from "./components/ListItem";
import AddButton from "./components/AddButton";
import AddWindow from "./components/AddWindow";
function App() {
    const [addWindowBtn, setAddWindowBtn] = React.useState(false);
    console.log(addWindowBtn);
    return (
        <div className="flex items-center gap-2 flex-col">
            
            <ListItem />
            {addWindowBtn? <AddWindow /> : null}
            <AddButton setActive={setAddWindowBtn}/>

        </div>
    );
}

export default App;
