import React from "react";
import Images from "../images/index";

const Home = () => {
    return (
        <div className="home-page">
            <article>
                <img src={Images.logo_1} />
                <div>
                    <h3>Empower Yourself with Knowledge</h3>
                <p>
                    Whether you're new to typology, or a verteran, this website is designed to be your drug.
                    The tool you can rely on for improving your life. Our services are FREE for now. And we want you
                    to take advantage of it while it still is!
                </p>
                </div>
                
            </article>
        </div>
    )
}

export default Home;