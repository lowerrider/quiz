import React from "react";
import Game from "././ui/Game/Game";
import Result from "./ui/Result/Result";
import "./index.scss";
import { questions } from "./ui/questions/questions";
import Menu from "./ui/Menu/Menu";

function App() {
  const [category, setCategory] = React.useState(null);
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const qustion = category && questions[category][step];

  const onClickVarioant = (index) => {
    setStep(step + 1);

    if (index === qustion.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {category ? (
        <>
          {step !== questions[category].length ? (
            <Game qustion={qustion} onClickVarioant={onClickVarioant} step={step} questions={questions[category]} />
          ) : (
            <Result correct={correct} questionsLenght={questions[category].length} />
          )}
        </>
      ) : (
        <Menu setCategory={setCategory} />
      )}
    </div>
  );
}

export default App;

// function Menu({setCategory: setCategory}){} === <Menu setCategory={setCategory} />
// function Menu({setCategory}){}
