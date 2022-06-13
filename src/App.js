import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/pages/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
