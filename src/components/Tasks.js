// import { useState } from "react";
import Task from './Task'
import AddBtn from './AddBtn';
import PropTypes from 'prop-types'

const Tasks = ( {tasks, onDelete, onToggle} ) => { //catching onToggle function from App.js as prop /,/ catching onDelete function from App.js as prop /&/ catching task array from app.js as a prop here

  const onClick = () => {
    console.log('Add new task')
}

  return (
    // setTasks([]) <----adds new object
    <>
      {tasks.map((task) => ( //maping tasks array here into task
        
          <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/> //key is = array.id /also/  propping task to task in array, this connects this property to task prop in Task element        
      ))}

      <div className=' circle-btn-add rounded-circle border  '>
      <AddBtn onClick={onClick} color='white' text='' src='' />      
      </div>
    
    </>
  );
};

export default Tasks;
