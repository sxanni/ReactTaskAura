import logo from './img/logo-light.png';
import Tasks from './components/Tasks';
import logoblk from './img/logo-blk.png';
import glogo from './img/google.png';
import Signin from "./Signin";
import Home from "./Home";
import Login from "./Login";
import Header from "./components/Header";
import NavBar from './components/NavBar';
import './App.css';
// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap';
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState( //setTasks is how we trigger state of tasks
    [
      {
        id: 1,
        text: "Doctors Appointement",
        day: "Feb 5th at 2:30am",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at school",
        day: "Aug 6th at 4:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Studio session",
        day: "Aug 6th at 9:30pm",
        reminder: false,
      },
      {
        id: 4,
        text: "turn to a spaceship",
        day: "Aug 8th at 10:30pm",
        reminder: false,
      },
    ]
  )

  //create function to handle Toggling reminder style on tasks
  const toggleReminder = (id) => {
    console.log('reminder toggled', id)// and its going to output a console log of 'reminder toggled' & the id value
    setTasks(tasks.map((task) => task.id === id ? //if/where the task.id is eaqual to id
    { ...task, reminder: !task.reminder } // copy an object with all the task properties and value bbut change the reminder:true/false to the opposite of its current value
    : task)) //else its just gonna be task( this means there will be no chage)
  }

  // create function for handling deleting of tasksdelete task 
  const deleteTask = (id) => { //its gonna take in a specific id
    setTasks(tasks.filter((task) => task.id !== id)) //.filter is an array method for getting a portion of an array that comes through function parameters( in this cae, if the task.id is not =(!==) id) this essentially deletes it
    console.log('delete', id)// and its going to output a console log of 'delete' & the id value
  }
  return (
<div className='App container'> 
<div>

  <Login/>
  <Header title='TaskAura'/>
  {/* pass in props to tasks below within <Tasks/> component tag-> passed for  prop (tasks), prop(onToggle) connected to toggleReminder function in App.js /&/ prop(ondelete) conected to deleteTask function in app.js */}
  
  {tasks.length> 0 ? ( // wrap <Tasks/> in a fuunction stating :- if number of tasks in array > 0
  <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>): //display <Tasks/> else display message below
   ('You have no tasks. Add one to strengthen your aura!')} 
</div>



    
     
    {/* </header> */} 

    {/* <BrowserRouter>
    <Routes>
      <Route exact path="/" e  lement={<Signin />} />
      <Route path="/addtask" element={<Addtask />} />
    </Routes>
  </BrowserRouter> */}
    </div>

  );
}

export default App;
