import './App.css'
import Card from './components/Card'
function App() {
  const arr = [
    {
      name:"Ganeshh Avsarmol",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6hgPJoR6eTvMuaBa18OnDjzM6g9kuDLfEo8mFxhC4EQ&s=10",
      course:"FrontEnd",
      age:"20",
      city:"Chikhli",
      btnText:"View Profile",
    }, 
    {
      name:"Shaikh Sahil",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VHqRvpwyoSbiR5rZ2XskyRzljh-QvnsMBo7f6LAWgQ&s=10",
      course:"BackEnd",
      age:"21",
      city:"Chikhli",
      btnText:"View Profile",
    },
     {
      name:"Aman Verma",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNRdIJkfQuV4jWosCzyrpooqAGDvFLqXr6BpvxqT6SqQ&s=10",
      course:"Full Stack Devloper",
      age:"22",
      city:"Mumbai",
      btnText:"View Profile",
    },
     {
      name:"Neha Singh",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPhnXY8cU2bOxEUG3xZXLW4Jmt6si4bZbvIFOj26QVFg&s=10",
      course:"UI/UX Design",
      age:"20",
      city:"Bangalore",
      btnText:"View Profile",
    },
     {
      name:"Arjun Mehta",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-unM0rk1r3JcLhzvwFDbuzLuS9ueR1xwRDYFOfiv-Q&s=10",
      course:"Node JS",
      age:"21",
      city:"Pune",
      btnText:"View Profile",
    },
  ];

  return (
    <div id='main'>
      <div id='container'>
        <div id='navbar'>
            <h1>🎓Student Directory🎓</h1>
        <hr />
        </div>
      </div>
    <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
      {arr.map((item,index)=>{
        return(
          <div key={index}>
        <Card
        name={item.name}
        image={item.image}
        course={item.course}
        age={item.age}
        city={item.city}
        btnText={item.btnText}
        />
        </div>
        );
      })}
    </div>
    </div>
  );
}

export default App