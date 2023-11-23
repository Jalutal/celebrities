import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AllCelebrities from "./pages/AllCelebrities";
import OneCelebrity from "./pages/OneCelebrity";
import Random from "./pages/Random";
import TvSpeakersPage from "./pages/TvSpeakersPage";
import CopyrightPage from "./pages/CopyrightPage";
import FormMessagePage from "./pages/FormMessagePage";
import LikesPage from "./pages/LikesPage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/allceleb" element={<AllCelebrities />} />
        <Route path="/celebrities/:celebrityId" element={<OneCelebrity />} />
        <Route path="/random" element={<Random />} />
        <Route path="/speakers" element={<TvSpeakersPage />} />
        <Route path="/copyright" element={<CopyrightPage />} />
        <Route path="/message" element={<FormMessagePage />} />
        <Route path="/likes" element={<LikesPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
