import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/contacts" element={<Contacts />}/>
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="/users/:id" element={<User />} />
        <Route  path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
