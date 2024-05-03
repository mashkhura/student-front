import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header/>
     <Routes>
     <Route path="/" element={<HomePage />} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
