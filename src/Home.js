import React from 'react';
import AddBtn from './components/AddBtn';
import Header from './components/Header'
import Tasks from './components/Tasks'


const Home = () => {
  return (
    <div >

        <Header/>
        <Tasks />
        <AddBtn/>
    </div>
        


        
  )
}

export default Home;