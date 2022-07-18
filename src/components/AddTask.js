import React from 'react'
import { useState } from 'react'
// import Header from "./components/Header";


const AddTask = () => {
    // component level states to handle form values
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState('')
  return (
    <div>
    {/* <Header/> */}
    <form className='add-form'>

        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' placeholder='Add Day & time' value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className='form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox' placeholder='Add Task'  value={reminder} onChange={(e) => setReminder(e.target.value)}/>
        </div>

        <input type='submit' value='Save Task' className='btn btn-outline-dark w-100 d-block mt-5' /> 
    </form>
    </div>
  )
}

export default AddTask