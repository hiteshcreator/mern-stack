import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Service } from './pages/service';
// import Navbar from './components/Navbar';

const App = () =>{
  return (
    <>
      <BrowserRouter>
       {/* <Navbar /> */}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/service" element={<Service/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;