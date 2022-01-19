import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Button from "./Button";
import Timer from "./Timer";
import IPAddressContainer from "./IPAddressContainer";
import IPAddressComponent from "./IPAddressComponent";
import Screen from "./Screen";
import Form from "./Form";
import List from "./List";
import shortid from "shortid";
import IPAddress from "./IPAddress";
import Text from "./Text";
import NewForm from "./NewForm";
import Test from "./Test";

function onClickButton() {
  console.log("click!");
}

function onRenderIP() {
  return <p>I AM RENDERING</p>;
}

const data1 = "";

const data2 = ["1", "2", "3", "4", "1", "2", "3", "4", "1", "2", "3", "4"];

const data3 = [];
for (let i = 0; i < 10; i++) {
  data3.push({
    id: shortid(),
    text: `Item ${i}`,
  });
}

ReactDOM.render(
  <div>
    {/* <Text  /> */}
    {/* <App title="Head" subtitle2="Body">
      <App title="Child Head" subtitle2="Child Body"  border="Red" />
    </App> */}
    {/* <Button dontClick={onClickButton} /> */}
    {/* <Form /> */}
    {/* <Screen buttonName = 'Click'/> */}
    {/* <Timer /> */}
    {/* <IPAddress /> */}
    <IPAddressContainer />
    {/* <IPAddressComponent /> */}
    {/* <List data = {data2}/> */}
    {/* <List data={data3} /> */}
  </div>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <div>
//     <Timer/>
//   </div>,
//   document.getElementById('root')
// );
