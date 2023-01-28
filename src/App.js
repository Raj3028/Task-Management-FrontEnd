// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/home'
import ErrorPage from './Components/errorPage'
import SignUp from './Components/signup';
import Login from './Components/login';
import Task from './Components/task'


function App() {
  return (

    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <BrowserRouter>
        <div className='logo'><h2>UW Infotech</h2></div>
        <div className='route'>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='signup' element={<SignUp />} />

            <Route path='login' element={<Login />} />

            <Route path='task' element={<Task />} />
            
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
