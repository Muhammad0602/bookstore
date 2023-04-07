import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BookList from './components/BookList';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
