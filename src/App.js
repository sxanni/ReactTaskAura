import logo from './img/logo-light.png';
import logoblk from './img/logo-blk.png';
import glogo from './img/google.png';
import Signin from "./Signin";
import Login from "./Login";
import Header from "./components/Header";
import Home from "./Home";
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
import Profile from "./components/Profile";
import Collection from "./components/Collection";
import './App.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap';
import { useState } from "react";

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)// to connect AddBtn, first create new function/The addTask form will  now be dependent on this piece of state/
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

  //Function to (ADD TASK)
  const addTask = (task) => {
    console.log(task);
    const id =  Math.floor(Math.random() * 10000) + 1 //create mock id which is randomized, rounded down number( for when not dealing with database)
    const newTask = {id, ...task }// add new task as object with above id, copy of (task) contents
    setTasks([...tasks, newTask]) // trigger set task to set it as copy of current tasks and also add newTask contents
  }
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
{/* <div> */}
    {/* //header title set in (title='') and also onAdd set to change setshowAddTask TO the opposite of whatever it currently is, which is false by default */}
  <Header title='TaskAura' onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask} />
  
  <Login/>
  {/* pass in props to tasks below within <Tasks/> component tag-> passed for  prop (tasks), prop(onToggle) connected to toggleReminder function in App.js /&/ prop(ondelete) conected to deleteTask function in app.js */}
  
  {tasks.length> 0 ? ( // wrap <Tasks/> in a fuunction stating :- if number of tasks in array > 0
  <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>): //display <Tasks/> else display message below
   ('You have no tasks. Add one to strengthen your aura!')} 
{/* </div> */}

{/* //wrap where you AddTask in conditional dependent on showAddTask state declared in the head */}

{showAddTask && //this means- If showAddTask is true, display <AddTask/>
<AddTask onAdd={addTask}/> 
}





 {/* <BrowserRouter>
 <div>
   <Header/>
 <Routes>
   <Route exact path="/" element={<Home />} />
   <Route path="/login" element={<Login />} />
   <Route path="/addTask" element={<AddTask />} />
   <Route path="/profile" element={<Profile />} />
   <Route path="/collection" element={<Collection />} />
 </Routes>
 </div>
</BrowserRouter>  */}
    </div>

  );
}

export default App;
