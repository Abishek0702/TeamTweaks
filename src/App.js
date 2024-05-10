import SignUp from './Components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SignIn from './Components/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import '../src/Components/css/common.css'
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/signin" element={<SignIn/>}/>
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
