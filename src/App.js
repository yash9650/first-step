import './App.css';
import Home from './Components/Home';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    fetch('/home',{
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => res.json()).then((result) => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    })
  },[]);

  return (
    <>
    <Home/>
    </>
  );
}

export default App;
