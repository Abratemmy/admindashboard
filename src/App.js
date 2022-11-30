
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from './pages/Dashboard/dashboard';
import Users from './pages/Users/users';
import Singleuser from './pages/singleuser/singleuser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route  exact path="/dashboard" element={<Dashboard />} />
            <Route  exact path="/" element={<Dashboard />} />
            <Route exact path="users" element={<Users />} />
            <Route  path="users/:id" element={<Singleuser />}/>
       

          
        </Routes>
      </BrowserRouter>
      {/* <div className="AppGlass">
        <Sidebar />
        <div></div>
      </div> */}
    </div>
  );
}

export default App;
