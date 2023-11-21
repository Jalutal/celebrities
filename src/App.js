import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AllCelebrities from "./pages/AllCelebrities";
import OneCelebrity from "./pages/OneCelebrity";
import Random from "./pages/Random";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/allceleb" element={<AllCelebrities />} />
        <Route path="/celebrities/:celebrityId" element={<OneCelebrity />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
