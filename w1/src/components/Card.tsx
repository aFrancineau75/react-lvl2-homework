// 1) interface dédiée
interface CardProps {
  name: string;
}

const Card = ({name}:CardProps) => {
  return (
     <section className='w-96 h-64 bg-gray-300 mt-12 flex justify-center items-center text-gray-500 border rounded-xl' >
        <p className='text-xl font-bold'>My name is {name} </p>
    </section>   
    
  )
}

export default Card