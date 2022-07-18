import { FaBars, FaTimes } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap';


const Task = ({task, onDelete, onToggle}) => { //catching onToggle function from App.js as prop /,/ catching onDelete function from Tasks.js as prop /&/ catching task mapping/deconstruction of [tasks]array from Tasks component as prop
  return (
                        // meaning this is now where the individual tasks panel will be broken down into its subparts like the date, time and description
                        
                        //onDOuble click of this div, trigger onToggle prop
    <div  style={{zIndex: '50'}} className={` ,task-container task ${task.reminder ? 'reminder' : ' '} `}  onDoubleClick={() => 
        onToggle(task.id)}>

    <div style={{zIndex: '40'}} className="task" > 
    {/* got title and icon x on same level with this divs styling */}
            <div  style={{ display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <h3 >
                    {task.text}{' '}
                </h3>
                <h3   >
                <FaTimes 
                 className="x-icon"
                style={{marginLeft:'auto', cursor: 'pointer',display:'flex', justifyContent:'flex-between', alignContent:'flex-between' }}
                // onClick={onDelete}
                onClick={() => onDelete(task.id)}//to pass id in onClick event call a function and then call onDelete before passing in the task.id
                />
                {/* pass in delete function prop to x button with onClick event  */}
                </h3>

            </div>
            <p style={{display:'flex', justifyContent:'flex-between'}}>
                {task.day}
            </p>
    </div>
    </div>

  )
}

export default Task