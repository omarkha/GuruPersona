import React, { useState } from "react";
import ProgressBar from "../../ProgressBar";
import RatingQuestion from "../../RatingQuestion";
import Results_SN from "./Results_SN";

const Sensing_vs_Intuition = () => {
  const questions = [
    {
      question:
        "I like to live in the present moment or the past more than I like to think about the future",
      answers: [
        { id: 0, intuition: 5, sensing: 1 },
        { id: 1, intuition: 4, sensing: 2 },
        { id: 2, intuition: 3, sensing: 3 },
        { id: 3, intuition: 2, sensing: 4 },
        { id: 4, intuition: 1, sensing: 5 },
      ],
    },
    {
      question:
        "I like to think about the future rather than focus on the present moment or think about the past",
      answers: [
        { id: 0, intuition: 1, sensing: 5 },
        { id: 1, intuition: 2, sensing: 4 },
        { id: 2, intuition: 3, sensing: 3 },
        { id: 3, intuition: 4, sensing: 2 },
        { id: 4, intuition: 5, sensing: 1 },
      ],
    },
    {
      question: "I tend to be forgetful of the past",
      answers: [
        { id: 0, intuition: 1, sensing: 5 },
        { id: 1, intuition: 2, sensing: 4 },
        { id: 2, intuition: 3, sensing: 3 },
        { id: 3, intuition: 4, sensing: 2 },
        { id: 4, intuition: 5, sensing: 1 },
      ],
    },
    {
      question: "I am oriented towards the past",
      answers: [
        { id: 0, intuition: 5, sensing: 1 },
        { id: 1, intuition: 4, sensing: 2 },
        { id: 2, intuition: 3, sensing: 3 },
        { id: 3, intuition: 2, sensing: 4 },
        { id: 4, intuition: 1, sensing: 5 },
      ],
    },
    {
      question:
        "I like to plan for and work towards the future more than I like to live in the present moment and enjoy it",
      answers: [
        { id: 0, intuition: 1, sensing: 5 },
        { id: 1, intuition: 2, sensing: 4 },
        { id: 2, intuition: 3, sensing: 3 },
        { id: 3, intuition: 4, sensing: 2 },
        { id: 4, intuition: 5, sensing: 1 },
      ],
    },
    {
      question:
        "I notice abstract things about the world around me more than it's physical aspects",
      answers: [
        { id: 0, intuition: 1, sensing: 5 },
        { id: 1, intuition: 2, sensing: 4 },
        { id: 2, intuition: 3, sensing: 3 },
        { id: 3, intuition: 4, sensing: 2 },
        { id: 4, intuition: 5, sensing: 1 },
      ],
    },
    {
      question:
        "I pay attention to and focus on concrete physical facts when I’m perceiving the world around me",
      answers: [
        { id: 0, intuition: 5, sensing: 1 },
        { id: 1, intuition: 4, sensing: 2 },
        { id: 2, intuition: 3, sensing: 3 },
        { id: 3, intuition: 2, sensing: 4 },
        { id: 4, intuition: 1, sensing: 5 },
      ],
    },
    {
      question: "I think a lot about the meaning of things",
      answers: [
        { id: 0, intuition: 1, sensing: 5 },
        { id: 1, intuition: 2, sensing: 4 },
        { id: 2, intuition: 3, sensing: 3 },
        { id: 3, intuition: 4, sensing: 2 },
        { id: 4, intuition: 5, sensing: 1 },
      ],
    },
    {
      question: "I appreciate the reality of things",
      answers: [
        { id: 0, intuition: 5, sensing: 1 },
        { id: 1, intuition: 4, sensing: 2 },
        { id: 2, intuition: 3, sensing: 3 },
        { id: 3, intuition: 2, sensing: 4 },
        { id: 4, intuition: 1, sensing: 5 },
      ],
    },
    {
      question:
        "I prefer to ponder the meaning behind Artwork rather than merely appreciating it for it's Aethetical Beauty",
      answers: [
        { id: 0, intuition: 1, sensing: 5 },
        { id: 1, intuition: 2, sensing: 4 },
        { id: 2, intuition: 3, sensing: 3 },
        { id: 3, intuition: 4, sensing: 2 },
        { id: 4, intuition: 5, sensing: 1 },
      ],
    },
    {
      question:
        "I prefer to just enjoy the Aesthetic Beauty of Artwork rather than delving into the meaning behind it",
      answers: [
        { id: 0, intuition: 5, sensing: 1 },
        { id: 1, intuition: 4, sensing: 2 },
        { id: 2, intuition: 3, sensing: 3 },
        { id: 3, intuition: 2, sensing: 4 },
        { id: 4, intuition: 1, sensing: 5 },
      ],
    },
    {
      question:
        "I think about the why behind things - why something happened or why something is.",
      answers: [
        { id: 0, intuition: 1, sensing: 5 },
        { id: 1, intuition: 2, sensing: 4 },
        { id: 2, intuition: 3, sensing: 3 },
        { id: 3, intuition: 4, sensing: 2 },
        { id: 4, intuition: 5, sensing: 1 },
      ],
    },
    {
      question:
        "I think about the what’s going on - what happened and what something is.",
      answers: [
        { id: 0, intuition: 5, sensing: 1 },
        { id: 1, intuition: 4, sensing: 2 },
        { id: 2, intuition: 3, sensing: 3 },
        { id: 3, intuition: 2, sensing: 4 },
        { id: 4, intuition: 1, sensing: 5 },
      ],
    },
    {
      question:
        "I pay attention or focus on sensory facts about other people more than intuitive patterns (such as their looks, financial status, possessions..etc)",
      answers: [
        { id: 0, intuition: 5, sensing: 1 },
        { id: 1, intuition: 4, sensing: 2 },
        { id: 2, intuition: 3, sensing: 3 },
        { id: 3, intuition: 2, sensing: 4 },
        { id: 4, intuition: 1, sensing: 5 },
      ],
    },
    {
      question:
        "I pay attention or focus on intuitive patterns about other people more than sensory facts (such as their nature, mindset, future, mental behaviors...etc.)",
      answers: [
        { id: 0, intuition: 1, sensing: 5 },
        { id: 1, intuition: 2, sensing: 4 },
        { id: 2, intuition: 3, sensing: 3 },
        { id: 3, intuition: 4, sensing: 2 },
        { id: 4, intuition: 5, sensing: 1 },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [testOver, setTestOver] = useState(false);
  const [intuition, setIntuition] = useState(0);
  const [sensing, setSensing] = useState(0);
  const [result, setResult] = useState({
    intuition: 0,
    sensing: 0,
  });
  const [percentages, setPercentages] = useState({
    intuitionPercentage: 0,
    sensingPercentage: 0,
  });
  const values = [];

  const calculation = (n, s) => {
    setResult({
      intuition: result.intuition + intuition,
      sensing: result.sensing + sensing,
    });

    setCurrentQuestion(currentQuestion + 1);

    if (currentQuestion + 1 >= questions.length) {
      setTestOver(true);
      const n = (100 * result.intuition) / (result.intuition + result.sensing);
      const s = (100 * result.sensing) / (result.intuition + result.sensing);
      setPercentages({
        intuitionPercentage: n,
        sensingPercentage: s,
      });
      console.log(result);
      console.log(percentages);
    }
  };

  const getValue = (index) => {
    questions[currentQuestion].answers.forEach((e, i) => {
      if (e.id === index) {
        setIntuition(e.intuition);
        setSensing(e.sensing);
      }
    });
  };

  const startOver = () => {
    setIntuition(0);
    setSensing(0);
    setResult({
      intuition: 0,
      sensing: 0,
    });
    setTestOver(false);
    setCurrentQuestion(0);
  };

  return (
    <div className="page">
      <section className="test-section">
        <h1> Sensing vs Intuition </h1>
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
              name={"s" + currentQuestion}
              id={currentQuestion}
              question={questions[currentQuestion].question}
              explain={questions[currentQuestion].explain}
            />
          ) : (
            <Results_SN
              intuitionPercentage={percentages.intuitionPercentage}
              sensingPercentage={percentages.sensingPercentage}
            />
          )}
        </div>
        <div>
          <h5>{currentQuestion + 1 + " / " + questions.length}</h5>
          <ProgressBar
            topScore={questions.length}
            currentScore={currentQuestion}
          />
          <h4>Answer the following questions Honestly and Thoughtfully.</h4>

          <h5 id="percent-achieved"></h5>
        </div>
      </section>
    </div>
  );
};

export default Sensing_vs_Intuition;
