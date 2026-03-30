import React from 'react'
import greentick from './assets/greentick.png'
import babubhai from './assets/babubhai.jpg'
import lion from './assets/lion.png'
const App = () => {
  return (
    <div className='h-screen w-screen flex'>
        <div className='h-full w-6/12 bg-white'>

        <div className='flex gap-2 '>
          <img className=' w-40 'src={lion}></img>
          <h1 className='m-10 ml-0 mb-0 text-2xl font-bold'> | Sheryians Coding School</h1>
             


          </div>
    
        <h1 className='font-semibold bold text-6xl mx-20 my-40 mb-0'>Learn from the <span className='text-green-300'>coolest <br />
        
                coding   platform</span> in
                <br />
                India.</h1>
                <div className='flex mt-10 ml-20 ' >
                  <img className='w-10' h-10 src={greentick}></img>
                  <p className='mt-2 font-sans text-1.5xl font-bold'>Top Notch Projects</p>
                </div>

                 <div className='flex mt-2 ml-20'>
                  <img className='w-10' h-10 src={greentick}></img>
                  <p className='mt-2 text font-sans text-1.5xl font-bold'>Support via mentors</p>
                </div>
                <button className='bg-teal-300 p-3 w-40 mt-20 mx-20 text-black hover:bg-black hover:text-white font-semibold'>Explore here</button>
                <p className='ml-20 mt-5 font-medium'>We're about coding and Design,it is in our heart and we will love<br />to share all of it with you.</p>
        </div>
        <div className='h-full w-6/12 bg-teal-200'>
        <div className='flex ml-15 mt-10 gap-20 font-medium'>
        <h1 className='hover:underline cursor-pointer'>Home</h1>
        <h1 className='hover:underline cursor-pointer'>Courses</h1>
        <h1 className='hover:underline cursor-pointer'>Campus Ambassador</h1>
        <h1 className='hover:underline cursor-pointer'>Classroom</h1>
        <h1 className='hover:underline cursor-pointer'>Sign In</h1>
 </div>
        <img className=' w-screen h-4/5 my-31 object-cover' src={babubhai}></img>
          
        </div>
    </div>
  )
}

export default App;