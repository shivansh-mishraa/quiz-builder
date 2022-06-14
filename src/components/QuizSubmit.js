import React from "react";

const QuizSubmit = ({ permalink }) => {
  return (
    <div className="header">
      <h3>{`Quiz Ready to Play Link: http://localhost:3000/QuizResult/${permalink}`}</h3>
    </div>
  );
};

export default QuizSubmit;
