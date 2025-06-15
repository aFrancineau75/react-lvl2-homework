
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";

function App() {

  return (
    <Router>
      <div className="flex flex-col">
        <Header />
      <Routes>
          <Route path='/' element={<Home/>}></Route> 
          <Route path='/w1-h2' element={<LoginPage />} ></Route>
      </Routes>  
      </div>
      
    </Router>
  )
}

export default App
