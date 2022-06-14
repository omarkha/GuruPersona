import React from "react";
import Images from "../images/index";
import { AiFillCheckCircle } from "react-icons/ai";
import SearchBar from "../components/SearchBar";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div className="home-page">
      <section>
        <div className="home-intro">
          <h3 className="intro-title">
            Finally Here! a Psycholgoical Analysis System that{" "}
            <u>Empowers You</u> to Live{" "}
            <u>Happily, Positively and Confidently</u> ever after!
          </h3>
          <h4 className="intro-subtitle">
            Improve the quality of life with rare to find Knowledge &
            Intelligence
          </h4>
          <img className="background-image" src={Images.lab} />
          <p>
            Plato once said, "Know Thyself." why? first, let me ask you this.
            What if you took a bunch of psychology and typology tests and
            combined them together? you'd have a pretty good grasp of yourself.
            You now can finally make a portrait of your mind!
            <br />
            <br />
            But why only stop at understanding how your psyche works? What if
            you could also understand other people more than they understand
            themselves? Now, you'd be rolling pretty smooth. wouldn't ya?
            imagine this...
            <br />
            <br />
            You go to a job interview and they say "tell us about yourself?"
            Thinking they bamboozled your mind. But jokes on them you already
            know your strengths and actual positive qualities!
            <br />
            <br />
            You might throw in some weaknesses as a tactic in your overall
            strategy. Because that's how confident you are. You already know how
            to manage yourself effectively and efficiently. Well sir "You're...
            HIRED!"
            <br />
            <br />
            Most people go about life not knowing who they really are. They do
            somewhat have a grasp of who some other people are. And a lot of
            people don't understand the world they live in. They struggle with
            making new friends, enjoying their life and feeling fullfilled.
            <br />
            <br />
            But you don't have to struggle. You can now start learning and
            finding out JAW-DROPPING knowledge that will change YOUR world. the
            enjoyment you get from the power you recieve will in itself be
            empowering!
            <br />
            <br />
          </p>
        </div>

        <div className="intro-sec2">
          <h3>Introducing... Personified!</h3>
          <p>
            <br />
            <img src={Images.success} className="background-image" />
            <br />
            Personified is a web application that lets you have control over
            your life. Because Knowledge is Power. And with the knowledge you'll
            gain you'll be able to make new friends with ease and improve your
            social intelligence. You should only become an improved version of
            yourself as time passes. So you can start to feel better about
            yourself, your life and feel at ease in the world you live in.
            <br />
            <br />
            Recently the Myers Briggs test has hit the interest of the public.
            MBTI is a personality test curated based on the research of Carl
            Jung, the infamous psychology pioneer.
            <br />
            <br />
            there are many other personality typing systems out there such as
            The Enneagram and Socionics. The concept of personified is to
            combine those personality tests and add to them scientific based
            psychological analysis systems such as the Big Five test.
            <br />
            <br />
          </p>
        </div>
        <div className="intro-sec3">
          <NewsLetter />
        </div>
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
      </section>
    </div>
  );
};

export default Home;
