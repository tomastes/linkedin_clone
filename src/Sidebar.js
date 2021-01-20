import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";
const Sidebar = () => {
  const user = useSelector(selectUser)
    const recentItem = (topic)=>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className="Sidebar_container">
      <div className="Sidebar_top">
        <img
          src="https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Geometric-Simple-Background-Image.jpg"
          alt=""
        />
        <Avatar src={user.photoUrl}>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>

      </div>
      <div className="sidbar_stats">
        <div className="sidbar_stat">
            <p>who viewed you</p>
            <p className="sidebar_statNUmer">2.545</p>
        </div>
        <div className="sidbar_stat">
        <p>who viewed post</p>
            <p className="sidebar_statNUmer">2.545</p>
        </div>
      </div>
    {/* sibar bottom */}
    <div className="sidebar_bottom">
        <p>RECENT</p>
        {recentItem("reactjs")}
        {recentItem("arteficial-inteligence")}
        {recentItem("paython")}
        {recentItem("computer-secience")}
        {recentItem("Teology")}
    </div>
    </div>
  );
};

export default Sidebar;
