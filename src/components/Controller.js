import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QuestionCard from "./QuestionCard";
import Title from "./Title";
import QuizResult from "./QuizResult";
import QuizSubmit from "./QuizSubmit";

function App() {
  const [info, Data_set] = useState([]);
  const [option_collect, option_put] = useState([]);
  const [permalink, setPermalink] = useState();
  return (
    <div className="App">
      <Router>
        <Title />
        <Switch>
          <Route exact path="/">
            <QuestionCard
              info={info}
              Data_set={Data_set}
              option_collect={option_collect}
              option_put={option_put}
              permalink={permalink}
              setPermalink={setPermalink}
            />
          </Route>
          <Route path="/QuizResult">
            <QuizResult />
          </Route>
          <Route path="/quizSubmitted">
            <QuizSubmit permalink={permalink} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
