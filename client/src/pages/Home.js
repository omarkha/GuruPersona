import React from "react";
import Images from "../images/index";
import { AiFillCheckCircle } from "react-icons/ai";
import SearchBar from "../components/SearchBar";
const Home = () => {
  return (
    <div className="home-page">
      <article>
        <div className="home-intro">
          <h3 className="intro-title">
            Finally Here - A System that Empowers You with Knowledge,
            Intelligence, Control to Live Happily and Confidently!
          </h3>
          <img className="background-image" src={Images.lab} />
          <p>
            The new age of information has arrived. More than ever people can be
            as successful as they desire. Yet, people are lost. Wandering around
            aimlessly.
            <br />
            <br />
            You are constantly fighting against life. You gotta have a game
            plan!
            <br />
            <br />
            I know it, you know it. Life can be very stressful, and anxiety
            inducing... And it can get very difficult very quickly. You struggle
            with your self-image, confidence, happiness, staying positive..etc.
            <br />
            <br />
            It's easy to crumble in the face of pressure when you don't know
            what you're doing.
            <br />
            <br />
            Introducing Personified.
            <br />
            <br />
            A Brand New Lifestyle. The ultimate Success System. <br />
            <br />
            Where you can employ information to defuse problems. And have a
            manual for each situation at your disposal whenever you want.
            <br />
            <br />
            The secret to winning is to Know Yourself, first. Before Anything.
            And that is the first step in my System.
            <br />
            <br />
            What if you can win yourself, win the game of life and make it look
            easy?! We're here to make you prepared for every situation you
            encounter. <br />
            <br />
            How much More Comfortable, Confident, Happy would you feel if you
            were to 'Know Thyself'?
            <br />
            <br />
            You'll quickly observe your Development as a person as you ooze with
            confidence and start to inhale freedom.
            <br />
            <br />
            Your success is my life's purpose. Whether you're new to typology,
            or a verteran, this website is designed to be your map of the world
            around you. A toolset you can rely on for improving yourself and
            winning life's challenges like a pro.
            <br />
            <br />
          </p>
        </div>
        <img src={Images.lab} />
        <div className="home-services">
          <h3>Services</h3>
          <img id="services-background" src={Images.dna2} />
          <ul>
            <li>
              <AiFillCheckCircle className="checkmark" />
              Try Our <em>MBTI Testing System</em> that lets you{" "}
              <span>
                Know your type <u>Fast and Easy!</u>
              </span>
            </li>
            <li>
              <AiFillCheckCircle className="checkmark" />
              Take The <em>Enneagram Test</em> to enjoy{" "}
              <span>
                The <u>flavor</u> added to <u>your MBTI type</u>!
              </span>
            </li>
            <li>
              <AiFillCheckCircle className="checkmark" />
              Take The <em>Big Five Test</em> associated with a{" "}
              <span>Ton Scientific Research for extra Intelligence!</span>
            </li>
            <li>
              <AiFillCheckCircle className="checkmark" />
              Employ <em>Self-Development Tools</em> lets you Learn how to{" "}
              <span> Become Your Most Successful Self!</span>
            </li>
            <li>
              <AiFillCheckCircle className="checkmark" />
              <em>Personified Community</em> to Learn From Others and{" "}
              <span>Boost Your Self-Development Curve</span>!
            </li>
            <li>
              <AiFillCheckCircle className="checkmark" />
              <em>Tweak Your Personality</em> by tapping into your natural
              Energy and <span>Stylize Your Personality</span>!
            </li>
            <li>
              <AiFillCheckCircle className="checkmark" />
              Obtain a <em>Complete Personality Profile</em> and{" "}
              <span>
                acquire a sense of <u>CONTROL</u> over <u>YOUR LIFE!</u>
              </span>
            </li>
            <li>... and Recieve So Much MORE value!</li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default Home;
