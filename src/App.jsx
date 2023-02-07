import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import AddCard from './components/AddCart';
import Header from './components/Header';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<AddCard />} />

        </Routes>
      </BrowserRouter>

    </>

  )
}
