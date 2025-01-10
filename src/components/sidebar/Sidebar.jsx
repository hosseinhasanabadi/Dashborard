import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Link } from "react-router";
import "./Sidebar.css";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import EmailIcon from '@mui/icons-material/Email';
import ReportIcon from '@mui/icons-material/Report';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
export default function Sidebar() {
  return (
    <div className="sidbar">
      <div className="sidebarWeapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Dashboard</h3>
          <ul className="sidebarList">
            <Link to='/'className="link" >
            <li className=" sidebaritem active">
              <HomeIcon className="sidbaricon " />
              Home
            </li>
            </Link>
            <li className=" sidebaritem">
              <TrendingUpIcon className="sidbaricon" />
              Analytics
            </li>
          
            <li className=" sidebaritem">
              <TrendingUpIcon className="sidbaricon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Quick Menu</h3>
          <ul className="sidebarList">
          <Link to='/users' className="link">
            <li className=" sidebaritem ">
              <PermIdentityIcon className="sidbaricon " />
              Users
            </li>
          </Link>
          <Link to={'/newUser ' } className="link">
            <li className=" sidebaritem">
              <PermIdentityIcon className="sidbaricon" />
              NewUsers
            </li>
          </Link>
          <Link to='/Products' className="link" >
            <li className=" sidebaritem">
              <StorefrontIcon className="sidbaricon" />
              Products
            </li>
          </Link>
            <li className=" sidebaritem">
              <AttachMoneyIcon className="sidbaricon" />
              Transaction
            </li>
            <li className=" sidebaritem">
              <BarChartIcon className="sidbaricon" />
              Products
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Notification</h3>
          <ul className="sidebarList">
            <li className=" sidebaritem ">
              <EmailIcon className="sidbaricon " />
              Mail
            </li>
            <li className=" sidebaritem">
              <DynamicFeedIcon className="sidbaricon" />
              FeedBack
            </li>
            <li className=" sidebaritem">
              <ChatBubbleIcon className="sidbaricon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Staff</h3>
          <ul className="sidebarList">
            <li className=" sidebaritem ">
              <WorkOutlineIcon className="sidbaricon " />
              manage
            </li>
            <li className=" sidebaritem">
              <AttachMoneyIcon className="sidbaricon" />
              Analytics
            </li>
            <li className=" sidebaritem">
              <ReportIcon className="sidbaricon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
