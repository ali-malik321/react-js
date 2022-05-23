import './App.css';
// import react from 'react'
// import Loginweb from './components/Loginweb';
import Page1 from './components/Page1';
import Registration2 from './components/Registration2';
import RegistrationFoam from './components/RegistrationFoam';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {
  return (
    <>
  
   <Router>
    <Routes>
     <Route path="/Registration" element={<Page1/>}></Route>
     <Route path="/Registration/foam" element={<Page2/>}></Route>
     <Route path="/Login" element={<Page3/>}></Route>

    </Routes>
   </Router>
    </>
  );
}

export default App;
