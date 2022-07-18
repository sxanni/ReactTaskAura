import PropTypes from 'prop-types'
import Button from './Button'
import icon from "../img/logo-blk.png";
import avatar from '../img/avatar.jpg'


const Header = ({ title }) => {
    //function to handle onclick
    const onClick = () => {
        console.log('open profile page Click')
    }
  return (
    <header style={{zIndex: '100'}} className='header mt-4 border p-2'>
        <div className='d-flex flex-row justify-items-start align-items-center'>

        <img className=" p-0 " style={{objectFit: 'cover', width: '120px'}} src={icon}/>
            <h1 >
                
                {title}
            
            </h1>
        </div>
            <div className=' circle-btn-header rounded-circle border  '>

            <Button onClick={onClick} color='' text='Profile' src={avatar} />
            </div>
    </header>
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