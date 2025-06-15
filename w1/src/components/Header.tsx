import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className='w-full fixed top-0 flex justify-center py-2 backdrop-blur-3xl'>
        <Link to={'/'} className="text-md p-4 lg:text-lg font-bold text-gray-500 hover:text-white">
            homework 1 week 1
        </Link>
        <Link to={'/w1-h2'} className="text-md p-4 lg:text-lg font-bold text-gray-500 hover:text-white">
            homework 2 week 1
        </Link>
    </header>
  )
}

export default Header