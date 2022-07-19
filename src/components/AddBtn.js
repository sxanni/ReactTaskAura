import React from "react";
import PropTypes from "prop-types";
import { IoMdAddCircle } from "react-icons/io";

const AddBtn = ({ color, text, onClick, src, showAdd }) => {
  const style = {
    width: "42px",
    height: "42px",
    color: "black",
    cursor: "pointer",
    position:'fixed',
    right: '45px',bottom: '95px',
    transform: showAdd ? 'rotate(45deg)' : '', 
    transition: 'transform 150ms ease', // smooth transition
   }
  return (
    //profile avatar styling below
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="circle-btn-add btn btn-outline-dark rounded-circle "
    >
      <IoMdAddCircle
      
        style={style}
        // onClick={onDelete}
        //to pass id in onClick event call a function and then call onDelete before passing in the task.id
      />
      {/* {text} */}
      {/* <img className='avatar border rounded-circle  mr-1 pr-2 img-responsive' src={src}/> */}
    </button>
  );
};

AddBtn.defaultProps = {
  color: "steelblue",
};

AddBtn.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default AddBtn;
