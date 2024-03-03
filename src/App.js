 
import Crousel from "./components/Crousel";
import Ebooks from "./components/Ebooks";
import History from "./components/History";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
function App() {
  return (
    <>
     <Navbar />
 
      <div className="conatiner">
      <Routes>
      <Route path="/" element={<Crousel/>} />
      <Route path="/history" element={<History />} />
      <Route path="/ebooks" element={<Ebooks/>} />
      </Routes>
      </div>
    
    </>
  );
}

export default App;
