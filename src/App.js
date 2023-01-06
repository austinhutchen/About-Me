import "./App.css";
import img from "./images/standing.jpg"
function App() {
  return (
    <div className="App">
      <header>
        <u>
          <hr></hr>
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
      <body>
        <img src={img} width="500" height="500"/>
      </body>
      <hr></hr>
      <footer>
        <p className="center">
          <h2 className="hlight">NOTABLE PROJECTS:</h2>
          <li>Zelda clone (c++)</li>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          My github
        </a>
        <hr></hr>
      </footer>
    </div>
  );
}

export default App;
