import React from 'react'
import Create from './components/Create'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';

function App() {
  return (
    <div >
      <Router>
      <Routes>
        <Route  path="register" component={Create} />
        <Route path="/" component={SignIn} />
      </Routes>
    </Router>
    </div>
  )
}

export default App