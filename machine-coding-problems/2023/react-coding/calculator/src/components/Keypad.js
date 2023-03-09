import React from "react";
import { KEY_BUTTONS } from "../constants/keybutton";

const Keypad = ({ handleClick }) => {
  return (
    <div className="button-list">
      {KEY_BUTTONS.map((btn, i) => {
        if (i % 4 === 0) {
          return (
            <>
              <br />
              <button name={btn} onClick={(e) => handleClick(e.target.name)}>
                {btn}
              </button>
            </>
          );
        }
        return (
          <button name={btn} onClick={(e) => handleClick(e.target.name)}>
            {btn}
          </button>
        );
      })}
    </div>
  );
};

export default Keypad;
