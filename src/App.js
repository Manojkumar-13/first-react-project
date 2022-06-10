import Hero from './components/Hero';
import Book from './components/Book'
import './App.css';

function App() {
  return (
    <div>
      <Hero/>
      <h2 className="book-collection">Check out the Collections </h2>
      <div className="books">
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      </div>
      
    </div>
  );
}

export default App;
