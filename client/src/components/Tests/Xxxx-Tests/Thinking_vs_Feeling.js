import React, { useState } from "react";
import ProgressBar from "../../ProgressBar";
import RatingQuestion from "../../RatingQuestion";
import Results_TF from "./Results_TF";

const Thinking_vs_Feeling = () => {
  const questions = [
    {
      question:
        "I primarily consider People's feelings and tastes When making decisions",
      answers: [
        { id: 0, thinking: 5, feeling: 1 },
        { id: 1, thinking: 4, feeling: 2 },
        { id: 2, thinking: 3, feeling: 3 },
        { id: 3, thinking: 2, feeling: 4 },
        { id: 4, thinking: 1, feeling: 5 },
      ],
      explain: "asdasd ada das da das dasd as dasd asd asd asd aasd asd.",
    },
    {
      question:
        "I consider the Facts First the People's feelings when Making Decisions",
      answers: [
        { id: 0, thinking: 1, feeling: 5 },
        { id: 1, thinking: 2, feeling: 4 },
        { id: 2, thinking: 3, feeling: 3 },
        { id: 3, thinking: 4, feeling: 2 },
        { id: 4, thinking: 5, feeling: 1 },
      ],
      explain: "asdasd ada das da das dasd as dasd asd asd asd aasd asd.",
    },
    {
      question:
        "I value what Other People Value more than what Other People Think",
      answers: [
        { id: 0, thinking: 5, feeling: 1 },
        { id: 1, thinking: 4, feeling: 2 },
        { id: 2, thinking: 3, feeling: 3 },
        { id: 3, thinking: 2, feeling: 4 },
        { id: 4, thinking: 1, feeling: 5 },
      ],
      explain: "asdasd ada das da das dasd as dasd asd asd asd aasd asd.",
    },
    {
      question:
        "I value what Other People Think more than what Other People Value",
      answers: [
        { id: 0, thinking: 1, feeling: 5 },
        { id: 1, thinking: 2, feeling: 4 },
        { id: 2, thinking: 3, feeling: 3 },
        { id: 3, thinking: 4, feeling: 2 },
        { id: 4, thinking: 5, feeling: 1 },
      ],
      explain: "asdasd ada das da das dasd as dasd asd asd asd aasd asd.",
    },
    {
      question:
        "I consider what is Good and Bad when making decisions more than what is True or False",
      answers: [
        { id: 0, thinking: 5, feeling: 1 },
        { id: 1, thinking: 4, feeling: 2 },
        { id: 2, thinking: 3, feeling: 3 },
        { id: 3, thinking: 2, feeling: 4 },
        { id: 4, thinking: 1, feeling: 5 },
      ],
      explain: "asdasd ada das da das dasd as dasd asd asd asd aasd asd.",
    },
    {
      question:
        "I consider what is True and False when making decisions more than what is Good or Bad",
      answers: [
        { id: 0, thinking: 1, feeling: 5 },
        { id: 1, thinking: 2, feeling: 4 },
        { id: 2, thinking: 3, feeling: 3 },
        { id: 3, thinking: 4, feeling: 2 },
        { id: 4, thinking: 5, feeling: 1 },
      ],
      explain: "asdasd ada das da das dasd as dasd asd asd asd aasd asd.",
    },
    {
      question:
        "I would rather be Understanding and Warm rather than being Reasonable and Fair",
      answers: [
        { id: 0, thinking: 5, feeling: 1 },
        { id: 1, thinking: 4, feeling: 2 },
        { id: 2, thinking: 3, feeling: 3 },
        { id: 3, thinking: 2, feeling: 4 },
        { id: 4, thinking: 1, feeling: 5 },
      ],
      explain: "asdasd ada das da das dasd as dasd asd asd asd aasd asd.",
    },
    {
      question:
        "I would rather be Reasonable and Fair rather than being Understanding and Warm",
      answers: [
        { id: 0, thinking: 1, feeling: 5 },
        { id: 1, thinking: 2, feeling: 4 },
        { id: 2, thinking: 3, feeling: 3 },
        { id: 3, thinking: 4, feeling: 2 },
        { id: 4, thinking: 5, feeling: 1 },
      ],
      explain: "asdasd ada das da das dasd as dasd asd asd asd aasd asd.",
    },
    {
      question:
        "I rely on My Own Subjective Inner Values more than Objective Principles",
      answers: [
        { id: 0, thinking: 5, feeling: 1 },
        { id: 1, thinking: 4, feeling: 2 },
        { id: 2, thinking: 3, feeling: 3 },
        { id: 3, thinking: 2, feeling: 4 },
        { id: 4, thinking: 1, feeling: 5 },
      ],
      explain: "asdasd ada das da das dasd as dasd asd asd asd aasd asd.",
    },
    {
      question:
        "I rely on Objective Principles more than My Own Subjective Inner Values",
      answers: [
        { id: 0, thinking: 1, feeling: 5 },
        { id: 1, thinking: 2, feeling: 4 },
        { id: 2, thinking: 3, feeling: 3 },
        { id: 3, thinking: 4, feeling: 2 },
        { id: 4, thinking: 5, feeling: 1 },
      ],
      explain: "asdasd ada das da das dasd as dasd asd asd asd aasd asd.",
    },
    {
      question: "I Value Personal Relationships more than Competence",
      answers: [
        { id: 0, thinking: 5, feeling: 1 },
        { id: 1, thinking: 4, feeling: 2 },
        { id: 2, thinking: 3, feeling: 3 },
        { id: 3, thinking: 2, feeling: 4 },
        { id: 4, thinking: 1, feeling: 5 },
      ],
      explain: "asdasd ada das da das dasd as dasd asd asd asd aasd asd.",
    },
    {
      question: "I Value Competence more than Personal Relationships",
      answers: [
        { id: 0, thinking: 1, feeling: 5 },
        { id: 1, thinking: 2, feeling: 4 },
        { id: 2, thinking: 3, feeling: 3 },
        { id: 3, thinking: 4, feeling: 2 },
        { id: 4, thinking: 5, feeling: 1 },
      ],
      explain: "asdasd ada das da das dasd as dasd asd asd asd aasd asd.",
    },
    {
      question:
        "I say things like ‘people should be more kind, empathetic and considerate’ more than I say things like ‘people should be truthful, logical and efficient as possible’",
      answers: [
        { id: 0, thinking: 5, feeling: 1 },
        { id: 1, thinking: 4, feeling: 2 },
        { id: 2, thinking: 3, feeling: 3 },
        { id: 3, thinking: 2, feeling: 4 },
        { id: 4, thinking: 1, feeling: 5 },
      ],
      explain: "asdasd ada das da das dasd as dasd asd asd asd aasd asd.",
    },
    {
      question:
        "It makes me upset when people don’t acknowledge facts logic I believe to be true and for others to lack thought",
      answers: [
        { id: 0, thinking: 1, feeling: 5 },
        { id: 1, thinking: 2, feeling: 4 },
        { id: 2, thinking: 3, feeling: 3 },
        { id: 3, thinking: 4, feeling: 2 },
        { id: 4, thinking: 5, feeling: 1 },
      ],
      explain: "asdasd ada das da das dasd as dasd asd asd asd aasd asd.",
    },
    {
      question: "I feel more like my true self working and being productive",
      answers: [
        { id: 0, thinking: 1, feeling: 5 },
        { id: 1, thinking: 2, feeling: 4 },
        { id: 2, thinking: 3, feeling: 3 },
        { id: 3, thinking: 4, feeling: 2 },
        { id: 4, thinking: 5, feeling: 1 },
      ],
      explain: "asdasd ada das da das dasd as dasd asd asd asd aasd asd.",
    },
    {
      question:
        "I feel more like your my self when you're interacting with other people",
      answers: [
        { id: 0, thinking: 5, feeling: 1 },
        { id: 1, thinking: 4, feeling: 2 },
        { id: 2, thinking: 3, feeling: 3 },
        { id: 3, thinking: 2, feeling: 4 },
        { id: 4, thinking: 1, feeling: 5 },
      ],
      explain: "asdasd ada das da das dasd as dasd asd asd asd aasd asd.",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [testOver, setTestOver] = useState(false);
  const [feeling, setFeeling] = useState(0);
  const [thinking, setThinking] = useState(0);
  const [result, setResult] = useState({
    feeling: 0,
    thinking: 0,
  });
  const [percentages, setPercentages] = useState({
    feelingPercentage: 0,
    thinkingPercentage: 0,
  });
  const values = [];

  const calculation = () => {
    setResult({
      feeling: result.feeling + feeling,
      thinking: result.thinking + thinking,
    });

    setCurrentQuestion(currentQuestion + 1);
    setFeeling(0);
    setThinking(0);
    if (currentQuestion + 1 >= questions.length) {
      setTestOver(true);
      const f = (100 * result.feeling) / (result.feeling + result.thinking);
      const t = (100 * result.thinking) / (result.feeling + result.thinking);
      setPercentages({
        feelingPercentage: f,
        thinkingPercentage: t,
      });
    }
  };

  const getValue = (index) => {
    questions[currentQuestion].answers.forEach((e, i) => {
      if (e.id === index) {
        setFeeling(e.feeling);
        setThinking(e.thinking);
      }
    });
  };

  const startOver = () => {
    setFeeling(0);
    setThinking(0);
    setResult({
      feeling: 0,
      thinking: 0,
    });
    setTestOver(false);
    setCurrentQuestion(0);
  };

  return (
    <div className="page">
      <section className="test-section">
        <h1> Thinking vs Feeling </h1>
        {testOver ? (
          <div className="buttons">
            <h4>Let's see what you've got!</h4>
            <button>Submit Results</button>
            <button onClick={() => startOver()}>Start Over</button>
          </div>
        ) : (
          <div className="buttons">
            <h4> Let's do this!</h4>
            <button onClick={() => calculation()}>Next Question</button>
          </div>
        )}
        <div>
          {!testOver ? (
            <RatingQuestion
              getValue={getValue}
              name={"tf" + currentQuestion}
              id={currentQuestion}
              question={questions[currentQuestion].question}
              explain={questions[currentQuestion].explain}
            />
          ) : (
            <Results_TF
              feelingPercentage={percentages.feelingPercentage}
              thinkingPercentage={percentages.thinkingPercentage}
            />
          )}
        </div>

        <div>
          <ProgressBar
            currentScore={currentQuestion}
            topScore={questions.length}
          />
          <h4>Answer the following questions Honestly and Thoughtfully.</h4>
          <h5>{currentQuestion + 1 + " / " + questions.length}</h5>
        </div>
      </section>
    </div>
  );
};

export default Thinking_vs_Feeling;
