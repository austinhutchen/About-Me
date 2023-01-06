import "./App.css";
import img from "./images/standing.jpg";
function App() {
  return (
    <div className="App">
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
      <body>
        <img src={img} width="400" height="400" />
      </body>
      <hr></hr>
      <footer>
        <p className="center">
          <h2 className="hlight">
            <b>NOTABLE PROJECTS:</b>
          </h2>
          <ul>
          <li>
          <a href="https://github.com/austinhutchen/levelquest.git">Zelda clone (c++)</a>
          </li>
            <li>
            <a href="https://github.com/austinhutchen/levelquest.git">Functional calculator App (Flutter/dart)</a>
          </li>
          </ul>
        </p>
         
     
        <hr></hr>
      </footer>
    </div>
  );
}

export default App;
