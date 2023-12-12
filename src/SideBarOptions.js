import React from "react";
import "./css/sidebaroptions.css";

const SideBarOptions = ({ icon: Icon, title, number, isActive, onClick }) => {
  return (
    <div
      className={`sidebaroption ${isActive && `sidebaroption--active`}`}
      onClick={() => {
        onClick();
      }}
    >
      <Icon />
      <h4>{title}</h4>
      <p>{number}</p>
    </div>
  );
};

export default SideBarOptions;
