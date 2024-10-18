import logo from './logo.svg';
import './App.css';
import CadastroProduto from './pages/CadastroProduto';
import Login from './pages/Login';
import Produtos from './pages/Produtos';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/cadastroProduto" element={<CadastroProduto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;