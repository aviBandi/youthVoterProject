import logo from './logo.svg';
import Contact from './pages/contact';
import Home from './pages/home';
import Resources from './pages/resources';
import Team from './pages/team';
import Register from './pages/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
