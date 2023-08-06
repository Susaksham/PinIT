import React, { Fragment } from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <section className={classes.header}>
      <div>
        <h1>PinIt</h1>
      </div>
      {/* <div>toggle mode</div> */}
    </section>
  );
};

export default Header;
