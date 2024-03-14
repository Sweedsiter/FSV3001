import { useState } from "react";

import Data from "../../Data/Data";

import "./Menu.css";
import Admin from "../Admin/Admin";
import Deshboard from "../../Component/Deshoard/Deshboard";

function Menu(props) {
  const Group = props.Group;
  const Status = props.Status;

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
              style={{ fontSize: "18px", cursor: "pointer" }}
            >
              {item}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              {Data.filter((e) => e.Group === item).length}
            </li>
          );
        })}
        <li
          onClick={() => setSeletGroup()}
          style={{ fontSize: "18px", cursor: "pointer" }}
        >
          All &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{Data.length}
        </li>
        <br />
        <input
          type="text"
          placeholder="Search..."
          style={{ fontSize: "14px", textAlign: "left", padding: "0.2rem" }}
          onChange={(e) => props.SearchName(e.target.value)}
        />
        <br /> <br />
        <hr />
      </ul>
      <br />
      <Admin ADlogin={props.ADlogin} />
      <br />
      <hr />
      <br />
      {Status && <Deshboard />}
      <br /> <hr />
    </div>
  );
}
export default Menu;
