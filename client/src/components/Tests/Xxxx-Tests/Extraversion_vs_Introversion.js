import React, { useState } from "react";
import RatingQuestion from "../../RatingQuestion";
import Results_EI from "./Results_EI";
import ProgressBar from "../../ProgressBar";

const Extraversion_vs_Introversion = () => {
  const questions = [
    {
      question:
        "I'm a high energy person and I like going outside and being active in society",
      answers: [
        { id: 0, extraversion: 5, introversion: 1 },
        { id: 1, extraversion: 4, introversion: 2 },
        { id: 2, extraversion: 3, introversion: 3 },
        { id: 3, extraversion: 2, introversion: 4 },
        { id: 4, extraversion: 1, introversion: 5 },
      ],
      explain:
        "I am enthusiastic when I'm interacting with society. Be it going to work, hanging out with friends, or being surrounded by people.",
    },
    {
      question:
        "I'm a reserved, somewhat quiet person and I like keeping to yourself",
      answers: [
        { id: 0, extraversion: 1, introversion: 5 },
        { id: 1, extraversion: 2, introversion: 4 },
        { id: 2, extraversion: 3, introversion: 3 },
        { id: 3, extraversion: 4, introversion: 2 },
        { id: 4, extraversion: 5, introversion: 1 },
      ],
      explain: "I'm somewhat private. I don’t like sharing too much.",
    },
    {
      question:
        "I'm eager to talk about what's on my mind and I love to be heard",
      answers: [
        { id: 0, extraversion: 5, introversion: 1 },
        { id: 1, extraversion: 4, introversion: 2 },
        { id: 2, extraversion: 3, introversion: 3 },
        { id: 3, extraversion: 2, introversion: 4 },
        { id: 4, extraversion: 1, introversion: 5 },
      ],
      explain: "I like to share whats on my mind with other people.",
    },
    {
      question:
        "I value what Other People Think more than what Other People Value",
      answers: [
        { id: 0, extraversion: 1, introversion: 5 },
        { id: 1, extraversion: 2, introversion: 4 },
        { id: 2, extraversion: 3, introversion: 3 },
        { id: 3, extraversion: 4, introversion: 2 },
        { id: 4, extraversion: 5, introversion: 1 },
      ],
    },
    {
      question:
        "I consider what is Good and Bad when making decisions more than what is True or False",
      answers: [
        { id: 0, extraversion: 5, introversion: 1 },
        { id: 1, extraversion: 4, introversion: 2 },
        { id: 2, extraversion: 3, introversion: 3 },
        { id: 3, extraversion: 2, introversion: 4 },
        { id: 4, extraversion: 1, introversion: 5 },
      ],
    },
    {
      question:
        "I consider what is True and False when making decisions more than what is Good or Bad",
      answers: [
        { id: 0, extraversion: 1, introversion: 5 },
        { id: 1, extraversion: 2, introversion: 4 },
        { id: 2, extraversion: 3, introversion: 3 },
        { id: 3, extraversion: 4, introversion: 2 },
        { id: 4, extraversion: 5, introversion: 1 },
      ],
    },
    {
      question:
        "I would rather be Understanding and Warm rather than being Reasonable and Fair",
      answers: [
        { id: 0, extraversion: 5, introversion: 1 },
        { id: 1, extraversion: 4, introversion: 2 },
        { id: 2, extraversion: 3, introversion: 3 },
        { id: 3, extraversion: 2, introversion: 4 },
        { id: 4, extraversion: 1, introversion: 5 },
      ],
    },
    {
      question:
        "I would rather be Reasonable and Fair rather than being Understanding and Warm",
      answers: [
        { id: 0, extraversion: 1, introversion: 5 },
        { id: 1, extraversion: 2, introversion: 4 },
        { id: 2, extraversion: 3, introversion: 3 },
        { id: 3, extraversion: 4, introversion: 2 },
        { id: 4, extraversion: 5, introversion: 1 },
      ],
    },
    {
      question:
        "I rely on My Own Subjective Inner Values more than Objective Principles",
      answers: [
        { id: 0, extraversion: 5, introversion: 1 },
        { id: 1, extraversion: 4, introversion: 2 },
        { id: 2, extraversion: 3, introversion: 3 },
        { id: 3, extraversion: 2, introversion: 4 },
        { id: 4, extraversion: 1, introversion: 5 },
      ],
    },
    {
      question:
        "I rely on Objective Principles more than My Own Subjective Inner Values",
      answers: [
        { id: 0, extraversion: 1, introversion: 5 },
        { id: 1, extraversion: 2, introversion: 4 },
        { id: 2, extraversion: 3, introversion: 3 },
        { id: 3, extraversion: 4, introversion: 2 },
        { id: 4, extraversion: 5, introversion: 1 },
      ],
    },
    {
      question: "I Value Personal Relationships more than Competence",
      answers: [
        { id: 0, extraversion: 5, introversion: 1 },
        { id: 1, extraversion: 4, introversion: 2 },
        { id: 2, extraversion: 3, introversion: 3 },
        { id: 3, extraversion: 2, introversion: 4 },
        { id: 4, extraversion: 1, introversion: 5 },
      ],
    },
    {
      question: "I Value Competence more than Personal Relationships",
      answers: [
        { id: 0, extraversion: 1, introversion: 5 },
        { id: 1, extraversion: 2, introversion: 4 },
        { id: 2, extraversion: 3, introversion: 3 },
        { id: 3, extraversion: 4, introversion: 2 },
        { id: 4, extraversion: 5, introversion: 1 },
      ],
    },
    {
      question:
        "I say things like ‘people should be more kind, empathetic and considerate’ more than I say things like ‘people should be truthful, logical and efficient as possible’",
      answers: [
        { id: 0, extraversion: 5, introversion: 1 },
        { id: 1, extraversion: 4, introversion: 2 },
        { id: 2, extraversion: 3, introversion: 3 },
        { id: 3, extraversion: 2, introversion: 4 },
        { id: 4, extraversion: 1, introversion: 5 },
      ],
    },
    {
      question:
        "It makes me upset when people don’t acknowledge facts logic I believe to be true and for others to lack thought",
      answers: [
        { id: 0, extraversion: 1, introversion: 5 },
        { id: 1, extraversion: 2, introversion: 4 },
        { id: 2, extraversion: 3, introversion: 3 },
        { id: 3, extraversion: 4, introversion: 2 },
        { id: 4, extraversion: 5, introversion: 1 },
      ],
    },
    {
      question: "I feel more like my true self working and being productive",
      answers: [
        { id: 0, extraversion: 5, introversion: 1 },
        { id: 1, extraversion: 4, introversion: 2 },
        { id: 2, extraversion: 3, introversion: 3 },
        { id: 3, extraversion: 2, introversion: 4 },
        { id: 4, extraversion: 1, introversion: 5 },
      ],
    },
    {
      question:
        "I feel more like your my self when you're interacting with other people",
      answers: [
        { id: 0, extraversion: 1, introversion: 5 },
        { id: 1, extraversion: 2, introversion: 4 },
        { id: 2, extraversion: 3, introversion: 3 },
        { id: 3, extraversion: 4, introversion: 2 },
        { id: 4, extraversion: 5, introversion: 1 },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [testOver, setTestOver] = useState(false);
  const [introversion, setIntroversion] = useState(0);
  const [extraversion, setExtraversion] = useState(0);
  const [result, setResult] = useState({
    introversion: 0,
    extraversion: 0,
  });
  const [percentages, setPercentages] = useState({
    introversionPercentage: 0,
    extraversionPercentage: 0,
  });
  const values = [];

  const calculation = (n, s) => {
    setResult({
      intuition: result.introversion + introversion,
      sensing: result.extraversion + extraversion,
    });

    setCurrentQuestion(currentQuestion + 1);

    if (currentQuestion + 1 >= questions.length) {
      setTestOver(true);
      const i =
        (100 * result.introversion) /
        (result.introversion + result.extraversion);
      const e =
        (100 * result.extraversion) / (result.intuition + result.extraversion);
      setPercentages({
        introversionPercentage: i,
        extraversionPercentage: e,
      });
      console.log(result);
      console.log(percentages);
    }
  };

  const getValue = (index) => {
    questions[currentQuestion].answers.forEach((e, i) => {
      if (e.id === index) {
        setIntroversion(e.introversion);
        setExtraversion(e.extraversion);
      }
    });
  };

  const startOver = () => {
    setIntroversion(0);
    setExtraversion(0);
    setResult({
      introversion: 0,
      extraversion: 0,
    });
    setTestOver(false);
    setCurrentQuestion(0);
  };

  return (
    <div className="page">
      <section className="test-section">
        <h1> Extraversion vs Introversion </h1>
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
            <Results_EI
              intuitionPercentage={percentages.introversionPercentage}
              sensingPercentage={percentages.extraversionPercentage}
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

export default Extraversion_vs_Introversion;
