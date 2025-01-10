import React from "react";
import "./widgetssm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newMembers } from "../../data";
export default function Widgetssm() {
  return (
    <div className="widgetssm">
      <span className="widgetssmTitl">New Join Member </span>

      <ul className="widgetssmList">
        {newMembers.map(user=>(

            <li key={user.id} className="widgetssmitem">
          <img src={user.img} alt="" className="widgetsimg" />
          <div className="widgetssmUser">
            <span className="widgetsSmUsername">{user.username}</span>
            <span className="widgetssmTitek"> {user.title} </span>
          </div>
            <button className="widgetssmButton">
              <VisibilityIcon className="VisibilityIconsmIcon" />
            </button>
        </li>
        ))}
       
      </ul>
    </div>
  );
}
