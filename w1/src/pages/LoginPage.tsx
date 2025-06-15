import { useState } from "react";
import LoginForm, { type loginForm } from "../components/LoginForm";


const LoginPage = () => {
    const [isSubmit,setIsSubmit] = useState<boolean>(false);
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');

    const handleSubmit = (data:loginForm) => {
        setEmail(data.email);
        setPassword(data.password);
        setIsSubmit(true);
    }
  return (
    <main className="w-full flex-col flex items-center mt-24 h-[100vh]">
        <h1 className="font-bold text-2xl mt-8" >Homework 2 week 1:</h1>
        <LoginForm onSubmit={handleSubmit}/>
        {
            isSubmit&& (
                <div className="flex flex-col mt-12">
                    <strong className="text-xl">Summary:</strong>
                    <p>email: {email}</p>
                    <p>password: {password}</p>
                </div>
            )
        }
    </main>
  )
}

export default LoginPage