// import React, { useState } from "react";
// import "./App.css";
// function App() {
//   const [num, setNum] = useState(0);
//   const [outValue, setOutValue] = useState("");
//   const [nameValue1, setNameValue1] = useState("");
//   const [nameValue2, setNameValue2] = useState("");
//   const[inputValues,setInputValues] = useState({
//     inputValue:"",
//     inputValue2:"",
//   });
//   const changeValue =(e,text)=>{
//     if (text==="first"){
//       setInputValues({...inputValues,inputValue: e.target.value});
//     } else if(text==="second"){
//       setInputValues({...inputValues,inputValue2: e.target.value});
//     }
//   };

//   return (
//     <>
//     {/* NUMBER COUNTER  */}
//       <div style={{ textAlign: "center" }}>
//         <h1>Number Counter</h1>
//         <h1>{num}</h1>
//         <div id="btn">
//           {" "}
//           <button
//             onClick={() => {
//               if (num > 0) {
//                 setNum(num - 1);
//               }
//             }}
//           >
//             <a> Decrement</a>
//           </button>
//           <button
//             onClick={() => {
//               setNum(num + 1);
//             }}
//           >
//             <a>Increment</a>
//           </button>
//         </div>
//         <hr />
//       </div>
// {/* LIVE NAME SYNCING  */}
//       <div style={{ textAlign: "center" }}>
//         <h1>Live Text Syncing</h1>
//         <h2>{outValue}</h2>
//         <input
//           type="Text"
//           placeholder="Enter your Name"
//           value={outValue}
//           onChange={(e) => {
//             setOutValue(e.target.value);
//           }}
//         />
//         <hr />
//       </div>
//       {/* SIMPLE FORM  */}
//       <div style={{ textAlign: "center" }}>
//         <h1>Simple Form</h1>
//         <div id="left">
//           <input
//             type="Text"
//             placeholder="Enter your Name"
//             value={nameValue1}
//             onChange={(e) => {
//               setNameValue1(e.target.value);
//             }}
//           />
//           <h2>{nameValue1}</h2>
//           <input
//             type="email"
//             placeholder="Enter your Email"
//             value={nameValue2}
//             onChange={(e) => {
//               setNameValue2(e.target.value);
//             }}
//           />{" "}
//           <h2>{nameValue2}</h2>
//         </div>

//         <hr />
//       </div>
//    <div style={{ textAlign: "center" }}>
//         <h1>Object Use</h1>
//         <h2>{inputValues.inputValue}{inputValues.inputValue2}</h2>
//         <input
//           type="Text"
//           placeholder="Enter first Name"
//           value={inputValues.inputValue}
//           onChange={(e)=>changeValue(e,"first")}
//         />
//          <input
//           type="Text"
//           placeholder="Enter last Name"
//           value={inputValues.inputValue2}
//           onChange={(e) => {
//             changeValue(e,"second")
//           }}
//         />
//         <hr />
//       </div>

      
//     </>
//   );
// }

// export default App;
import { useState } from "react";
import "./App.css";

const departmentData = {
  name: "Computer Engineering",
  description:
    "Computer Engineering Department ki verified information students, visitors aur external examiners ke liye.",
  faculty: [
    "Prof. A. Sharma - HOD",
    "Prof. R. Patil - Faculty",
    "Prof. S. Khan - Faculty",
  ],
  labs: [
    {
      name: "Programming Lab",
      room: "Lab 1",
      equipment: "35 Computers",
      software: "VS Code, Python, Java, Git",
    },
    {
      name: "Networking Lab",
      room: "Lab 2",
      equipment: "30 Computers + Routers",
      software: "Cisco Packet Tracer, Wireshark",
    },
  ],
  projects: [
    "Smart Campus QR",
    "Student Finance Manager",
    "Placement Preparation Portal",
  ],
  achievements: [
    "Inter-college Hackathon Participation",
    "Technical Paper Presentation",
    "Student Project Exhibition",
  ],
};

function App() {
  const [page, setPage] = useState("home");
  const [selectedLab, setSelectedLab] = useState(null);

  const [department, setDepartment] = useState(departmentData);

  const [editName, setEditName] = useState(department.name);
  const [editDescription, setEditDescription] = useState(
    department.description
  );

  const openLab = (lab) => {
    setSelectedLab(lab);
    setPage("lab");
  };

  const saveUpdate = () => {
    setDepartment({
      ...department,
      name: editName,
      description: editDescription,
    });

    alert("Information updated successfully!");
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div
          className="logo"
          onClick={() => setPage("home")}
        >
          Smart<span>Campus</span> QR
        </div>

        <button
          className="adminBtn"
          onClick={() => setPage("admin")}
        >
          Admin Demo
        </button>
      </nav>

      {/* HOME */}
      {page === "home" && (
        <>
          <section className="hero">
            <div className="heroContent">

              <span className="badge">
                Final Year Project Prototype
              </span>

              <h1>
                One QR.
                <br />
                Complete Campus Information.
              </h1>

              <p>
                Students, visitors and external examiners can
                access verified college information simply by
                scanning a QR code.
              </p>

              <div className="heroButtons">

                <button
                  className="primaryBtn"
                  onClick={() => setPage("department")}
                >
                  Explore Department
                </button>

                <button
                  className="secondaryBtn"
                  onClick={() => setPage("qr")}
                >
                  View QR Demo
                </button>

              </div>
            </div>
          </section>

          <section className="section">

            <h2>Who Can Use It?</h2>

            <div className="cardGrid">

              <InfoCard
                icon="🎓"
                title="Students"
                text="Quickly access department, laboratory and project information."
              />

              <InfoCard
                icon="👨‍🏫"
                title="Faculty & HOD"
                text="Manage and publish verified department information."
              />

              <InfoCard
                icon="🧑‍💼"
                title="External Examiner"
                text="Access organized department and project information during visits."
              />

              <InfoCard
                icon="👤"
                title="Visitors"
                text="Explore college facilities and departments without asking anyone."
              />

            </div>

          </section>
        </>
      )}

      {/* QR PAGE */}
      {page === "qr" && (
        <div className="page">

          <button
            className="backBtn"
            onClick={() => setPage("home")}
          >
            ← Back
          </button>

          <div className="qrCard">

            <span className="badge">
              QR Demo
            </span>

            <h2>
              Computer Engineering Department
            </h2>

            <div className="fakeQR">
              ▦
            </div>

            {/* <p>
              Final version me ye QR department ke
              entrance par lagaya ja sakta hai.
            </p> */}

            <button
              className="primaryBtn"
              onClick={() => setPage("department")}
            >
              Open QR Destination
            </button>

          </div>

        </div>
      )}

      {/* DEPARTMENT */}
      {page === "department" && (
        <div className="page">

          <button
            className="backBtn"
            onClick={() => setPage("home")}
          >
            ← Back
          </button>

          <div className="departmentHeader">

            <span className="badge">
              Verified Department Information
            </span>

            <h1>{department.name}</h1>

            <p>
              {department.description}
            </p>

          </div>

          <div className="stats">

            <Stat number="18" text="Faculty" />
            <Stat number="6" text="Labs" />
            <Stat number="420" text="Students" />

          </div>

          <div className="contentGrid">

            {/* FACULTY */}
            <div className="contentCard">

              <h2>👨‍🏫 Faculty</h2>

              <ul>
                {department.faculty.map(
                  (faculty, index) => (
                    <li key={index}>
                      {faculty}
                    </li>
                  )
                )}
              </ul>

            </div>

            {/* ACHIEVEMENTS */}
            <div className="contentCard">

              <h2>🏆 Achievements</h2>

              <ul>
                {department.achievements.map(
                  (achievement, index) => (
                    <li key={index}>
                      {achievement}
                    </li>
                  )
                )}
              </ul>

            </div>

            {/* PROJECTS */}
            <div className="contentCard">

              <h2>💻 Student Projects</h2>

              <ul>
                {department.projects.map(
                  (project, index) => (
                    <li key={index}>
                      {project}
                    </li>
                  )
                )}
              </ul>

            </div>

            {/* LABS */}
            <div className="contentCard">

              <h2>🧪 Laboratories</h2>

              {department.labs.map(
                (lab, index) => (
                  <div
                    className="labBox"
                    key={index}
                  >

                    <h3>{lab.name}</h3>

                    <p>
                      {lab.room}
                    </p>

                    <button
                      className="smallBtn"
                      onClick={() => openLab(lab)}
                    >
                      View Lab
                    </button>

                  </div>
                )
              )}

            </div>

          </div>

          <div className="notice">
            Prototype: Future version me authorized
            staff dashboard se ye information update
            kar sakenge.
          </div>

        </div>
      )}

      {/* LAB */}
      {page === "lab" && selectedLab && (
        <div className="page">

          <button
            className="backBtn"
            onClick={() => setPage("department")}
          >
            ← Back
          </button>

          <div className="labDetails">

            <span className="badge">
              Laboratory
            </span>

            <h1>{selectedLab.name}</h1>

            <p>
              <b>Room:</b> {selectedLab.room}
            </p>

            <p>
              <b>Equipment:</b>{" "}
              {selectedLab.equipment}
            </p>

            <p>
              <b>Software:</b>{" "}
              {selectedLab.software}
            </p>

            <h2>Lab Rules</h2>

            <ul>
              <li>Use systems for academic work.</li>
              <li>Report faulty equipment.</li>
              <li>Keep the laboratory clean.</li>
            </ul>

          </div>

        </div>
      )}

      {/* ADMIN */}
      {page === "admin" && (
        <div className="page">

          <button
            className="backBtn"
            onClick={() => setPage("home")}
          >
            ← Back
          </button>

          <div className="adminCard">

            <span className="badge">
              Admin Prototype
            </span>

            <h1>
              Information Management
            </h1>

            <p>
              Authorized staff future version me
              department information update kar sakenge.
            </p>

            <label>
              Department Name
            </label>

            <input
              value={editName}
              onChange={(e) =>
                setEditName(e.target.value)
              }
            />

            <label>
              Department Description
            </label>

            <textarea
              value={editDescription}
              onChange={(e) =>
                setEditDescription(e.target.value)
              }
            />

            <button
              className="primaryBtn"
              onClick={saveUpdate}
            >
              Publish Update
            </button>

          </div>

        </div>
      )}

    </div>
  );
}


/* COMPONENTS */

function InfoCard({ icon, title, text }) {
  return (
    <div className="infoCard">

      <div className="cardIcon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

    </div>
  );
}


function Stat({ number, text }) {
  return (
    <div className="statCard">

      <strong>{number}</strong>

      <span>{text}</span>

    </div>
  );
}

export default App;
