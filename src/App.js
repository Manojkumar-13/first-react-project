// components
import Hero from './components/Hero';
import Book from './components/Book';
// css
import './App.css';
// External Data
import{data} from './books';

function App() {

  return (
    <div>
      <Hero/>
      <h2 className="book-collection">Check out the Collections </h2>
      <div className="books">
      {
        data.map((book) => (
          <Book  key = {book.id} book={book}/>
        ))
      }
      </div>
      
    </div>
  );
}

export default App;
// lists-means array
// in react if and for loop don't work
