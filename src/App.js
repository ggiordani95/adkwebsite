import "./App.css";

import { Main } from "./components/HomePage/Main";
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { NavigationBar } from "./components/Navbar/NavBar";

function App() {
  return (
    <BrowserRouter>
      
      
      <NavigationBar />
      
      <Routes>
        <Route path="/*" exact element={<Main/>}/>
        
      </Routes>
      
      
    
    </BrowserRouter>
  );
}

export default App;
