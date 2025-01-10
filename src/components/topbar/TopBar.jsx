import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import './TopBar.css'

export default function TopBar() {
  return (
    <div className="topbar">
        <div className="topbarWeapper">
            <div className="topleft">
                <span className="logo">Dashboard</span>
            </div>

            <div className="topRight">
                <div className="topbaricon">
                    <NotificationsNoneIcon/>
                    <span className="topbbariconBadge">2</span>
                </div>
                <div className="topbaricon">
                    <LanguageIcon/>
                    <span className="topbbariconBadge">2</span>
         
         
                </div>
                <div className="topbaricon">
                    <SettingsIcon/>
                </div>
                <div>
                    <img src="img/pro.jpg"className="topavatar" alt="" />
                </div>
            </div>
        </div>
    </div>
  );
}
