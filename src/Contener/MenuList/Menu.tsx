import { useState } from "react";

import Data from "../../Data/Data";

import "./Menu.css";
import Admin from "../Admin/Admin";

function Menu(props) {
  const Group = props.Group;

  const [SeletGroup, setSeletGroup] = useState("");

  props.SeletGroup(SeletGroup);

  return (
    <div className="Menu">
      <h4 style={{ textAlign: "left", paddingLeft: "0.8rem" }}>Groups</h4>
      <br />
      <ul>
        {Group.map((item) => {
          return (
            <li
              key={item._id}
              onClick={() => setSeletGroup(item)}
              style={{ fontSize: "18px" }}
            >
              {item}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              {Data.filter((e) => e.Group === item).length}
            </li>
          );
        })}
        <li onClick={() => setSeletGroup()}>
          All &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{Data.length}
        </li>
        <br /> <br />
        <hr />
      </ul>
      <br />
      <Admin />
    </div>
  );
}
export default Menu;
