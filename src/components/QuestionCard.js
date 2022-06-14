import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import Controller from "./Controller";

const QuestionCard = ({
  info,
  Data_set,
  option_collect,
  //
  option_put,
  permalink,
  setPermalink,
}) => {
  const [counter, setCounter] = useState(1);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [l1, setL1] = useState();
console.log(option_collect);
  const handelSubmit = (e) => {
    e.preventDefault();
    if (question && option1 && option2 && option3 && option4) {
      let newQuestion = {
        counter,
        question,
        option1,
        option2,
        option3,
        option4,
      };
      Data_set([...info, newQuestion]);
      setQuestion("");
      setOption1("");
      setOption2("");
      setOption3("");
      setOption4("");
      setCounter(counter + 1);

      option_put([...option_collect, parseInt(l1)]);
      setL1("");
    }
  };
  useEffect(() => {
    setPermalink(Math.floor(Math.random() * 100));
  }, []);
  return (
    <>
      <div className="content-info">
        <div className="info">
          <form onSubmit={handelSubmit}>
            <div className="question_set">
              <label htmlFor="question">Question: {counter}</label>
              <input
                required
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                id="question"
                placeholder="Enter your question"
              />
            </div>
            <div className="question_set">
              <label htmlFor="option1">Option 1:</label>
              <input
                type="text"
                value={option1}
                required
                onChange={(e) => setOption1(e.target.value)}
                id="option1"
                placeholder="Enter Answer 1"
              />
            </div>
            <div className="question_set">
              <label htmlFor="option2">Option 2:</label>
              <input
                type="text"
                value={option2}
                required
                onChange={(e) => setOption2(e.target.value)}
                id="option2"
                placeholder="Enter Answer 2"
              />
            </div>
            <div className="question_set">
              <label htmlFor="option3">Option 3:</label>
              <input
                type="text"
                value={option3}
                required
                onChange={(e) => setOption3(e.target.value)}
                id="option3"
                placeholder="Enter Answer 3"
              />
            </div>
            <div className="question_set">
              <label htmlFor="option4">Option 4:</label>
              <input
                type="text"
                value={option4}
                required
                onChange={(e) => setOption4(e.target.value)}
                id="option4"
                placeholder="Enter Answer 4"
              />
            </div>
            <div className="correct_box">
              <input
                className="correct_opt"
                required
                type="number"
                value={l1}
                onChange={(e) => setL1(e.target.value)}
                min="1"
                max="4"
                placeholder="Enter your Correct Answer"
              />
              <button type="submit" className="btn Add-data">
                Add
              </button>
            </div>
          </form>
          <button
            className="btn Create-quiz"
            onClick={() => {
              localStorage.setItem(permalink, JSON.stringify(info));
              localStorage.setItem(permalink+"_crr",JSON.stringify(option_collect));
            }}
          >
            <Link className="Link" to="/quizSubmitted">
              Create
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
