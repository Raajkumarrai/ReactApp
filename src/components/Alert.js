import React from "react";
const Alert = (props) => {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show w-100`}
        style={{ position: "absolute", top: 50, left: 0, zIndex: 1050 }}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
      </div>
    )
  );
};

export default Alert;
