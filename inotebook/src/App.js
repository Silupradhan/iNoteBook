import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {               // THIS CODE FRAGMENT IS USED FOR REACT ROUTER
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoteState from './context/notes/NoteState';




function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path='/about' element={<About />}> </Route>
          </Routes>
        </Router>
      </NoteState>
    </>
  )
}

export default App
