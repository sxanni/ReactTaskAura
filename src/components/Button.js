import PropTypes from 'prop-types'


const Button = ({color, text, onClick, src}) => {
  return (
    //profile avatar styling below
    <button onClick={onClick} style={{backgroundColor:color,}} className=' btn btn-outline-dark border-5 rounded-circle m-3 p-0 img-responsive '>
        {/* {text} */}
       <img className='avatar border rounded-circle  mr-1 pr-2 img-responsive' src={src}/>
    </button>

  )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes ={
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button