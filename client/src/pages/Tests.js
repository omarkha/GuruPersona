import React from "react";
import PageCard from "../components/PageCard";
import Images from "../images/index";

const Tests = () => {
  const tests = [
    {
      title: "Extraversion VS Introversion",
      dest: "/Extraversion_vs_Introversion",
      disc: "(E vs I) Test whether you are an Extravert or Introvert.",
    },
    {
      title: "Sensing VS Intuition",
      dest: "/Sensing_vs_Intuition",
      disc: "(S vs N) Test whether you have an Intuitive or Sensing Personality.",
    },
    {
      title: "Thining VS Feeling",
      dest: "/thinking_vs_feeling",
      disc: "(T vs F) Let's see whether you're a Thining or Feeing Type.",
    },
    {
      title: "Judging VS Percieving",
      dest: "/juging_vs_percieving",
      disc: "(J vs P) See whether you're a Judging or Percieving Type.",
    },
  ];
  return (
    <div className="tests-page">
      <section className="MBTI-Test">
        <img src={Images.typology} />
        <div>
          <h3>Find out about yourself!</h3>
          <p>
            Below are simple, straight-forward tests crafted with care.
            <br />
            Let's get started!
          </p>
        </div>
      </section>
      <section className="tests">
        {tests.map((e, i) => (
          <PageCard
            dest={e.dest}
            disc={e.disc}
            title={e.title}
            key={"PageCard" + i}
            id={"PageCard" + i}
          />
        ))}
      </section>
    </div>
  );
};

export default Tests;
