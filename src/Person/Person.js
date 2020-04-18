import React from "react";

export default (props) => {
  return (
    <div>
      <p>
        I'm {props.name} and I have {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};
