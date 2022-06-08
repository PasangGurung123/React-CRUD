import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/pages/Home';
import DemoHome from './components/pages/DemoHome';

import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
import DemoNavbar from './components/layout/DemoNavbar';
import Services from './components/pages/Services';

function App() {
  return (
    <Router>
      <DemoNavbar />
      <Routes>
        <Route  path="/" element={<DemoHome />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/contacts" element={<Contacts />}/>
        <Route  path="/services" element={<Services />}/>
        
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="/users/:id" element={<User />} />
        <Route  path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
