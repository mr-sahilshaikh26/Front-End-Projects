import "./App.css";
import ReactImage from "./assets/react.svg";

function App() {
  return (
    <>
      <div id="main">
        <div className="navbar">
          <div id="left">
            <img src={ReactImage} alt="logo" />
            <h1>My First React App</h1>
          </div>
          <div id="right">
            <a>Home</a>
            <a>About</a>
            <a>Contact</a>
          </div>
        </div>

        <div className="text">
          <h1>WELCOME TO REACT</h1>
          <hr />
          <h3>This is my First React Application</h3>
          <hr id="tag" />
        </div>
        <div id="middle">
          <div>
            {" "}
            <img
              id="photo"
              src="https://cdn-icons-gif.flaticon.com/11324/11324115.gif"
              alt=""
            />
          </div>
          <div>
            <p>
              This is my first <b>React</b> project built using{" "}
              <span style={{ color: "purple" }}>Vite</span>.
            </p>
            <p>
              React is a powerful JavaScript library for building user
              interfaces.
            </p>
            <p>
              Learning React is <span></span>
              <b>
                <mark>fun</mark>
              </b>{" "}
              and exiting!
            </p>
            <p>
              It is <b>important</b> to practice everyday.
            </p>
            <p>
              Start building today and become{" "}
              <span style={{ color: "purple" }}>
                <i>awesome</i>
              </span>{" "}
              developer.
            </p>
            <p>
              Make your concepts{" "}
              <b>
                <u>strong</u>
              </b>{" "}
              and journey <span style={{ color: "green" }}>successful</span>.
            </p>
          </div>
          <hr id="tag" />
        </div>

        <div id="sahil">
          <div id="middle-left">
            <div id="up">
              <img
                src="https://cdn-icons-png.flaticon.com/128/14034/14034296.png"
                alt=""
                width={"55px"}
                height={"55px"}
              />
              <h2 style={{color:"blue"}}>Topics I am Learning</h2>
            </div>
            <div id="down">
              <p>🔵 JSX</p>
              <p>🔵Vite</p>
              <p>🔵React</p>
              <p>🔵JavaScript</p>
              <p>🔵CSS</p>
            </div>
          </div>

          <div id="middle-right">
            <div id="up">
              <img
                src="https://cdn-icons-png.flaticon.com/128/14025/14025576.png"
                alt=""
                width={"55px"}
                height={"55px"}
              />
              <h2 className="my"> My Learning Steps</h2>
            </div>
            <div id="down">
              <p>
                <span style={{ color: "green" }}>1.</span> Intstall React
              </p>
              <p>
                <span style={{ color: "green" }}>2.</span>Learn JSX
              </p>
              <p>
                <span style={{ color: "green" }}>3.</span>Understand Basic
                Concepts
              </p>
              <p>
                <span style={{ color: "green" }}>4.</span>Build Projects
              </p>
              <p>
                <span style={{ color: "green" }}>5.</span>Become a React
                Developer
              </p>
            </div>
          </div>
        </div>
        <hr id="tag" />
        <div id="buttons">
          <button className="btnpurple">Start Learning</button>
          <button className="btnblue">Learn More</button>
          <button className="btngreen">Contact</button>
        </div>

        <div id="info">
          <img
            src="https://cdn-icons-png.flaticon.com/128/15567/15567989.png"
            alt=""
            width={"40px"}
            height={"40px"}
            style={{objectFit:"cover"}}
          />
          <h2 >
            My Information
          </h2>
        </div>
        <div id="table">
          <table id="table-info">
            <tr id="tr-1">
              <th>Name</th>
              <th>Course</th>
              <th>Batch</th>
            </tr>

            <tr id="tr-2">
              <td>Shaikh Sahil</td>
              <td>Front End </td>
              <td>2026</td>
            </tr>
          </table>
        </div>

        <div id="bottom">
          <p className="btm-p">💜</p>
          <p className="btm-p">© 2026 My First React Application</p>
          <p>
            <span style={{ color: "purple" }}>
              Keep Learning, Keep Growing!🚀
            </span>{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

