import PropTypes from 'prop-types'
import Button from './Button'
import icon from "../img/logo-blk.png";
import avatar from '../img/avatar.jpg';
import AddBtn from './AddBtn';




const Header = ({ title, onAdd, showAdd }) => {
    const style = {
        transform: showAdd ? 'rotate(90deg)' : '', 
        transition: 'transform 150ms ease', // smooth transition
       }
    //function to handle onclick
    const onClick = () => {
        console.log('open profile page Click')
    }
  return (
    < >
    <div style={{zIndex:'10'}}>
    <header  className='header mt-4 border p-2'>
        <div className='d-flex flex-row justify-items-start align-items-center'>

        <img className=" p-0 " style={{objectFit: 'cover', width: '70px'}} src={icon}/>
            <h1 >
                
                {title}
            
            </h1>
        </div>
            <div className=' circle-btn-header rounded-circle border  '>

            <Button onClick={onClick} color='' text='' src={avatar} />
            </div>

    </header>

    <div className=' circle-btn-add rounded-circle border  '>
      <AddBtn onClick={onAdd} color={showAdd ? 'red': 'white'} style={style} text='' src='' showAdd={showAdd} />      
      </div>
      </div>
    </>

    
  ) 
}

Header.defaultProps = { // set default props value for prop
    title: 'TaskAura',
}

Header.propTypes = { //set Prop type for prop
    title: PropTypes.string
}

// CSS in JS()
// const headingStyle = {
//     color:'red',
//     backgroundColor: 'black',
// }



export default Header