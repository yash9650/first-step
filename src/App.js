import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './HelperComponents/Header';
import Footer from './HelperComponents/Footer';
import About from './Components/About';
import Login from './Components/Login';
import Register from './Components/Register';
import Detail from './Components/Detail';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getData } from './store/DiseaseSlice';


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getData());
  },[]);

  return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
