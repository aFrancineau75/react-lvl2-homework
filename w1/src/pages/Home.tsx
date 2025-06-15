import React, { useState } from 'react';
import Card from "../components/Card";
import Footer from '../components/Footer';

const Home = () => {
  const [name, setName] = useState('Alexandre');
  const handleValue = (event:React.ChangeEvent<HTMLInputElement>)=>{
      setName(event.target.value)
    }
  return (
    <div className='flex flex-col'>
      <main className='w-full  min-h-[100vh] flex items-center mt-32 flex-col'>
        <div className='grid grid-rows-3 gap-2 '>
          <h1 className='font-light flex justify-center' >Week 1 homework 1 </h1>
          <h3 className='font-thin italic flex justify-center'> Change card name below !</h3>
          <input type="text" value={name} onChange={handleValue} className='bg-white w-64 text-black pl-2 py-1.5 flex '/>  
        </div>
        <Card name={name} />

      </main>
      <Footer />
    </div>
  )
}

export default Home