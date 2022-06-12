import React, { useState } from "react";
import RatingQuestion from "../RatingQuestion";
import Results from "../Results_TF";

const Thinking_vs_Feeling = () => {
  const questions = [
    {
      question: "I like to live in the present moment",
      answers: [
        { id: 0, intuition: 5, sensing: 1 },
        { id: 1, intuition: 4, sensing: 2 },
        { id: 2, intuition: 3, sensing: 3 },
        { id: 3, intuition: 2, sensing: 4 },
        { id: 4, intuition: 1, sensing: 5 },
      ],
    },
    {
      question: "I like to ponder the future",
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
      question: "Thinking about the future makes me excited",
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
        "I think about abstract things when I’m perceiving the world around me",
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
        "I pay attention to the concrete physical facts when I’m perceiving the world around me",
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
        "I prefer to ponder the meaning behind Abstract Artwork rather than appreciate the Aethetical Beauty of it",
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
        "I prefer to enjoy the Aesthetic Beauty of Artwork rather than delving into the meaning behind it",
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
        "I pay attention to sensory facts about other people more than intuitive patterns",
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
        "I pay attention to intuitive patterns about other people more than sensory facts",
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
      intuition: intuition,
      sensing: sensing,
    });

    setCurrentQuestion(currentQuestion + 1);

    if (currentQuestion + 1 >= questions.length) {
      setTestOver(true);
      const n = (100 * intuition) / (result.intuition + result.sensing);
      const s = (100 * sensing) / (result.intuition + result.sensing);
      setPercentages({
        intuitionPercentage: n,
        sensingPercentage: s,
      });
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

  return (
    <div className="page">
      <article>
        <h1> Sensing vs Intuition </h1>
        <h4>
          Answer the following questions truthfully, honestly, and thoughtfully.
        </h4>
        {!testOver ? (
          <RatingQuestion
            getValue={getValue}
            name={"s" + currentQuestion}
            id={currentQuestion}
            question={questions[currentQuestion].question}
          />
        ) : (
          <Results
            intuitionPercentage={percentages.intuitionPercentage}
            sensingPercentage={percentages.sensingPercentage}
          />
        )}

        {testOver ? (
          <div>
            <h4>Let's see what you've got!</h4>
            <button>Bing Bong</button>
          </div>
        ) : (
          <div className="buttons">
            <h4> Let's do this! {"N: " + intuition + " S: " + sensing}</h4>
            <button onClick={() => calculation()}>Submit Answer</button>
          </div>
        )}
      </article>
    </div>
  );
};

export default Sensing_vs_Intuition;
