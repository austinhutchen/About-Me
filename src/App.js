import "./App.css";
import img from "./images/standing.jpg";
// components
// header component of page
const Header = () => {
  return (
    <>
      <header>
        <u>
          <h1 className="test">Austin Hutchen</h1>
          <hr></hr>
        </u>
        <h2 className="hlight">
          <u>About Me:</u>
        </h2>
        <p></p>
        <i>
          Prospective software engineer with passion for development and
          experience working with startups!
        </i>
      </header>
      <hr></hr>
    </>
  );
};

const Body = () => {
  return (
    <>
      <body>
        <img src={img} width="300" height="300" align="left" />
        <h2 className="hlight">Work Experience:</h2>
        <hr></hr>
        <section>
          <b>
            <u>Mobius Materials, Marketing Consultant (Summer 2020)</u>
          </b>
          <p>Worked as a marketing consultant, </p>
        </section>
      </body>
      <hr></hr>
    </>
  );
};

const Foot = () => {
  return (
    <footer>
      <hr></hr>
      <p className="center">
        <h2 className="hlight">
          <b>NOTABLE PROJECTS:</b>
        </h2>
        <ul>
          <li>
            <a href="https://github.com/austinhutchen/levelquest.git">
              Zelda clone (c++)
            </a>
          </li>
          <li>
            <a href="https://github.com/austinhutchen/IOS-calculator-app">
              Functional calculator App (Flutter/dart)
            </a>
          </li>
        </ul>
      </p>
      <hr></hr>
    </footer>
  );
};
// main app
const App = () => {
  // javascript goes here
  return (
    <div className="App">
      <Header />
      <Body />
      <Foot />
    </div>
  );
};

export default App;
