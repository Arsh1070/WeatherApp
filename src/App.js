import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import CountryDetail from "./Components/CountryDetail";

function App() {
  return (
    <>
      <MainPage />
      <Routes>
        <Route path="/next" element={<CountryDetail />} />
      </Routes>
    </>
  );
}

export default App;
