import React from 'react'
import Floatdiv from './components/Floatdiv'
import Profile from './components/profile/Profile'



const App = () => {
  return (
    <div className='bg-gray-900 min-h-screen '>
     <Floatdiv  size="h-20 w-30" top="10%" left="40" delay={0} />
     <Floatdiv  size="h-20 w-30" top="40%" left="70" delay={1} />
     <Floatdiv  size="h-20 w-30" right="2%" left="-10" delay={2} />
     <Floatdiv  size="h-20 w-30" right="10%" bottom="50" delay={3} />
     <Floatdiv  size="h-20 w-30" right="5%" bottom="60" delay={2} />
<Profile/>

    </div>
  )
}

export default App
