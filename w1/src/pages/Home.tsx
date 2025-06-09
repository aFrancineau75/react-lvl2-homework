import React, { useState } from 'react';
import Header from "../components/Header";
import Card from "../components/Card";

const Home = () => {
  const [name, setName] = useState('Alexandre');
  const handleValue = (event:React.ChangeEvent<HTMLInputElement>)=>{
      setName(event.target.value)
    }
  return (
    <div className='flex flex-col'>
      <Header />
      <main className='w-full  h-[120vh] flex items-center mt-32 flex-col'>
        <div className='grid grid-rows-2 gap-2 '>
          <h3 className='font-thin italic flex justify-center'> Change card name below !</h3>
          <input type="text" value={name} onChange={handleValue} className='bg-white w-64 text-black pl-2 py-1.5 flex '/>  
        </div>
        
        
        <Card name={name} />
      </main>
      
    </div>
  )
}

export default Home