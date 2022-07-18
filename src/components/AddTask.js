import React from 'react'

const AddTask = () => {
  return (
    <form className='add-form'>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task'/>
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' placeholder='Add Day & time'/>
        </div>
        <div className='form-control'>
            <label>Reminder</label>
            <input type='text' placeholder='Add Task'/>
        </div>
    </form>
  )
}

export default AddTask