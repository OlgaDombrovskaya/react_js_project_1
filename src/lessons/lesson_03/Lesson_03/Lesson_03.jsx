import SimpsonsCard from "../components/SimpsonsCard/SimpsonsCard";
import Button from "../../components/Button/Button";

import "./styles.css";

function Lesson_03() {
  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Security Specialist",
    hobby: "Bear, TV, FastFood",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };

  const margeSimpson = {
    firstName: "Marge",
    lastName: "Simpson",
    job: "No Job",
    hobby: "coocking",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
  };

  const bartSimpson = {
    firstName: "Bart",
    lastName: "Simpson",
    job: "No job",
    hobby: "Skate",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
  };

  // Как мы работали с событиями раньше на базовом курсе
  // const button = document.querySelector("#get-button");

  // button.addEventListener('click', () => {
  //   console.log("Button works")
  // });

  const getUser = () => {
    console.log("Button works");
  };

  return (
    <div className="homework03_page_wrapper">
      <SimpsonsCard
        // Если ключей в обьекте props более 10, то лучше передавайть не отдельно а целым обьектом
        avatarURL={homerSimpson.avatarURL}
        firstName={homerSimpson.firstName}
        lastName={homerSimpson.lastName}
        job={homerSimpson.job}
        hobby={homerSimpson.hobby}
      />
      <SimpsonsCard
        avatarURL={margeSimpson.avatarURL}
        job={margeSimpson.job}
        hobby={margeSimpson.hobby}
      />
      <SimpsonsCard
        avatarURL={bartSimpson.avatarURL}
        firstName={bartSimpson.firstName}
        lastName={bartSimpson.lastName}
        job={bartSimpson.job}
        hobby={bartSimpson.hobby}
      />
      <div className="buttonContainer">
        <Button onClick={getUser} buttonName="Get User" />
        <Button
          onClick={() => {
            console.log("send request");
          }}
          buttonName="Send request"
        />
        <Button>
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/9971/9971680.png"
          />
        </Button>
        {/* <button id="get-button">Get</button> */}
        {/* <button onClick={getUser}>Get</button> */}
      </div>
    </div>
  );
}

export default Lesson_03;
