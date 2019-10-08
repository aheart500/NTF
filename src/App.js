import React,{useEffect,useState} from 'react';
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Loader from './components/Loader'
import {Switch , Route} from 'react-router-dom'

function App() {
  const[loading,setLoading] = useState(true)
  useEffect(()=>{
    setLoading(false)
  },[])
  if (loading){
    return (
      <Loader />
    )
  }
  return (
  <>
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </>
  );
}

export default App;
