import { Route, Routes } from "react-router";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import About from "./pages/About";
import Rent from "./pages/Rent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="rent" element={<Rent />} />
        <Route path="about" element={<About />} />
        <Route path="detail" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
