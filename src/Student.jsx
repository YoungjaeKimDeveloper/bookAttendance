import React from "react";
import "./student.css";
const Student = ({ name, id, dispatch, isHere }) => {
  return (
    <div>
      <span
        className={isHere ? "attend" : "absent"}
        onClick={() => dispatch({ type: "ATTENDED-STUDENT", payload: { id } })}
      >
        {name}
      </span>
      <button
        onClick={() => dispatch({ type: "DELETE-STUDENT", payload: { id } })}
      >
        삭제
      </button>
    </div>
  );
};

export default Student;
