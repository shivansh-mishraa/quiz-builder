import React, { useState, useRef } from "react";

const QuizResult = () => {
  let res = [];
  let list = [];
  const query = window.location.href.split("/").at(-1);
  const info = JSON.parse(localStorage.getItem(query));
  const option_collect=JSON.parse(localStorage.getItem(query+"_crr"));
  console.log(info);

  const [data, setData] = useState([]);
  const [percent, setPercent] = useState(0);
  const [answered, setAnswered] = useState(false);
  const resultBox = useRef("");

  const createList = () => {
    info.forEach((element, index) => {
      if (option_collect[index] === 1) {
        list.push(element.option1);
      } else if (option_collect[index] === 2) {
        list.push(element.option2);
      } else if (option_collect[index] === 3) {
        list.push(element.option3);
      } else if (option_collect[index] === 4) {
        list.push(element.option4);
      }
    });
  };

  console.log(option_collect);
  createList();

  const handelClick = (e, c) => {
    let chosen = e.target.value;
    do {
      res[c - 1] = chosen;
      break;
    } while (1);
  };

  let temp = [];
  const handelSubmit = () => {
    setAnswered(true);
    let score = 0;
    console.log(res);
    console.log(list);
    for (let i = 0; i < res.length; i++) {
      if (res[i] === list[i]) {
        score += 1;
        temp.push(`You answered correct for the question number ${i + 1}`);
      } else {   
        temp.push(`You answered incorrect for the question number ${i + 1}`);
      }
    }
    let x = (parseInt(score) / parseInt(res.length)) * 100;
    setData(temp);
    setPercent(x);
  };


  return (
    <>
    <hr></hr>
      <h2 className="quizbox">Attempt your Quiz Here</h2>
      <hr></hr>
      {info.map((q) => {
        const { counter, question, option1, option2, option3, option4 } = q;
        return (
          <div key={counter}>
            <h3 className="question">
              {counter}. {question}
            </h3>
            <div className="q-cont">
              <div className="form-check radio-cont ">
                <input
                  className="form-check-input p-2"
                  type="radio"
                  name={counter}
                  value={option1}
                  onClick={(e) => handelClick(e, counter)}
                  label={option1}
                  id="op1"
                />
                <label className="form-check-label" htmlFor={option1}>
                  {option1}
                </label>
              </div>

              <div className="form-check radio-cont">
                <input
                  className="form-check-input p-2"
                  type="radio"
                  name={counter}
                  value={option2}
                  onClick={(e) => handelClick(e, counter)}
                  label={option2}
                  id={option2}
                />
                <label className="form-check-label" htmlFor={option2}>
                  {option2}{" "}
                </label>
              </div>

              <div className="form-check radio-cont">
                <input
                  className="form-check-input p-2"
                  type="radio"
                  name={counter}
                  value={option3}
                  onClick={(e) => handelClick(e, counter)}
                  label={option3}
                  id={option3}
                />
                <label className="form-check-label" htmlFor={option3}>
                  {option3}
                </label>
              </div>

              <div className="form-check radio-cont">
                <input
                  className="form-check-input p-2"
                  type="radio"
                  name={counter}
                  value={option4}
                  onClick={(e) => handelClick(e, counter)}
                  label={option4}
                  id={option4}
                />
                <label className="form-check-label" htmlFor={option4}>
                  {option4}
                </label>
                <hr></hr>
              </div>
            </div>
          </div>
        );
      })}

      <div className="btn-cont">
        <button className="btn Submit-button" onClick={handelSubmit}>
          Submit
        </button>
      </div>

      {answered && (
        <div ref={resultBox} className="result-card">
          {data.map((result, index) => {
            return (
              <div key={index}>
                <li>{result}</li>
              </div>

            );
          })}
          <h2
          >
            You Scored: {percent}%
          </h2>
        </div>
      )}
    </>
  );
};

export default QuizResult;
