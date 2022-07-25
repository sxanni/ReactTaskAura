import React from "react";
import { useState } from "react";
import {collection, getDocs, addDoc} from "firebase/firestore";
import "@firebase/firestore";



const AddTask = ({onAdd, tasksCollectionRef}) => {
  // component level states to handle and grab form values to be sent to database
  // const [id, setId] = useState("");
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false); //state for check box to always initially be unchecked

  
  const createTask = async () => { //async to deal with making request to database
    await addDoc(tasksCollectionRef, {text:text, day:day, reminder:reminder})//addDoc function takes in reference collection and object containing data to be added tocollection
}; //BIGGEST BUG WAS ABOVE  HERE, I HAD PUT text: setText instead of text: text etc, putting wrong values :'( 
    
const onSubmit = (e) => { //onsubmit function taking in event object (e)
        e.preventDefault() //prevent it from submitting to a page

        //if there is no text value in input
        if (!text) { 
            alert('Please add a task') //prompt user to add task
            return
        }

        onAdd({text, day, reminder}) //call onAdd and pass in the objects text,day and reminder

        //clear the form by setting all its values to emptyspace
        setText('')
        setDay('')
        setReminder(false)//set checkbox to uncheck aka false



    }

  return (
    <div>
      {/* <Header/> */}
      <form id="addForm" className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input type="hidden" id="hiddenId"/>
          <input
            id="taskTxt"
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(event) => {setText(event.target.value)}} 
          />
        </div>
        <div className="form-control">
          <label>Day & Time</label>
          <input
            id="day"
            type="text"
            placeholder="Add Day & time"
            value={day}
            onChange={(event) => {setDay(event.target.value)}}
          />
        </div>
        <div className="form-control-check">
          <label>Set Reminder</label>
          <input
            id="reminder"
            type="checkbox"
            checked={reminder}
            placeholder="Add Task"
            value={reminder}
            onChange={(event) => {setReminder(event.currentTarget.checked)}}
          />
        </div>

        <input
        onClick={createTask} 
          type="submit"
          value="Save Task"
          className="btn btn-outline-dark w-100 d-block mt-5"
        />
      </form>
    </div>
  );
};

export default AddTask;
