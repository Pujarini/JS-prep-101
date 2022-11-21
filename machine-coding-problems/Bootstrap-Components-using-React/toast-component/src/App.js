// import { useState } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Tabs from "./components/Tabs/Tabs";
// import Button from "./components/Button/Button";
// import { BUTTON_PROPS, TOAST_PROPERTIES } from "./components/Toast/constants";
// import Toast from "./components/Toast/Toast";

const tabs = [
  {
    id: 1,
    title: "Tab 1",
    content: "content 1",
  },
  {
    id: 2,
    title: "Tab 2",
    content: "content 2",
  },
  {
    id: 3,
    title: "Tab 3",
    content: "content 3",
  },
];

function App() {
  const [currentTab, setCurrentTab] = useState(tabs);

  // useEffect(() => {
  //   setCurrentTab(tabs);
  // }, [tabs]);

  // const [list, setList] = useState([]);
  // const [pos, setPos] = useState();
  // const [delay, setDelay] = useState(0);

  //showing Toast
  // const showToast = (type) => {
  //   const toastProperties = TOAST_PROPERTIES.find(
  //     (toast) => toast.title.toLowerCase() === type
  //   );
  //   setList([...list, toastProperties]);
  // };

  // // for position
  // const selectPos = (e) => {
  //   setPos(e.target.value);
  //   setList([]);
  // };

  // // delete manually on click of x
  // const deleteToast = (id) => {
  //   const index = list.findIndex((e) => e.id === id);
  //   list.splice(index, 1);
  //   setList([...list]);
  // };

  const addNewTab = () => {
    let allTabs = currentTab;
    console.log(allTabs);

    const { length } = allTabs;
    const id = length + 1;
    const found = allTabs.some((el) => el.id === id);
    if (!found)
      allTabs.push({ id, title: `Random ${id}`, content: ` content ${id}` });
    setCurrentTab(allTabs);
  };
  console.log(currentTab);

  return (
    <div className="App">
      {/* <div className="toast-btn">
        {BUTTON_PROPS.map((btn) => {
          return (
            <Button
              className={btn.className}
              label={btn.label}
              key={btn.id}
              type={btn.type}
              handleClick={() => showToast(btn.type)}
            />
          );
        })}
      </div>
      <div className="user-input">
        <input
          type="text"
          name="dismiss"
          placeholder=" Enter Delay time Ex: 3000"
          autoComplete="false"
          onChange={(e) => setDelay(parseInt(e.target.value, 10))}
        />
        <br />
      </div>
      <div className="select">
        <select
          name="pos"
          value={pos}
          onChange={selectPos}
          className="pos-select"
        >
          <option>Select Position</option>
          <option value="top-right">Top Right</option>
          <option value="top-left">Top Left</option>
          <option value="bottom-left">Bottom Left</option>
          <option value="bottom-right">Bottom Right</option>
        </select>
      </div>
      <Toast
        toastList={list}
        position={pos}
        deleteToast={deleteToast}
        autoDeleteDelay={delay}
        autoDelete
      /> */}
      <button onClick={addNewTab}>Add new Tab</button>
      <Tabs tabs={currentTab} />
    </div>
  );
}

export default App;
