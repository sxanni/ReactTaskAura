import React from "react";
import { useState } from "react";
// import Header from "./components/Header";

const AddTask = ({onAdd}) => {
  // component level states to handle form values
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false); //state for check box to always initially be unchecked

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
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Day & Time</label>
          <input
            type="text"
            placeholder="Add Day & time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="form-control-check">
          <label>Set Reminder</label>
          <input
            type="checkbox"
            checked={reminder}
            placeholder="Add Task"
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>

        <input
          type="submit"
          value="Save Task"
          className="btn btn-outline-dark w-100 d-block mt-5"
        />
      </form>
    </div>
  );
};

export default AddTask;
