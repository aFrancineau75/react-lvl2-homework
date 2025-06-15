import {useState, useEffect} from 'react'

export interface loginForm{
    email:string;
    password:string;
}

interface loginProps {
    onSubmit: (data:loginForm) => void;
}

const LoginForm = ({onSubmit}:loginProps) => {
    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");

    const handleEmail = (event:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        localStorage.setItem('email', event.target.value);
    };
    const handlePassword = (event:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        localStorage.setItem('password',event.target.value);
    };

    useEffect(()=>{
        const email = localStorage.getItem('email') || '';
        const password = localStorage.getItem('password') || '';
        setEmail(email);
        setPassword(password);
    }, []);


  return (
    <section className='min-w-sm flex items-center flex-col'>
        <form onSubmit={(e) => {
                e.preventDefault();       
                onSubmit({ email, password });
            }} 
            className='grid grid-rows-auto gap-2 mt-12 w-90 p-8 border border-2 border-gray-500 rounded-xl'>
            <h3 className='text-xl font-bold mb-4'>Login form</h3>
            <label htmlFor="email">Enter your email:*</label>
            <input type="email" id='email' placeholder='Enter your email' value={email} className='w-full p-2 border border-2 border-gray-500 rounded-md' onChange={handleEmail}  required={true} />
            <label htmlFor="password">Enter your password:*</label>
            <input type="password" id='password' placeholder='Enter your password' value={password} className='w-full p-2 border border-2 border-gray-500 rounded-md' onChange={handlePassword} required={true} />
            <button type='submit' className={`w-full ${ password === '' || email=== '' ? 'bg-gray-500': 'bg-blue-500 hover:bg-blue-600'} h-8 rounded-md mt-2`} >
                login 
            </button>
        </form>
    </section>
  )
}

export default LoginForm